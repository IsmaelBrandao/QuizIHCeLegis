const app = document.querySelector('#app');
const setupTemplate = document.querySelector('#setupTemplate');
const themeButton = document.querySelector('#themeButton');
const liveRegion = document.querySelector('#liveRegion');
const bank = window.QUESTION_BANK;

const subjectNames = {
  legislacao: 'Ética e Legislação',
  ihc: 'Interação Humano-Computador',
  mixed: 'Modo misto'
};

const references = [
  ['Constituição Federal — arts. 5º e 37', 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm'],
  ['Código de Ética do Servidor — Decreto 1.171/1994', 'https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm'],
  ['Processo Administrativo — Lei 9.784/1999', 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm'],
  ['STF — Súmula Vinculante 13', 'https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1229'],
  ['ISO 9241-11:2018 — conceitos de usabilidade', 'https://www.iso.org/standard/63500.html'],
  ['Nielsen — 10 heurísticas de usabilidade', 'https://www.nngroup.com/articles/ten-usability-heuristics/'],
  ['Nielsen — gravidade de problemas de usabilidade', 'https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/'],
  ['INEP — ENADE 2017 de ADS', 'https://download.inep.gov.br/educacao_superior/enade/provas/2017/41_TEC_ANA_DES_SIS_BAIXA.pdf']
];

let session = null;
let timerId = null;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function announce(message) {
  liveRegion.textContent = '';
  requestAnimationFrame(() => { liveRegion.textContent = message; });
}

function scrollToTop() {
  const reset = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  reset();
  requestAnimationFrame(reset);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function getSavedStats() {
  try {
    return JSON.parse(localStorage.getItem('av1-quiz-stats')) || { attempts: 0, best: 0 };
  } catch {
    return { attempts: 0, best: 0 };
  }
}

function saveStats(percent) {
  const current = getSavedStats();
  localStorage.setItem('av1-quiz-stats', JSON.stringify({
    attempts: current.attempts + 1,
    best: Math.max(current.best, percent)
  }));
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
  localStorage.setItem('av1-quiz-theme', theme);
}

function renderSetup() {
  clearInterval(timerId);
  session = null;
  app.replaceChildren(setupTemplate.content.cloneNode(true));
  document.querySelector('#bankCount').textContent = bank.length;

  const stats = getSavedStats();
  if (stats.attempts > 0) {
    const note = document.querySelector('.setup-note');
    note.insertAdjacentHTML('beforebegin', `<div class="previous-score"><span>Melhor resultado</span><strong>${stats.best}%</strong><small>${stats.attempts} ${stats.attempts === 1 ? 'tentativa' : 'tentativas'}</small></div>`);
  }

  document.querySelector('#setupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    startSession(values);
  });

  app.focus();
  scrollToTop();
}

function selectQuestions(subject, requestedCount) {
  if (subject !== 'mixed') {
    const pool = shuffle(bank.filter((question) => question.subject === subject));
    return requestedCount === 'all' ? pool : pool.slice(0, Number(requestedCount));
  }

  if (requestedCount === 'all') return shuffle(bank);
  const count = Number(requestedCount);
  const legislation = shuffle(bank.filter((question) => question.subject === 'legislacao'));
  const ihc = shuffle(bank.filter((question) => question.subject === 'ihc'));
  const firstHalf = Math.floor(count / 2);
  return shuffle([...legislation.slice(0, firstHalf), ...ihc.slice(0, count - firstHalf)]);
}

function startSession({ subject = 'mixed', mode = 'training', count = '10' }, explicitQuestions = null) {
  const selected = explicitQuestions || selectQuestions(subject, count);
  session = {
    subject,
    mode,
    questions: selected.map((question) => ({ ...question, options: shuffle(question.options) })),
    index: 0,
    answers: {},
    checked: new Set(),
    bookmarked: new Set(),
    seconds: 0,
    completed: false
  };
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (!session || session.completed) return;
    session.seconds += 1;
    const timer = document.querySelector('#timer');
    if (timer) timer.textContent = formatTime(session.seconds);
  }, 1000);
  renderQuestion();
  scrollToTop();
}

function currentQuestion() {
  return session.questions[session.index];
}

function answerFor(question) {
  return session.answers[question.id];
}

