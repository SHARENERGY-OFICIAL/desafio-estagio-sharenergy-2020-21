# Desafio para processo seletivo de estágio SHARENERGY 2020/21
   Esse repositório se destina aos interessados em participar do processo seletivo para estagiários da SHARENERGY 2020/21. As vagas são voltadas para desenvolvimento de aplicação  Web.

## Sobre a SHARENERGY
Acreditamos que as energias renováveis terão um lugar dominante em nossa economia pelo resto de nossas vidas. Trabalhamos no sentido de ampliar o impacto positivo que as energias renováveis podem ter no meio ambiente e nas nossas vidas. O sucesso da SHARENERGY é resultado de nossa equipe apaixonada, juntamente com nosso compromisso de oferecer a melhor solução.

## Sobre a vaga
Já pensou em potencializar o setor que mais cresce na galáxia e trabalhar com uma solução que utiliza tecnologia web de ponta, altamente distribuída com foco em performance e disponibilidade? 👀

Os desenvolvedores da Sharenergy são responsáveis por criar e manter aplicações para clientes internos e externos, prover soluções escaláveis, resilientes e altamente disponíveis que sustentem picos de acesso além de atuar como referência técnica e tutores de outros desenvolvedores. Procuramos por pessoas dinâmicas e que queiram estar aprendendo sempre. Nossa equipe é jovem, motivada e estamos sempre em busca de soluções criativas para alcançar os resultados que nossos clientes esperam. Se você tem esse perfil, é autoconfiante e tem facilidade para lidar com desafios diários, essa vaga é para você!

## O desafio
   Criar uma aplicação para Web que atenda às demandas listadas abaixo. O aplicativo deve apresentar uma interface amigável, bonita e limpa, na qual o usuário possa navegar através de botões.
### Contexto
   No ramo da produção de energia fotovotaica, há a modalidade de produção compartilhada. Nessa modalidade, diferentes pessoas investem na construção de uma mesma usina fotovoltaica e dividem o retorno finaceiro referente à energia gerada pela usina. A aplicação desenvolvida no desafio visa, de maneira bastante simplificada, gerenciar as informações de produção de usinas fotovoltaicas e de nossos clientes (investidores das usinas).
### Demanda 1: visualização de dados de uma usina fotovoltaica
   A aplicação deve ler os dados contidos no objeto [dadosUsina.json](dadosUsina.json), que contém informações de um dia de produção de uma usina fotovotaica. Nesse objeto, "tempo_h" denota o horário em horas decimais. Por exemplo, o horário de 5h e 45min corresponde a "tempo_h": 5.75. Além disso,"tensao_V" é a tensão elétrica em volts, "corrente_A" é a corrente elétrica em amperes, "potencia_kW" é a potência gerada em kilowatts e "temperatura_C" é a temperatura em graus Celsius.
   
   Após a leitura dos dados, a aplicação deve os plotar em um gráfico de uma variável de interesse (tensão, corrente, potência ou temperatura) em função do tempo. A aplicação deve plotar apenas uma variável por vez no gráfico e possuir uma opção que permita o usuário escolher qual variável será mostrada. Para tanto, pode-se utilizar, por exemplo, uma lista suspensa ou um input radio.
### Demanda 2: gerenciamento de clientes
   A aplicação deve ser capaz de gerenciar os dados de nossos clientes, isto é, de investidores de usinas fotovoltaicas. Para esse desafio, são fornecidos dados fictícios de clientes no objeto [dadosClientes.json](dadosClientes.json), que devem ser usados para inicializar o banco de dados de clientes. Nesse objeto, "numeroCliente" é o número de referência do cliente em nosso sistema, "nomeCliente" é o nome do cliente, "usinas" lista as usinas que o cliente tem participação, "numeroUsina" é o número de referência da usina em nosso sistema e "percentualUsina" é o percentual de participação do cliente na usina.
   
   A aplicação deve possuir os recursos básicos de CRUD Read e Update de modo que seja possível editar os dados de um cliente específico e exibir as informações de todos os clientes.
### Demanda 3: retorno financeiro dos clientes
   A aplicação deve estimar o retorno financeiro obtido por cada cliente oriundo da energia produzida pela usina fotovoltaica no dia. Primeiramete, a aplicação deve calcular a energia elétrica total produzida no dia usando as informações de potência em função do tempo disponíveis no objeto [dadosUsina.json](dadosUsina.json). Lembre-se que, fisicamente, a potência P (kW) é a derivada no tempo t (h) da energia E (kWh), P = dE/dt. Portanto, a energia gerada pode ser calculada a partir da potência por: 
      
   ![Equação para ΔE](equation.jpg)
   <!--
      Imagem gerada pelo site: http://www.sciweavers.org/free-online-latex-equation-editor
      Foi usado o comando LaTeX: " \Delta E = \int_{t_0}^{t_f}P(t)dt  \approx \Delta t  \sum_{i = 1}^{N-1} P(t_i) "
      Font: Arev (padrão), Font size: 12 (padrão)
   -->
   Em que ΔE é a energia gerada (kWh), t<sub>0</sub> é o instante de tempo inicial (h), t<sub>f</sub> é o instante de tempo final (h), Δt é o intervalo de tempo em que os dados foram amostrados (h), i indica a posição do dado no registro (i = 1, ..., N) e N é o número total de dados amostrados.

   Por exemplo, para os dados hipotéticos apresentados na tabela abaixo:
