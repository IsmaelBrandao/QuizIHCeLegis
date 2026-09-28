window.QUESTION_BANK.push(
  {
    id: 'ihc-01', subject: 'ihc', topic: 'Fundamentos de IHC', difficulty: 'Difícil',
    prompt: 'Qual conjunto representa o núcleo de análise da Interação Humano-Computador apresentado nas aulas?',
    options: [
      { text: 'Usuário, sistema computacional, interação e contexto de uso.', correct: true },
      { text: 'Programador, linguagem, compilador e sistema operacional.', correct: false },
      { text: 'Interface gráfica, servidor, banco de dados e rede.', correct: false },
      { text: 'Requisito, código-fonte, teste unitário e manutenção.', correct: false }
    ],
    explanation: 'IHC considera as capacidades e necessidades das pessoas, o sistema, a comunicação entre ambos e as condições físicas, sociais e organizacionais da tarefa.',
    trap: 'Substituir os elementos da interação por componentes técnicos do software.',
    source: 'IHC — conceitos fundamentais'
  },
  {
    id: 'ihc-02', subject: 'ihc', topic: 'Fundamentos de IHC', difficulty: 'Extrema',
    prompt: 'Um sistema implementa todos os requisitos funcionais, mas gera erros frequentes, é difícil de aprender e impede uso por leitor de tela. Qual diagnóstico é mais completo?',
    options: [
      { text: 'A qualidade está garantida porque funcionalidade esgota os critérios relevantes de um sistema.', correct: false },
      { text: 'Há problemas de interação, usabilidade e acessibilidade apesar da correção funcional.', correct: true },
      { text: 'A dificuldade decorre somente da falta de treinamento e deve ser atribuída aos usuários.', correct: false },
      { text: 'O defeito é necessariamente de desempenho do banco de dados e independe da interface.', correct: false }
    ],
    explanation: 'Funcionamento técnico é necessário, mas não suficiente. A qualidade da interação também depende de eficácia, eficiência, satisfação, aprendizagem e acesso por pessoas com diferentes capacidades.',
    trap: 'Tomar requisitos funcionais como definição completa de qualidade.',
    source: 'IHC — objetivo da disciplina; padrão de questão de fixação'
  },
  {
    id: 'ihc-03', subject: 'ihc', topic: 'História da IHC', difficulty: 'Extrema',
    prompt: 'Nos B-17, alavancas visualmente e tatilmente idênticas provocavam confusão sob estresse. A intervenção de Alphonse Chapanis resolveu o problema principalmente por:',
    options: [
      { text: 'aumentar a força necessária para acionar ambos os controles e reduzir ações involuntárias.', correct: false },
      { text: 'diferenciar os controles pela forma, favorecendo reconhecimento tátil sem depender apenas da visão.', correct: true },
      { text: 'substituir os comandos físicos por códigos textuais memorizados pelos pilotos.', correct: false },
      { text: 'eliminar feedback mecânico para impedir que um erro se propagasse ao sistema.', correct: false }
    ],
    explanation: 'A codificação por forma criou mapeamentos perceptíveis mesmo em condições adversas. O caso mostra como um “erro humano” pode ser produzido por controles mal diferenciados.',
    trap: 'Culpar o operador e ignorar o desenho da interação.',
    source: 'IHC — B-17 e shape coding'
  },
  {
    id: 'ihc-04', subject: 'ihc', topic: 'História da IHC', difficulty: 'Extrema',
    prompt: 'A primeira onda da IHC, nos anos 1970 e 1980, caracterizou-se principalmente por:',
    options: [
      { text: 'estudar fatores humanos e modelar a cognição como processamento de informação para reduzir erros.', correct: true },
      { text: 'priorizar colaboração em rede, cultura organizacional e trabalho cooperativo distribuído.', correct: false },
      { text: 'concentrar-se em emoção, estética, ubiquidade e experiência ampliada em dispositivos móveis.', correct: false },
      { text: 'investigar agentes autônomos, interfaces cérebro-computador e personalização por IA.', correct: false }
    ],
    explanation: 'A primeira onda aproximou psicologia cognitiva e computação. Card, Moran e Newell formalizaram modelos da mente como processador de informação.',
    trap: 'Misturar características das três ondas históricas.',
    source: 'IHC — evolução histórica, primeira onda'
  },
  {
    id: 'ihc-05', subject: 'ihc', topic: 'História da IHC', difficulty: 'Extrema',
    prompt: 'O surgimento do CSCW na segunda onda da IHC respondeu à percepção de que:',
    options: [
      { text: 'a mente individual em laboratório explicava integralmente sistemas usados em ambientes profissionais.', correct: false },
      { text: 'o uso em rede exigia compreender colaboração, práticas sociais e ambiente real de trabalho.', correct: true },
      { text: 'a produtividade deixou de ter qualquer relevância quando computadores chegaram às empresas.', correct: false },
      { text: 'interfaces gráficas deveriam ser abandonadas em favor de linhas de comando compartilhadas.', correct: false }
    ],
    explanation: 'A segunda onda amplia a unidade de análise: além do indivíduo, entram trabalho cooperativo, comunicação mediada e contexto organizacional.',
    trap: 'Reduzir CSCW a uma tecnologia específica de rede.',
    source: 'IHC — segunda onda e CSCW'
  },
  {
    id: 'ihc-06', subject: 'ihc', topic: 'História da IHC', difficulty: 'Difícil',
    prompt: 'Na terceira onda da IHC, o deslocamento central foi:',
    options: [
      { text: 'da experiência ampla para a medição exclusiva da velocidade de digitação em escritórios.', correct: false },
      { text: 'da computação isolada para experiências ubíquas que incluem emoção, estética e contexto cotidiano.', correct: true },
      { text: 'das interfaces visuais para a eliminação completa de qualquer elemento gráfico.', correct: false },
      { text: 'do usuário comum para equipamentos utilizados somente por especialistas técnicos.', correct: false }
    ],
    explanation: 'Com a computação no bolso e no ambiente, IHC passou a tratar experiência do usuário de forma mais ampla, incluindo prazer, significado, inclusão e ubiquidade.',
    trap: 'Achar que a nova onda apaga os critérios de eficiência das anteriores.',
    source: 'IHC — terceira onda, UX e ubiquidade'
  },
  {
    id: 'ihc-07', subject: 'ihc', topic: 'Paradigmas de interface', difficulty: 'Extrema',
    prompt: 'Qual comparação entre GUI e CLI é tecnicamente mais equilibrada?',
    options: [
      { text: 'A GUI reduz memorização para iniciantes; a CLI pode acelerar tarefas repetidas de especialistas.', correct: true },
      { text: 'A GUI sempre consome menos recursos e supera a CLI em qualquer tarefa profissional.', correct: false },
      { text: 'A CLI favorece reconhecimento visual, enquanto a GUI exige lembrar sintaxe e parâmetros.', correct: false },
      { text: 'A GUI elimina carga cognitiva e torna treinamento desnecessário em sistemas complexos.', correct: false }
    ],
    explanation: 'Interfaces gráficas expõem opções e facilitam reconhecimento. Linhas de comando exigem aprendizagem, mas oferecem expressividade e eficiência a usuários experientes.',
    trap: 'Transformar uma vantagem contextual em superioridade universal.',
    source: 'IHC — GUI, vantagens e limitações'
  },
  {
    id: 'ihc-08', subject: 'ihc', topic: 'Paradigmas de interface', difficulty: 'Difícil',
    prompt: 'Por que interfaces touch reduziram parte da barreira de aprendizagem em relação a interfaces textuais?',
    options: [
      { text: 'Porque eliminaram toda necessidade de feedback e de convenções visuais.', correct: false },
      { text: 'Porque permitiram manipulação direta por gestos sobre os objetos representados.', correct: true },
      { text: 'Porque substituíram padrões conhecidos por comandos exclusivos de cada aplicativo.', correct: false },
      { text: 'Porque tornaram mouse e teclado obrigatórios para qualquer operação de precisão.', correct: false }
    ],
    explanation: 'Tocar, arrastar e ampliar aproximam ação física e objeto digital. Essa relação direta pode tornar o mapeamento entre intenção e comando mais fácil de aprender.',
    trap: 'Confundir interação natural com ausência de projeto ou de aprendizado.',
    source: 'IHC — evolução das interfaces; padrão de questão de fixação'
  },
  {
    id: 'ihc-09', subject: 'ihc', topic: 'Paradigmas de interface', difficulty: 'Extrema',
    prompt: 'Qual situação descreve uma interface inteligente, e não apenas uma interface natural?',
    options: [
      { text: 'Um mapa permite ampliar a região com gesto de pinça.', correct: false },
      { text: 'Um assistente reconhece comando de voz para iniciar uma tarefa.', correct: false },
      { text: 'Um aplicativo aprende rotinas e ajusta sugestões a hábitos e contexto.', correct: true },
      { text: 'Uma tela substitui menus textuais por botões sensíveis ao toque.', correct: false }
    ],
    explanation: 'Naturalidade descreve modalidades familiares, como toque, voz e gesto. Inteligência adaptativa envolve aprender padrões, antecipar necessidades e personalizar respostas.',
    trap: 'Tratar modalidade natural de entrada como sinônimo de adaptação inteligente.',
    source: 'IHC — interfaces naturais e inteligentes'
  },
  {
    id: 'ihc-10', subject: 'ihc', topic: 'Usabilidade', difficulty: 'Extrema',
    prompt: 'De acordo com a definição da ISO 9241-11, usabilidade deve ser analisada como:',
    options: [
      { text: 'propriedade visual fixa de qualquer interface que use padrões conhecidos, independentemente de usuários e tarefas.', correct: false },
      { text: 'resultado de uso por usuários e objetivos definidos, em contexto específico, com eficácia, eficiência e satisfação.', correct: true },
      { text: 'medida da velocidade com que especialistas concluem tarefas, sem considerar precisão, satisfação ou contexto.', correct: false },
      { text: 'sinônimo de satisfação subjetiva, mesmo quando metas não são atingidas ou recursos são desperdiçados.', correct: false }
    ],
    explanation: 'A ISO relaciona usabilidade a quem usa, ao objetivo e ao contexto. Eficácia, eficiência e satisfação formam o conjunto, não métricas intercambiáveis.',
    trap: 'Avaliar a interface fora de usuários, tarefas e ambiente reais.',
    source: 'ISO 9241-11:2018; aula de usabilidade'
  },
  {
    id: 'ihc-11', subject: 'ihc', topic: 'Usabilidade', difficulty: 'Extrema',
    prompt: 'Duas versões permitem que 95% dos usuários concluam a emissão de nota. A versão B reduz o tempo médio de 8 para 2 minutos após uma semana, mas gera mais erros no primeiro contato. A leitura correta é:',
    options: [
      { text: 'B possui maior eficácia final, pois rapidez e conclusão medem o mesmo atributo.', correct: false },
      { text: 'A e B têm eficácia final equivalente; A favorece o primeiro contato e B ganha eficiência após adaptação.', correct: true },
      { text: 'A possui maior eficiência final, porque erros iniciais anulam qualquer ganho de tempo posterior.', correct: false },
      { text: 'B é menos eficaz em toda a avaliação, pois aprendibilidade não pode mudar ao longo do uso.', correct: false }
    ],
    explanation: 'Taxa de conclusão mede eficácia; tempo e recursos indicam eficiência; desempenho inicial ajuda a avaliar facilidade de aprendizagem. As métricas devem ser separadas.',
    trap: 'Usar eficácia, eficiência e aprendibilidade como nomes diferentes para o mesmo resultado.',
    source: 'IHC — eficácia, eficiência e aprendizagem'
  },
  {
    id: 'ihc-12', subject: 'ihc', topic: 'Usabilidade', difficulty: 'Extrema',
    prompt: 'Um usuário conclui a tarefa no primeiro contato com ajuda. Após sete dias, retorna sem auxílio e comete menos erros. O segundo resultado fornece evidência mais direta de:',
    options: [
      { text: 'memorabilidade ou facilidade de retomar o uso aprendido.', correct: true },
      { text: 'eficácia normativa da especificação funcional.', correct: false },
      { text: 'estética e design minimalista da tela inicial.', correct: false },
      { text: 'validade externa do questionário de satisfação.', correct: false }
    ],
    explanation: 'O retorno após intervalo verifica quanto do modo de uso foi retido. Tempo, ajuda e erros na retomada são indicadores úteis de memorabilidade.',
    trap: 'Confundir aprender inicialmente com lembrar depois de um período.',
    source: 'IHC — facilidade de aprendizado e memorização'
  },
  {
    id: 'ihc-13', subject: 'ihc', topic: 'Métricas', difficulty: 'Difícil',
    prompt: 'Considere: I) dez itens alternados que geram escore de 0 a 100; II) chance de recomendar em escala de 0 a 10; III) satisfação logo após uma tarefa. A sequência é:',
    options: [
      { text: 'CSAT, SUS e NPS.', correct: false },
      { text: 'SUS, NPS e CSAT.', correct: true },
      { text: 'NPS, CSAT e SUS.', correct: false },
      { text: 'SUS, CSAT e NPS.', correct: false }
    ],
    explanation: 'SUS mede usabilidade percebida com dez itens; NPS pergunta propensão a recomendar; CSAT captura satisfação pontual com experiência ou tarefa.',
    trap: 'Escolher pelo tipo de escala sem observar o construto medido.',
    source: 'IHC — SUS, NPS e CSAT'
  },
  {
    id: 'ihc-14', subject: 'ihc', topic: 'Métricas', difficulty: 'Extrema',
    prompt: 'No SUS, um participante responde aos dez itens com 5, 2, 4, 1, 5, 2, 4, 2, 5 e 1. Aplicando a regra padrão, qual é o escore?',
    options: [
      { text: '35,0', correct: false },
      { text: '70,0', correct: false },
      { text: '87,5', correct: true },
      { text: '92,5', correct: false }
    ],
    explanation: 'Nos itens ímpares, subtrai-se 1; nos pares, calcula-se 5 menos a resposta. As contribuições somam 35, que multiplicado por 2,5 resulta em 87,5.',
    trap: 'Somar respostas brutas ou inverter a regra de itens positivos e negativos.',
    source: 'IHC — cálculo do System Usability Scale'
  },
  {
    id: 'ihc-15', subject: 'ihc', topic: 'Percepção e atenção', difficulty: 'Extrema',
    prompt: 'Uma tela apresenta alertas, gráficos e botões com o mesmo destaque. Usuários voltam à página anterior para descobrir o que fazer. A intervenção mais adequada é:',
    options: [
      { text: 'acrescentar um tutorial obrigatório para que memorizem a posição de cada item.', correct: false },
      { text: 'aumentar a quantidade de opções para oferecer maior liberdade de escolha.', correct: false },
      { text: 'estabelecer hierarquia visual, agrupar conteúdo e reduzir competição por atenção.', correct: true },
      { text: 'substituir todos os rótulos por ícones inéditos que economizem espaço.', correct: false }
    ],
    explanation: 'O problema combina percepção, atenção e carga cognitiva extrínseca. Hierarquia, agrupamento, contraste e remoção de ruído ajudam o usuário a priorizar.',
    trap: 'Compensar uma interface confusa com mais memória exigida do usuário.',
    source: 'IHC — fatores humanos e cognição'
  },
  {
    id: 'ihc-16', subject: 'ihc', topic: 'Percepção e atenção', difficulty: 'Extrema',
    prompt: 'Durante uma busca cronometrada por preço, o usuário não recorda a cor do banner nem o ícone do carrinho. Qual fenômeno explica melhor o resultado?',
    options: [
      { text: 'A atenção seletiva priorizou informações úteis à meta e filtrou elementos periféricos.', correct: true },
      { text: 'A memória de longo prazo apagou toda informação visual após sessenta segundos.', correct: false },
      { text: 'A eficácia da tarefa impede que qualquer estímulo secundário seja percebido biologicamente.', correct: false },
      { text: 'A carga cognitiva intrínseca converteu automaticamente cores em linguagem textual.', correct: false }
    ],
    explanation: 'A atenção funciona como filtro orientado por objetivos. Elementos presentes na tela podem não receber processamento suficiente para serem lembrados.',
    trap: 'Concluir que olhar para uma tela significa processar tudo nela.',
    source: 'IHC — atenção seletiva'
  },
  {
    id: 'ihc-17', subject: 'ihc', topic: 'Memória', difficulty: 'Extrema',
    prompt: 'Uma sequência de dez códigos precisa ser digitada. Qual mudança aplica melhor o princípio de divisão em blocos?',
    options: [
      { text: 'mostrar todos os códigos sem separação, mas em fonte menor para caber em uma linha.', correct: false },
      { text: 'organizar os códigos em grupos significativos e manter cada grupo visível durante a tarefa.', correct: true },
      { text: 'ocultar os códigos após três segundos para estimular armazenamento de longo prazo.', correct: false },
      { text: 'atribuir uma cor piscante diferente a cada caractere para aumentar saliência individual.', correct: false }
    ],
    explanation: 'Agrupamento reduz o número de unidades percebidas na memória de trabalho. Manter informação necessária visível também evita depender de recordação.',
    trap: 'Usar a “lei de Miller” para justificar mais memorização, em vez de reduzir a exigência.',
    source: 'IHC — memória de trabalho, Lei de Miller e chunking'
  },
  {
    id: 'ihc-18', subject: 'ihc', topic: 'Carga cognitiva', difficulty: 'Extrema',
    prompt: 'Num sistema tributário, compreender a regra fiscal é difícil por natureza; banners animados desviam atenção; comparar dois cenários ajuda a formar um esquema mental. As cargas são, respectivamente:',
    options: [
      { text: 'extrínseca, relevante e intrínseca.', correct: false },
      { text: 'intrínseca, extrínseca e relevante.', correct: true },
      { text: 'relevante, intrínseca e extrínseca.', correct: false },
      { text: 'intrínseca, relevante e extrínseca.', correct: false }
    ],
    explanation: 'A dificuldade inerente pertence à carga intrínseca; distrações desnecessárias aumentam carga extrínseca; esforço útil de compreensão constitui carga relevante.',
    trap: 'Tratar toda dificuldade mental como um único tipo de carga.',
    source: 'IHC — tipos de carga cognitiva'
  },
  {
    id: 'ihc-19', subject: 'ihc', topic: 'Cognição', difficulty: 'Extrema',
    prompt: 'No ciclo cognitivo aplicado ao botão “Excluir conta”, qual sequência preserva a relação entre percepção, interpretação, decisão, ação e feedback?',
    options: [
      { text: 'decide, percebe, recebe feedback, interpreta e age.', correct: false },
      { text: 'percebe o controle, entende o efeito, decide, aciona e avalia a resposta.', correct: true },
      { text: 'age, memoriza o controle, decide, percebe e elimina a necessidade de feedback.', correct: false },
      { text: 'recebe confirmação, interpreta a intenção, percebe o botão, decide e age.', correct: false }
    ],
    explanation: 'O usuário primeiro capta o sinal, atribui significado, forma intenção, executa a ação e avalia o retorno. Rupturas em qualquer etapa geram problemas de interação.',
    trap: 'Colocar o feedback antes da ação ou eliminar a interpretação.',
    source: 'IHC — ciclo cognitivo'
  },
  {
    id: 'ihc-20', subject: 'ihc', topic: 'Modelos mentais', difficulty: 'Extrema',
    prompt: 'Um ícone de lixeira executa “Salvar documento”. Mesmo com animação elegante, a decisão tende a falhar porque:',
    options: [
      { text: 'a interface viola a expectativa construída por convenções e experiências anteriores.', correct: true },
      { text: 'qualquer metáfora do mundo físico impede o uso de sistemas digitais complexos.', correct: false },
      { text: 'a função salvar exige sempre comando textual e não pode ser representada por ícone.', correct: false },
      { text: 'modelos mentais são regras fixas definidas pelo programador e desconhecidas pelo usuário.', correct: false }
    ],
    explanation: 'Usuários chegam com previsões baseadas em outras interfaces e no mundo. Contrariar uma convenção forte aumenta erro e esforço sem benefício funcional.',
    trap: 'Achar que originalidade visual justifica quebrar um significado consolidado.',
    source: 'IHC — modelos mentais e conhecimento prévio'
  },
  {
    id: 'ihc-21', subject: 'ihc', topic: 'Modelos mentais', difficulty: 'Extrema',
    prompt: 'Qual alternativa favorece reconhecimento em vez de recordação?',
    options: [
      { text: 'Exigir que o usuário digite o código numérico do cliente sem consulta.', correct: false },
      { text: 'Oferecer uma lista pesquisável com nomes e contexto dos clientes cadastrados.', correct: true },
      { text: 'Remover rótulos para que o usuário memorize a posição dos ícones.', correct: false },
      { text: 'Ocultar comandos frequentes em uma sequência fixa de atalhos não documentados.', correct: false }
    ],
    explanation: 'Ver opções e pistas permite reconhecer o alvo. Digitar um código ausente da tela exige recuperá-lo da memória, aumentando a carga.',
    trap: 'Confundir uma interface mais compacta com uma interface cognitivamente mais leve.',
    source: 'IHC — reconhecimento versus memorização'
  },
  {
    id: 'ihc-22', subject: 'ihc', topic: 'Ergonomia', difficulty: 'Extrema',
    prompt: 'Em uma tela móvel, botões pequenos e muito próximos causam toques involuntários. O problema pertence mais diretamente à ergonomia:',
    options: [
      { text: 'motora, pois envolve alvo, distância e precisão do movimento.', correct: true },
      { text: 'cognitiva, pois decorre apenas de memorização de comandos.', correct: false },
      { text: 'organizacional, pois exige redistribuição formal de cargos.', correct: false },
      { text: 'afetiva, pois mede exclusivamente o prazer estético da tela.', correct: false }
    ],
    explanation: 'Tamanho de alvo, espaçamento, precisão necessária e quantidade de movimentos são aspectos motores. Eles também afetam usabilidade, mas o mecanismo primário é físico.',
    trap: 'Classificar qualquer erro de interface como carga cognitiva.',
    source: 'IHC — ergonomia motora'
  },
  {
    id: 'ihc-23', subject: 'ihc', topic: 'Acessibilidade', difficulty: 'Extrema',
    prompt: 'Qual decisão traduz melhor a ideia de projetar para usuários reais, e não para um “usuário ideal”?',
    options: [
      { text: 'Presumir visão, atenção e precisão constantes para simplificar requisitos de projeto.', correct: false },
      { text: 'Considerar cansaço, baixa visão, limitações motoras, distração e diferentes dispositivos no contexto de uso.', correct: true },
      { text: 'Criar uma interface principal inacessível e oferecer atendimento humano como substituto permanente.', correct: false },
      { text: 'Adotar um único tamanho de controle porque consistência elimina diferenças entre pessoas.', correct: false }
    ],
    explanation: 'Capacidades variam entre pessoas e situações. Acessibilidade e ergonomia incorporam essa variabilidade ao projeto desde a definição de contexto e requisitos.',
    trap: 'Tratar limitações como exceção rara a ser resolvida depois.',
    source: 'IHC — limitações humanas e acessibilidade'
  },
  {
    id: 'ihc-24', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Extrema',
    prompt: 'O botão “Salvar” aparece azul no cadastro e vermelho no relatório, mudando também de posição sem justificativa. Qual regra de Shneiderman é violada de forma mais direta?',
    options: [
      { text: 'Oferecer atalhos a usuários frequentes.', correct: false },
      { text: 'Buscar consistência entre elementos equivalentes.', correct: true },
      { text: 'Permitir reversão fácil das ações.', correct: false },
      { text: 'Reduzir a carga de memória de curto prazo.', correct: false }
    ],
    explanation: 'Elementos com a mesma função devem conservar comportamento, linguagem e posição quando o contexto não exige mudança. Inconsistência força reaprendizado e eleva erro.',
    trap: 'Escolher uma regra relacionada, mas menos específica que consistência.',
    source: 'IHC — oito regras de Shneiderman'
  },
  {
    id: 'ihc-25', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Extrema',
    prompt: 'Uma aplicação adiciona Ctrl+Enter para enviar, mantendo o botão visível e o fluxo comum. Qual princípio está melhor atendido?',
    options: [
      { text: 'Atalhos para usuários experientes sem retirar o caminho reconhecível dos iniciantes.', correct: true },
      { text: 'Diálogo com encerramento, pois qualquer atalho produz confirmação automática.', correct: false },
      { text: 'Prevenção de erros, pois teclas de atalho impedem envios acidentais por definição.', correct: false },
      { text: 'Consistência, pois toda aplicação deve usar obrigatoriamente Ctrl+Enter.', correct: false }
    ],
    explanation: 'Shneiderman recomenda aceleradores para quem usa o sistema com frequência, mas o caminho tradicional continua acessível a quem ainda está aprendendo.',
    trap: 'Achar que eficiência para especialista autoriza esconder o fluxo básico.',
    source: 'IHC — Shneiderman, atalhos'
  },
  {
    id: 'ihc-26', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Extrema',
    prompt: 'Após clicar em “Enviar relatório”, o sistema mostra progresso e, ao fim, exibe recibo com número do protocolo. Os dois retornos atendem principalmente:',
    options: [
      { text: 'feedback contínuo e diálogo com encerramento reconhecível.', correct: true },
      { text: 'reversão de ação e redução de memória de longo prazo.', correct: false },
      { text: 'atalhos para especialistas e correspondência com o mundo real.', correct: false },
      { text: 'prevenção de erro e estética minimalista, apenas.', correct: false }
    ],
    explanation: 'O progresso informa o estado durante a ação. O protocolo encerra a sequência e permite ao usuário reconhecer que a tarefa foi concluída.',
    trap: 'Tratar feedback momentâneo e fechamento da tarefa como exatamente a mesma função.',
    source: 'IHC — Shneiderman, feedback e fechamento'
  },
  {
    id: 'ihc-27', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Extrema',
    prompt: 'Uma exclusão usa confirmação antes da ação e oferece “Desfazer” por dez segundos depois dela. Os recursos correspondem, respectivamente, a:',
    options: [
      { text: 'facilidade de reversão e prevenção de erros.', correct: false },
      { text: 'prevenção de erros e facilidade de reversão.', correct: true },
      { text: 'controle do usuário e redução da carga de memória.', correct: false },
      { text: 'consistência e diálogo com encerramento.', correct: false }
    ],
    explanation: 'A confirmação tenta impedir o erro antes que ocorra. Desfazer reduz o custo caso a ação errada já tenha acontecido.',
    trap: 'Inverter mecanismos anteriores e posteriores ao erro.',
    source: 'IHC — Shneiderman, prevenção e reversão'
  },
  {
    id: 'ihc-28', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Extrema',
    prompt: 'Um assistente inicia sozinho alterações irreversíveis porque “previu” a intenção do usuário. Qual regra é ameaçada mesmo se a previsão acertar na maioria das vezes?',
    options: [
      { text: 'Manter o usuário no controle da interação.', correct: true },
      { text: 'Usar consistência terminológica em todos os menus.', correct: false },
      { text: 'Reduzir a memória de trabalho com agrupamento.', correct: false },
      { text: 'Oferecer atalhos a usuários frequentes.', correct: false }
    ],
    explanation: 'Automação útil deve preservar consentimento, previsibilidade e possibilidade de interromper ações críticas. O sistema não deve conduzir arbitrariamente a interação.',
    trap: 'Confundir acurácia da automação com autorização do usuário.',
    source: 'IHC — Shneiderman, controle pelo usuário'
  },
  {
    id: 'ihc-29', subject: 'ihc', topic: 'Shneiderman', difficulty: 'Difícil',
    prompt: 'Exibir o nome do cliente ao lado do identificador durante todas as etapas de uma operação aplica principalmente:',
    options: [
      { text: 'redução da carga de memória de curto prazo.', correct: true },
      { text: 'aumento deliberado da carga cognitiva relevante.', correct: false },
      { text: 'controle e liberdade por reversão automática.', correct: false },
      { text: 'fechamento do diálogo por confirmação final.', correct: false }
    ],
    explanation: 'Informação necessária permanece no ambiente, então o usuário não precisa decorar e recuperar o identificador a cada etapa.',
    trap: 'Ignorar que tornar informação visível é uma estratégia de memória externa.',
    source: 'IHC — Shneiderman, redução da carga de memória'
  },
  {
    id: 'ihc-30', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Após o usuário salvar, a interface permanece inalterada por vários segundos. O salvamento ocorreu, mas ninguém sabe disso. A violação primária é:',
    options: [
      { text: 'visibilidade do status do sistema.', correct: true },
      { text: 'correspondência com o mundo real.', correct: false },
      { text: 'ajuda e documentação.', correct: false },
      { text: 'flexibilidade e eficiência de uso.', correct: false }
    ],
    explanation: 'O sistema deve comunicar em tempo adequado o que está acontecendo e o resultado da ação. Sem retorno, usuários repetem comandos ou abandonam a tarefa.',
    trap: 'Mandar o usuário consultar ajuda para compensar ausência de feedback.',
    source: 'Nielsen — visibilidade do status do sistema'
  },
  {
    id: 'ihc-31', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Um sistema hospitalar usa “materializar instância do prontuário” onde profissionais esperam “abrir prontuário”. Qual heurística é mais diretamente violada?',
    options: [
      { text: 'Correspondência entre o sistema e o mundo real.', correct: true },
      { text: 'Estética e design minimalista.', correct: false },
      { text: 'Controle e liberdade do usuário.', correct: false },
      { text: 'Ajuda para reconhecer e recuperar erros.', correct: false }
    ],
    explanation: 'A interface deve falar a linguagem do público e seguir conceitos e ordem familiares ao domínio, em vez de expor jargão interno da implementação.',
    trap: 'Reduzir o problema a excesso de palavras, quando o núcleo é incompatibilidade conceitual.',
    source: 'Nielsen — correspondência com o mundo real'
  },
  {
    id: 'ihc-32', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Num mesmo produto, “X” fecha uma janela em uma tela e exclui dados em outra. A falha principal é:',
    options: [
      { text: 'consistência e padrões, pois o mesmo sinal assume efeitos incompatíveis.', correct: true },
      { text: 'reconhecimento, pois todo símbolo exige um tutorial antes do uso.', correct: false },
      { text: 'flexibilidade, pois usuários experientes preferem ícones ambíguos.', correct: false },
      { text: 'documentação, pois uma página de ajuda torna a ambiguidade desejável.', correct: false }
    ],
    explanation: 'Usuários não deveriam descobrir se palavras, situações ou controles diferentes significam a mesma coisa, nem se o mesmo controle muda de significado sem indicação.',
    trap: 'Tentar documentar uma inconsistência que deveria ser removida.',
    source: 'Nielsen — consistência e padrões'
  },
  {
    id: 'ihc-33', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Qual par relaciona corretamente prevenção de erros e recuperação de erros?',
    options: [
      { text: 'Bloquear datas impossíveis; se houver falha, indicar causa e correção em linguagem clara.', correct: true },
      { text: 'Exibir “Erro 0x004A”; ocultar campos inválidos para reduzir ruído visual.', correct: false },
      { text: 'Oferecer manual extenso antes da tarefa; remover mensagens depois da falha.', correct: false },
      { text: 'Confirmar toda ação trivial; usar a mesma mensagem genérica para qualquer problema.', correct: false }
    ],
    explanation: 'Prevenção reduz a chance de falhar. Quando o erro ocorre, a interface precisa ajudar a reconhecer, diagnosticar e recuperar com instruções específicas.',
    trap: 'Confundir impedir erros com apenas anunciar que eles aconteceram.',
    source: 'Nielsen — prevenção e recuperação de erros'
  },
  {
    id: 'ihc-34', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Uma ferramenta oferece fluxo guiado para iniciantes e comandos configuráveis para especialistas. Ela atende especialmente à heurística de:',
    options: [
      { text: 'flexibilidade e eficiência de uso.', correct: true },
      { text: 'visibilidade do status do sistema.', correct: false },
      { text: 'correspondência com o mundo real.', correct: false },
      { text: 'ajuda no reconhecimento de erros.', correct: false }
    ],
    explanation: 'A interface acomoda diferentes níveis de experiência e permite acelerar tarefas frequentes sem tornar o caminho básico inacessível.',
    trap: 'Confundir adaptação a níveis de experiência com simples presença de ajuda.',
    source: 'Nielsen — flexibilidade e eficiência de uso'
  },
  {
    id: 'ihc-35', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Um painel exibe vinte indicadores irrelevantes para a decisão atual. Mesmo corretos, eles prejudicam a tarefa porque:',
    options: [
      { text: 'informação extra compete com conteúdo relevante e reduz sua visibilidade relativa.', correct: true },
      { text: 'informação verdadeira viola necessariamente a correspondência com o mundo real.', correct: false },
      { text: 'painéis devem conter no máximo sete objetos, independentemente da tarefa e do agrupamento.', correct: false },
      { text: 'qualquer indicador numérico impede usuários de reconhecer o status do sistema.', correct: false }
    ],
    explanation: 'Estética e design minimalista não significam decoração vazia. O princípio pede que cada informação presente sustente a tarefa e não dispute atenção sem necessidade.',
    trap: 'Converter minimalismo em limite numérico rígido ou preferência meramente estética.',
    source: 'Nielsen — estética e design minimalista'
  },
  {
    id: 'ihc-36', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'Qual mensagem atende melhor à heurística de reconhecimento, diagnóstico e recuperação de erros?',
    options: [
      { text: '“Operação inválida: código 0x004A. Procure o administrador se o problema persistir.”', correct: false },
      { text: '“Não foi possível concluir a operação. Tente novamente ou volte para a etapa anterior.”', correct: false },
      { text: '“O CPF tem 10 dígitos. Revise o número informado e inclua o dígito que falta para prosseguir.”', correct: true },
      { text: '“Falha inesperada durante o envio. Consulte o administrador e informe o horário da operação.”', correct: false }
    ],
    explanation: 'Uma boa mensagem usa linguagem clara, localiza o problema e oferece um caminho concreto de correção. Códigos internos não ajudam quem precisa recuperar a tarefa.',
    trap: 'Aceitar qualquer aviso visível como suporte suficiente à recuperação.',
    source: 'Nielsen — reconhecer, diagnosticar e recuperar erros'
  },
  {
    id: 'ihc-37', subject: 'ihc', topic: 'Nielsen', difficulty: 'Extrema',
    prompt: 'A existência de documentação em um produto bem projetado indica que:',
    options: [
      { text: 'a interface falhou, pois sistemas usáveis jamais precisam de orientação adicional.', correct: false },
      { text: 'tarefas específicas podem exigir ajuda pesquisável, focada no objetivo e com passos concretos.', correct: true },
      { text: 'a equipe pode substituir feedback e prevenção de erros por um manual completo.', correct: false },
      { text: 'todo conteúdo de ajuda deve aparecer antes da primeira ação, mesmo sem solicitação.', correct: false }
    ],
    explanation: 'Ajuda continua necessária em tarefas complexas ou pouco frequentes. Ela deve ser pesquisável, concisa e orientada à execução, sem servir de desculpa para falhas evitáveis.',
    trap: 'Tratar ajuda como prova de fracasso ou como substituta do bom design.',
    source: 'Nielsen — ajuda e documentação'
  },
  {
    id: 'ihc-38', subject: 'ihc', topic: 'Avaliação heurística', difficulty: 'Extrema',
    prompt: 'Qual procedimento descreve melhor uma avaliação heurística bem conduzida?',
    options: [
      { text: 'Usuários finais exploram livremente o sistema e suas taxas de sucesso substituem qualquer princípio de análise.', correct: false },
      { text: 'Avaliadores inspecionam tarefas pelas heurísticas, registram problemas e consolidam evidências, gravidade e melhorias.', correct: true },
      { text: 'A equipe reúne todos os avaliadores desde o início para negociar uma única impressão antes da inspeção.', correct: false },
      { text: 'O sistema precisa estar terminado, pois protótipos não permitem inspeção de usabilidade.', correct: false }
    ],
    explanation: 'A inspeção compara a interface com princípios reconhecidos. Avaliações independentes reduzem influência mútua; a consolidação posterior organiza achados, evidências e prioridades.',
    trap: 'Confundir inspeção por especialistas com teste empírico feito por participantes.',
    source: 'Aula de avaliação heurística; Nielsen Norman Group'
  },
  {
    id: 'ihc-39', subject: 'ihc', topic: 'Avaliação heurística', difficulty: 'Extrema',
    prompt: 'Por que Nielsen recomenda vários avaliadores independentes antes da consolidação?',
    options: [
      { text: 'Porque cada avaliador encontra apenas parte dos problemas, e a independência reduz influência entre julgamentos.', correct: true },
      { text: 'Porque a média das notas substitui a necessidade de descrever cada problema separadamente.', correct: false },
      { text: 'Porque um único avaliador sempre encontra todos os problemas, mas não consegue atribuir gravidade.', correct: false },
      { text: 'Porque os avaliadores precisam observar usuários reais simultaneamente em toda inspeção heurística.', correct: false }
    ],
    explanation: 'Pessoas diferentes detectam problemas diferentes. A independência preserva diversidade dos achados; depois, o grupo consolida e prioriza a lista.',
    trap: 'Achar que consenso antecipado melhora uma atividade que depende de perspectivas independentes.',
    source: 'Nielsen — teoria da avaliação heurística'
  },
  {
    id: 'ihc-40', subject: 'ihc', topic: 'Avaliação heurística', difficulty: 'Extrema',
    prompt: 'Na escala de gravidade 0–4, um problema raro, de baixo impacto e superável definitivamente após o primeiro contato tende a receber nota menor porque gravidade considera:',
    options: [
      { text: 'frequência, impacto e persistência do problema.', correct: true },
      { text: 'apenas o custo estimado para programar a correção.', correct: false },
      { text: 'somente a preferência visual do avaliador principal.', correct: false },
      { text: 'número de heurísticas citadas no mesmo registro.', correct: false }
    ],
    explanation: 'A classificação combina ocorrência, dificuldade para superar e repetição do incômodo. A nota 4 representa catástrofe de usabilidade que deve ser corrigida antes do lançamento.',
    trap: 'Tratar gravidade como opinião estética ou custo de desenvolvimento.',
    source: 'Nielsen — escala de gravidade em avaliação heurística'
  }
);