function renderQuestion() {
  const question = currentQuestion();
  const answer = answerFor(question);
  const checked = session.checked.has(question.id);
  const progress = ((session.index + 1) / session.questions.length) * 100;
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];
  const options = question.options.map((option, index) => {
    const selected = answer === index;
    const revealCorrect = checked && option.correct;
    const revealWrong = checked && selected && !option.correct;
    const classes = ['answer-option', selected ? 'is-selected' : '', revealCorrect ? 'is-correct' : '', revealWrong ? 'is-wrong' : ''].filter(Boolean).join(' ');
    return `<button class="${classes}" type="button" data-option-index="${index}" aria-pressed="${selected}" ${checked ? 'disabled' : ''}>
      <span class="answer-letter">${optionLetters[index]}</span>
      <span>${escapeHtml(option.text)}</span>
      <span class="answer-state" aria-hidden="true">${revealCorrect ? '✓' : revealWrong ? '×' : ''}</span>
    </button>`;
  }).join('');

  const correct = checked ? question.options[answer]?.correct : null;
  const feedback = checked ? `<section class="feedback-panel ${correct ? 'feedback-panel--correct' : 'feedback-panel--wrong'}" aria-live="polite">
    <p class="feedback-verdict">${correct ? 'Resposta correta' : 'Resposta incorreta'}</p>
    <h2>${correct ? 'Confira a justificativa.' : 'Entenda a resposta.'}</h2>
    <p>${escapeHtml(question.explanation)}</p>
    <div class="trap-note"><strong>Ponto de atenção</strong><span>${escapeHtml(question.trap)}</span></div>
    <p class="source-line">Base: ${escapeHtml(question.source)}</p>
  </section>` : '';

  const actionLabel = checked
    ? (session.index === session.questions.length - 1 ? 'Ver resultado' : 'Próxima questão')
    : (session.mode === 'training' ? 'Conferir resposta' : (session.index === session.questions.length - 1 ? 'Finalizar simulado' : 'Avançar'));

  app.innerHTML = `<section class="quiz-layout" aria-labelledby="questionTitle">
    <div class="quiz-main">
      <div class="quiz-toolbar">
        <button class="text-button" id="exitButton" type="button">Sair</button>
        <div class="quiz-status"><span>Tempo</span><strong id="timer">${formatTime(session.seconds)}</strong></div>
        <button class="bookmark-button ${session.bookmarked.has(question.id) ? 'is-active' : ''}" id="bookmarkButton" type="button" aria-pressed="${session.bookmarked.has(question.id)}">
          <span aria-hidden="true">☆</span>${session.bookmarked.has(question.id) ? 'Salva' : 'Salvar'}
        </button>
      </div>

      <div class="progress-block">
        <div class="progress-copy"><span>Progresso</span><strong>${session.index + 1} de ${session.questions.length}</strong></div>
        <div class="progress-track" role="progressbar" aria-label="Progresso do simulado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><span style="width:${progress}%"></span></div>
      </div>

      <article class="question-card">
        <div class="question-context">
          <span>${escapeHtml(subjectNames[question.subject])}</span>
          <span class="context-separator" aria-hidden="true">•</span>
          <span>${escapeHtml(question.topic)}</span>
        </div>
        <p class="question-number">Questão ${String(session.index + 1).padStart(2, '0')}</p>
        <h1 id="questionTitle">${escapeHtml(question.prompt)}</h1>
        <div class="answers" role="group" aria-label="Alternativas">${options}</div>
      </article>

      ${feedback}

      <nav class="quiz-actions" aria-label="Navegação entre questões">
        ${session.mode === 'exam' && session.index > 0 ? '<button class="secondary-button" id="previousButton" type="button">Anterior</button>' : '<span></span>'}
        <button class="primary-button primary-button--compact" id="actionButton" type="button" ${answer === undefined ? 'disabled' : ''}>${actionLabel}</button>
      </nav>
    </div>
  </section>`;

  document.querySelectorAll('[data-option-index]').forEach((button) => {
    button.addEventListener('click', () => selectAnswer(Number(button.dataset.optionIndex)));
  });
  document.querySelector('#actionButton').addEventListener('click', handlePrimaryAction);
  document.querySelector('#exitButton').addEventListener('click', renderSetup);
  document.querySelector('#bookmarkButton').addEventListener('click', toggleBookmark);
  document.querySelector('#previousButton')?.addEventListener('click', () => {
    session.index -= 1;
    renderQuestion();
    scrollToTop();
  });
  document.querySelector('#questionTitle').focus?.();
}

function selectAnswer(index) {
  const question = currentQuestion();
  if (session.checked.has(question.id)) return;
  session.answers[question.id] = index;
  renderQuestion();
  announce(`Alternativa ${String.fromCharCode(65 + index)} selecionada.`);
}

function toggleBookmark() {
  const id = currentQuestion().id;
  if (session.bookmarked.has(id)) {
    session.bookmarked.delete(id);
    announce('Questão removida dos salvos.');
  } else {
    session.bookmarked.add(id);
    announce('Questão salva para revisão.');
  }
  renderQuestion();
}

function handlePrimaryAction() {
  const question = currentQuestion();
  if (session.answers[question.id] === undefined) return;

  if (session.mode === 'training' && !session.checked.has(question.id)) {
    session.checked.add(question.id);
    renderQuestion();
    return;
  }

  if (session.index < session.questions.length - 1) {
    session.index += 1;
    renderQuestion();
    scrollToTop();
    return;
  }

  if (session.mode === 'exam') {
    const unanswered = session.questions.findIndex((item) => session.answers[item.id] === undefined);
    if (unanswered >= 0) {
      session.index = unanswered;
      renderQuestion();
      scrollToTop();
      announce('Há questões sem resposta. Você foi levado à primeira delas.');
      return;
    }
  }
  renderResults();
}