i | Tempo (h) | Potência (kW)
:---: | :---: | :---:
1 | 6,0 | 5,0
2 | 11,0 | 20,0
3 | 16,0 | 15,0
4 | 21,0 | 0,0

   O intervalo de tempo de amostragem é: Δt = 11 h - 6h = 16 h - 11 h = 21 h - 16 h = 5 h. O número total de dados é: N = 4. E a energia gerada no dia é: ΔE = 5 h &times; (5 kW + 20 kW + 15 kW) = 5 h &times; 40 kW = 200 kWh.
   
   De posse dos valores da energia gerada (ΔE) e do preço da energia elétrica (considere R$0,95 / kWh), a receita total pode ser facilmente determinada. Por fim, o retorno de cada cliente pode ser calculado com base no percentual de participação de cada cliente em relação a usina. No caso dos dados de clientes fornecidos, essa informação está na chave "percentualUsina" do objeto [dadosClientes.json](dadosClientes.json).

   No exemplo anterior, como a usina produziu 200 kWh no dia, a receita total no dia é: 200 kWh &times; R$0,95 / kWh = R$190,00. Além disso, se dois clientes tiverem cada 50% de participação da usina, cada cliente terá um retorno de: (50 / 100) &times; R$190,00 = R$95,00.
### Aprimoramentos adicionais da aplicação (opcional)
   A aplicação criada para o desafio pode ser aprimorada com recursos pensados por você. A seguir, foram listadas algumas sugestões do que poderia ser feito:
* Documentação
* Adequar seu código a algum padrão de formatação de código por meio do uso de um linter 
* Responsividade
* Contas de usuário
   * Proteção contras modiificações de pessoas não autorizadas
* Exibir estatística descritiva dos dados dos gráficos (por exemplo, média, desvio-padrão, mínimo, máximo, etc.)
* Em relação ao gerenciamento de clientes: 
   * Permitir que o usuário adicione ou delete clientes
   * Adicionar mais campos aos formulários de criação e edição de clientes
   * Fornecer opções de filtragem ou busca para listar apenas parte dos clientes
* Implementação de fórmula mais precisa de integração numérica para o cálculo de ΔE
* Realizar validação dos dados 
### Quais ferramentas posso usar para resolver o desafio?
   Não será especificado um conjunto de ferramentas específico que pode ser usado. Não obstante, será considerado como um diferencial caso você adote as mesmas ferramentas que trabalhamos. 
### Mas, afinal, quais ferramentas a Sharenergy utiliza?
   Atualmente, nossas aplicações são desenvolvidas usando a plataforma [Meteor JS](https://www.meteor.com/). Mais especificadamente, nossas aplicações se caracterizam por:
* Gerenciador de pacotes: [npm](https://www.npmjs.com/get-npm)
* Para back-end: [Node.js](https://nodejs.org/en/)
* Banco de dados: [MongoDB](https://www.mongodb.com/) do lado do servidor e [Minimongo](https://guide.meteor.com/collections.html) do lado do cliente (cache)
* Validação de dados: [Schema-utils](https://www.npmjs.com/package/schema-utils) 
* Framework para front-end: [React JS](https://pt-br.reactjs.org/)
* UI: [CSS 3](https://www.w3.org/Style/CSS/), [Material-UI](https://material-ui.com/pt/) e [Reflexbox](https://rebassjs.org/reflexbox/)
* Gráficos: [Victory](https://formidable.com/open-source/victory/)
* Roteamento: [react-router-dom](https://www.npmjs.com/package/react-router-dom)
## O que devo entregar?
   Esperamos de você duas entregas: o código da aplicação no GitHub e um vídeo explicativo no YouTube.
### Instruções
   Para iniciar o desafio, faça um fork desse repositório de modo que você possa trabalhar em um clone dele em sua máquina. Em seguida, crie uma branch, cujo nome é o seu nome completo. Resolva o desafio realizando versionamento local e remoto do seu código por meio do Git (commit) e do GitHub (push). Lembre-se de usar outras branches durante o desenvolvimento do código e, após concluida cada etapa, faça um merge para a branch cujo nome é o seu nome completo. Ao finalizar o desafio, realize um pull request de sua branch para esse repositório.

   Inclua no arquivo README.md do seu projeto uma listagem de todas as dependências usadas e instrução de instalação e execução da aplicação criada.

   Além disso, faça um vídeo explicativo sobre o que você fez no desafio com duração aproximada de 5 minutos. A facecam é opcional, mas é bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md do seu projeto.
### Prazo limite de entrega
   O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.