function resultRows(questions) {
  return questions.map((question) => {
    const answerIndex = session.answers[question.id];
    const selected = question.options[answerIndex];
    const correct = question.options.find((option) => option.correct);
    return `<details class="review-item">
      <summary>
        <span>${escapeHtml(question.topic)}</span>
        <strong>${selected?.correct ? 'Acertou' : 'Errou'}</strong>
      </summary>
      <div class="review-content">
        <h3>${escapeHtml(question.prompt)}</h3>
        <p><b>Sua resposta:</b> ${escapeHtml(selected?.text || 'Sem resposta')}</p>
        ${selected?.correct ? '' : `<p class="correct-answer"><b>Resposta correta:</b> ${escapeHtml(correct.text)}</p>`}
        <p>${escapeHtml(question.explanation)}</p>
        <small>Base: ${escapeHtml(question.source)}</small>
      </div>
    </details>`;
  }).join('');
}

function renderResults() {
  clearInterval(timerId);
  session.completed = true;
  const answered = session.questions.map((question) => ({
    question,
    answer: question.options[session.answers[question.id]]
  }));
  const correctCount = answered.filter((item) => item.answer?.correct).length;
  const percent = Math.round((correctCount / session.questions.length) * 100);
  const wrongQuestions = answered.filter((item) => !item.answer?.correct).map((item) => item.question);
  const title = percent >= 85 ? 'Você chegou forte.' : percent >= 70 ? 'Boa base. Falta precisão.' : percent >= 50 ? 'Há terreno para recuperar.' : 'Revisão urgente antes da prova.';
  const legislationItems = answered.filter((item) => item.question.subject === 'legislacao');
  const ihcItems = answered.filter((item) => item.question.subject === 'ihc');
  const scoreFor = (items) => items.length ? Math.round((items.filter((item) => item.answer?.correct).length / items.length) * 100) : null;
  saveStats(percent);

  app.innerHTML = `<section class="results-page" aria-labelledby="resultTitle">
    <header class="results-hero">
      <div>
        <p class="eyebrow">RESULTADO</p>
        <h1 id="resultTitle">${title}</h1>
        <p>${correctCount} acertos em ${session.questions.length} questões • ${formatTime(session.seconds)}</p>
      </div>
      <div class="score-ring" style="--score:${percent * 3.6}deg" aria-label="${percent}% de acertos"><strong>${percent}<small>%</small></strong><span>de acertos</span></div>
    </header>

    <div class="result-metrics">
      ${legislationItems.length ? `<div><span>Ética e Legislação</span><strong>${scoreFor(legislationItems)}%</strong></div>` : ''}
      ${ihcItems.length ? `<div><span>IHC</span><strong>${scoreFor(ihcItems)}%</strong></div>` : ''}
      <div><span>Questões salvas</span><strong>${session.bookmarked.size}</strong></div>
      <div><span>Tempo médio</span><strong>${Math.round(session.seconds / session.questions.length)}s</strong></div>
    </div>

    <div class="result-actions">
      ${wrongQuestions.length ? '<button class="primary-button primary-button--compact" id="retryWrongButton" type="button">Refazer erros</button>' : ''}
      <button class="secondary-button" id="newQuizButton" type="button">Novo simulado</button>
    </div>

    <section class="review-section" aria-labelledby="reviewTitle">
      <div class="section-heading"><p class="eyebrow">REVISÃO</p><h2 id="reviewTitle">${wrongQuestions.length ? 'Onde a prova pode te pegar' : 'Gabarito comentado'}</h2></div>
      ${resultRows(wrongQuestions.length ? wrongQuestions : session.questions)}
    </section>

    <details class="sources-panel">
      <summary>Fontes usadas para conferir o conteúdo</summary>
      <div>${references.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(label)}<span aria-hidden="true">↗</span></a>`).join('')}</div>
    </details>
  </section>`;

  document.querySelector('#newQuizButton').addEventListener('click', renderSetup);
  document.querySelector('#retryWrongButton')?.addEventListener('click', () => {
    const originals = wrongQuestions.map((item) => bank.find((question) => question.id === item.id));
    startSession({ subject: session.subject, mode: 'training', count: String(originals.length) }, originals);
  });
  app.focus();
  scrollToTop();
}

document.addEventListener('keydown', (event) => {
  if (!session || session.completed || event.ctrlKey || event.metaKey || event.altKey) return;
  const key = event.key.toLowerCase();
  if (['a', 'b', 'c', 'd', 'e'].includes(key)) {
    const index = key.charCodeAt(0) - 97;
    if (currentQuestion().options[index]) selectAnswer(index);
  } else if (key === 'enter') {
    const actionButton = document.querySelector('#actionButton:not(:disabled)');
    actionButton?.click();
  } else if (key === 's') {
    event.preventDefault();
    toggleBookmark();
  }
});

themeButton.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

document.querySelector('.brand').addEventListener('click', (event) => {
  event.preventDefault();
  renderSetup();
});

applyTheme(localStorage.getItem('av1-quiz-theme') || 'light');
renderSetup();
