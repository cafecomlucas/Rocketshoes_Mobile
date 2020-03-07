## Inicialização do projeto

Projeto criado com o CLI do React Native:

```bash
react-native init Rocketshoes_Mobile
```

(ou `npx react-native init ...` caso não tenha o RN CLI instalado globalmente)

Final de linha padrão configurado:

```bash
git config core.autocrlf false
```

Arquivos adicionados e enviados ao GitHub:

```bash
git init
git add .
git remote add origin https://github.com/cafecomlucas/Rocketshoes_Mobile.git
git commit -m "Inicializa projeto através do React Native CLI"
git push -u origin master
```

---

Documentação adicionada e enviada ao GitHub (README.md / \_steps.md).

---

## Instalando aplicativo no dispositivo Android

Após ativar a Depuração USB (ADB) e habilitar a conexão MIDI no aparelho Android conferi que o dispositivo foi detectado através do comando:

```bash
adb devices
```

A geração do primeiro bundle foi feita através do comando:

```bash
react-native run-android
```

Execuções posteriores podem ser feitas através do comando:

```bash
react-native start
```

(enquanto arquivos nativos não são alterados)

Mais informações sobre a configuração do ambiente React Native:
https://docs.rocketseat.dev/ambiente-react-native/introducao

(é interessante parar a execução atual antes de instalar qualquer pacote novo para evitar erros)

---

## Padrão de código (Style guide) | EditorConfig • ESLint • Prettier

#### ESLint

ESLint já instalado. Arquivo `.eslintrc.js` removido e ESLint inicializado para configuração manual:

```bash
yarn eslint --init
```

(Perguntas respondidas e pacotes instalados via NPM)

Em caso de erro: `Maximum call stack size exceeded`. Executar o comando:

```bash
npm cache clean --force
yarn add eslint -D
```

O arquivo criado pelo NPM `package-lock.json` foi removido. Também removi o arquivo de cache do YARN `yarn.lock`. As dependências foram re-mapeadas pro yarn:

```bash
yarn
```

#### Prettier

Dependências para integrar o ESLint ao Prettier instaladas:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Arquivo de configuração do Prettier (`.prettierrc.js`) modificado para aceitar aspas simples e para interir uma vírgula ao final de Arrays/Objetos.

#### Babel

Dependência para integrar o ESLint ao Babel instalada:

```bash
yarn add babel-eslint -D
```

### Atualizando arquivo de configuração do ESLint (.eslintrc.js)

Arquivo de configuração do ESLint modificado.

Regras adicionadas em `rules` para aceitar arquivos `js`, para aceitar o `export` sem o `default` e para aceitar a definição de `state` fora do construtor.

Propriedade `prettier` adicionada em `plugins`. Strings `prettier` e `prettier/react` adicionados na propriedade `extends`. Regra `prettier` adicionada em `rules`.

Propriedade `parser` adicionada com a string `babel-eslint`.

---

(Para corrigir os erros indicados automaticamente é necessário ter as propriedades `editor.formatOnSave`, `editor.codeActionsOnSave` e `eslint.validate` configuradas no `settings.json` do VSCode)

---

## Limpando códigos desnecessários

Arquivo `App.js` removido. Pasta `src` criada com o arquivo `index.js`. Arquivo raiz `index.js` modificado para importar o componente `App` do arquivo `src/index.js`.

---

## Configurando Debug externo | Ferramenta Reactotron

Dependência Reactotron pro React Native instalada:

```bash
yarn add reactotron-react-native
```

Arquivo `src/config/ReactotronConfig.js` criado com a inicialização do Reactotron em ambiente de desenvolvimento. No arquivo `src/index.js` importamos a configuração e imprimimos um log com a mensagem "iniciou!".

Para funcionar no USB/Wifi, pode ser necessário indicar a porta pro SDK do Android através do comando:

```bash
adb reverse tcp:9090 tcp:9090
```

No USB/Wifi também pode ser necessário indicar o `host` pro método `configure` do Reactotron.

Arquivo `.eslintrc.js` alterado para não indicar erros da variável global `__DEV__` ou nas chamadas do `console.tron`.

---

## Configurando Roteamento | React Navigation

É recomendável olhar a [documentação](https://reactnavigation.org/docs/getting-started/) do React Natigation pois essa dependência passa por atualizações constantes.

### Instalando o módulo de navegação

React Navigation instalado:

```bash
yarn add @react-navigation/native
```

Dependências adicionais instaladas:

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

(Para Android) Linhas adicionadas no arquivo `android/app/build.gradle`, necessário pra dependência `react-native-screens`:

```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

(Para Android) necessário importar o módulo abaixo no arquivo raiz pra dependência `react-native-gesture-handler`:

```
import 'react-native-gesture-handler';
```

### Instalando o tipo de navegação

O tipo de navegação escolhida e instalada pra essa aplicação foi a navegação em pilha (Stack):

```bash
yarn add @react-navigation/stack
```

### Criando / Modificando arquivos

Arquivos `Cart/index.js` e `Home/index.js` criados na pasta `pages` com a estrutura básica.

Arquivo `src/routes.js` criado com a configuração do Stack Navigation e a importação/configuração das páginas criadas (pasta `pages`). A opção `screenOptions.headerShown` foi setada em `false` para ocultar o cabeçalho padrão.

Arquivo `src/index.js` modificado para importar o `NavigationContainer` do React Native Navigation. Este módulo serve como container para todo o conteúdo. Foi importado no arquivo `src/index.js` ao invés do `src/routes.js` pois existe o cabeçalho customizado que será padrão em todas as páginas.

---

## App | Estilizando barra de status

Arquivo `src/index.js` modificado para definir a cor padrão da barra de status do topo através do componente `StatusBar`.

---

## Instalação do Styled Components | Estilização do background geral

Para trabalhar com a estilização utilizando a sintaxe do CSS, instalamos o Styled-components:

```bash
yarn add styled-components
```

Arquivo `src/components/App/index.js` criado com a estilização do background geral.

Arquivo `src/index.js` modificado. Estilização importada e estrutura atualizada.

---

## Instalação do React Native Vector Icons | Material Design

Seguindo a [documentação](https://github.com/oblador/react-native-vector-icons), o módulo React Native Vector Icons foi adicionado ao projeto. Adicionamos apenas os ícones do Material Design.

Módulo adicionado:

```bash
yarn add react-native-vector-icons
```

(Para Android) Linhas adicionadas no arquivo `Android/app/build.gradle`.

Consulta de ícones disponíveis em: https://oblador.github.io/react-native-vector-icons/

---

## Header | Criação da estrutura e estilização

Pasta `Header` com os arquivos `index.js` e `styles.js` criada na pasta `components` e importado para o App (`src/index.js`). Foi criada a estrutura e a estilização do logo e do ícone do carrinho.

---

## Header | Implementação da navegação principal

Diferente da versão Web, para implementar a navegação no ambiente mobile é necessário que o Header fique dentro do Stack.Navigator (que é como se fosse o 'Switch' na versão web) para que o `onPress` funcione no `RectButton`.

Estrutura dos componentes `src/index.js`, `src/routes.js` e `src/components/Header` modificada para a navegação poder funcionar. Por conta da modificação foi possível mover o `NavigationContainer` pro componente `src/routes.js`.

Depois que a navegação funcionou, foi necessário remover o fundo transparente pois uma `Screen` entra por cima de outra nesse tipo de navegação e é necessário definir uma cor de fundo. Por conta disso a imagem de fundo geral (`src/components/App`) foi removida.

---

## Home | Criando estrutura e estilização

Arquivos `src/pages/Home/index.js` e `src/pages/Home/styles.js` modificados com a nova estrutura e a nova estilização. Por enquanto os dados exibidos são estáticos.

---

## Cart | Criando estrutura e estilização

Arquivos `src/pages/Cart/index.js` e `src/pages/Cart/styles.js` modificados com a nova estrutura e a nova estilização. Por enquanto os dados exibidos são estáticos.

---

## Configuração do Back-end que serve uma REST API (fake)

Módulo [json-server](https://github.com/typicode/json-server) instalado globalmente: permite servir uma REST API informando apenas um arquivo JSON com os dados a serem servidos.

```bash
yarn global add json-server
```

Arquivo `server.json` criado na raiz da aplicação.

Json Server inicializado:

```bash
json-server server.json -p 3333
```

Rotas [localhost:3333/products](http://localhost:3333/products) e [localhost:3333/stock](http://localhost:3333/stock) já funcionam ao acessá-las pelo browser

---

## Instalação do Axios para buscar dados na REST API

Instalamos o serviço `axios` para poder buscar os dados da API configurada:

```bash
yarn add axios
```

Definimos as configurações do serviço no arquivo `services/api`.

---

## Home | Buscando dados na API e atualizando estrutura

Arquivos `src/pages/Home/index.js` e `src/pages/Home/styles.js` modificados com a nova estrutura para exibir os dados da API.

Por enquanto, a quantidade de itens no carrinho permanece estática.

---

## Home | Formatando o preço de cada produto

Módulo [react-native-intl](https://github.com/taggon/react-native-intl) adicionado ao projeto para fazer a formatação dos preços.

```bash
yarn add react-native-intl
react-native link
```

(necessário recompilar o projeto)

Arquivo `src/util/format.js` criado com a configuração de formatação.

Formatação importada e utilizada no arquivo `src/pages/Home/index.js`.

---

## Home | Correção na key informada pra FlatList

Um erro no console indicou que o formato da key passado pra FlatList como Number estava errado, então o formato foi convertido pra String.

---

## Instalação do Redux e configuração do Redux Store

Módulos do [Redux](https://redux.js.org/introduction/getting-started) e de integração do [Redux com o React](https://react-redux.js.org/introduction/quick-start) instalados:

```bash
yarn add redux react-redux
```

Arquivo `store/index/modules/rootReducers.js` criado com a exportação de todos os reducers (por equanto só existe um que retorna uma função com o retorno de um objeto vazio).

Arquivo `store/index.js` criado com a inicialização da Redux Store após a importação dos reducers.

Módulo App (arquivo `src/index`) modificado para importar o `Provider` do módulo `Redux` e o `store` do arquivo `src/store/index.js`.

Estrutura modificada para envolver todos os elementos com o `Provider` informando o `store` via propriedade (disponibilizando o `Redux Store` pra toda a aplicação).

---

## Instalação/Configuração do módulo de integração do Reactrotron com o Redux

Módulo de integração do Reactotron com o Redux instalado:

```bash
yarn add reactotron-redux
```

Arquivo `src/config/ReactotronConfig.js` modificado para importar e utilizar o novo módulo instalado.

Arquivo `src/store/index.js` modificado para ativar os logs do Reactotron nas operações do Redux Store em ambiente de desenvolvimento.

---

## Instalação immer | Facilitando a manipulação de dados imutáveis

Instalamos o módulo immer para facilitar a manipulação de dados do estado (através do método `produce`).

```bash
yarn add immer
```

---

## Home | Criação do Reducer/Action @cart/ADD

Arquivo `src/store/modules/cart/reducer.js` do REDUCER criado. O valor inicial do state é um objeto com uma propriedade chamada "products" que guardará a lista de produtos. Por enquanto o objeto só tem essa propriedade. Switch Case com a condição '@cart/ADD' criado. Quando um produto é adicionado ao carrinho pela primeira vez, o amount é adicionado com o valor 1 e quando um produto já existe, o amount é apenas incrementado.

Arquivo `src/store/modules/cart/actions.js` das ACTIONS criado. Exporta um objeto com o type '@cart/ADD', além de repassar o product recebido via argumento.

Arquivo `src/store/modules/rootReducers.js` modificado para importar o novo reducer criado.

Arquivo `src/pages/Home/index.js` modificado para conectar-se com o Redux Store, ler o estado global e exibir a quantidade (amount) de produtos em seus respectivos botões. Também foi importada a ACTION `addToCart`, que é chamada ao clicar em cada botão de adicionar ao carrinho.

---

## Header | Exibindo quantidade de itens atuais no carrinho

Arquivo `src/components/Header/index.js` modificado para ler o estado global da Redux Store e exibir a quantidade de itens atuais no carrinho.

---

## Cart | Listando produtos adicionados ao carrinho

Arquivo `src/pages/Cart/index.js` modificado para ler o estado global da Redux Store e listar cada item adicionado ao carrinho.

---

## Cart | Removendo item da lista

Arquivo `src/store/modules/cart/actions.js` modificado. Foi incluída uma função que retorna a ACTION com o type `@cart/REMOVE`.

Arquivo `src/store/modules/cart/reducer.js` modificado. Foi incluída a condição do type `@cart/REMOVE` para remover um item da lista de produtos do carrinho.

Arquivo `src/pages/Cart/index.js` modificado. Método que chama a função que dispara a ACTION com o type `@cart/REMOVE` criada e associada ao botão de deletar item.

---

## Cart | Atualizando quantidade de item específico

Arquivo `src/store/modules/cart/actions.js` modificado. Foi incluída uma função que retorna a ACTION com o type `@cart/UPDATE_AMOUNT`.

Arquivo `src/store/modules/cart/reducer.js` modificado. Foi incluída a condição do type `@cart/UPDATE_AMOUNT` para atualizar um item da lista de produtos do carrinho.

Arquivo `src/pages/Cart/index.js` modificado. Método que chama a função que dispara a ACTION com o type `@cart/UPDATE_AMOUNT` criada e associada aos botões de aumentar e reduzir quantidade.

---

## Cart | Exibição de conteúdo alternativo se carrinho for vazio

Arquivo `src/pages/Cart/index.js` e `src/pages/Cart/styles.js` modificados para exibir um conteúdo alternativo quando o carrinho estiver vazio.

---

## Cart | Exibição do subtotal e total de acordo com a quantidade de produtos

Arquivo `src/pages/Cart/index.js` modificado para exibir o subtotal de cada produto com base na quantidade de produtos de cada item e também para exibir o total geral.

Obs: Diferente da versão Web, o módulo Intl (do componente 'react-native-intl' na versão Mobile) é executado de forma assíncrona, então não foi possível fazer a formatação dos dados no mapStateToProps. Foi necessário transformar o Cart em um componente no formato de classe para utilizar o estado e os métodos do ciclo de vida para exibição dos dados formatados.

---

## Intercionalização | Trocando a biblioteca utilizada

Devido ao delay causado pelo módulo 'react-native-intl', substituimos pelo módullo [react-intl](https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#react-native).

```bash
yarn remove react-native-intl
yarn add react-intl
```

Para funcionar também foi necessário configurar a [intercionalização](https://github.com/react-native-community/jsc-android-buildscripts#international-variant) no ambiente mobile (que fica desativado por padrão). Arquivo `android/app/build.gradle` modificado:

```
- def jscFlavor = 'org.webkit:android-jsc:+'
+ def jscFlavor = 'org.webkit:android-jsc-intl:+'
```

O arquivo `.eslintrc.js` também foi modificado para que a utilização propriedade style (pelo módulo react-intl) não indique erro.

---

## Instalação/Configuração do Redux Saga | Middlewares

Instalamos o Redux Saga para lidar com os side-effects através de middlewares:

```bash
yarn add redux-saga
```

Arquivo `src/store/modules/rootSagas.js` criado com a exportação de todos os sagas (por equanto só existe funções vazias).

Arquivo `src/store/index.js` modificado para fazer a importação e a execução dos sagas.

---

## Instalação/Configuração do módulo de integração do Reactrotron com o Redux Saga

Para facilitar a visualização do fluxo da aplicação instalamos o módulo que integra o Redux Saga com o Reactotron:

```bash
yarn add reactotron-redux-saga
```

Arquivo `config/ReactotronConfig.js` modificado. Módulo `reactotron-redux-saga` inicializado através do método `use` do Reactotron.

Arquivo `src/store/index.js` modificado. A constante `sagaMonitor` foi inicializada e passada como parâmetro pro método createSagaMiddleware com um valor válido em ambiente de desenvolvimento.

---

## Home | Saga | Consulta estoque e define quantidade antes de adicionar

Arquivo `src/store/modules/cart/actions.js` modificado. A função `addToCart` foi dividida em duas, `addToCartRequest` (que recebe apenas o id do produto) e `addToCartSuccess` (que continua recebendo o produto).

Arquivo `src/store/modules/cart/sagas.js` criado. Foi adicionado o primeiro Saga de Cart (`addToCartSaga`) e associado ao disparo da Action `@cart/ADD_REQUEST`. Esse Saga verifica se o produto existe no carrinho, define a próxima quantidade de itens (amount) com base nessa informação, faz a busca de quantidade em estoque via API (com base no `id` recebido) e compara para ver se não ultrapassou a quantidade máxima antes de buscar mais informações do produto e adiciona-lo ao carrinho através da função `addToCartSuccess` (caso ele não exista) ou apenas atualizar sem buscar mais informações através da função `updateAmount` (caso ele já exista).

Arquivo `src/store/rootSagas.js` modificado para importar o Cart Sagas.

Arquivo `src/store/modules/cart/reducer.js` modificado. O type foi alterado para `@cart/ADD_SUCCESS` (disparado pelo `addToCartSaga`). Como a verificação de existência do produto no carrinho e definição da quantidade (amount) agora é feita no `addToCartSaga`, o reducer com o type `@cart/ADD_SUCCESS` ficou responsável apenas por adicionar o item no carrinho.

Arquivo `src/pages/Home/index.js` modificado para chamar o `addToCartRequest` (ao invés do `addToCart`), informando o `id` a ser utilizado pelo `addToCartSaga`.

---

## Home | Exibindo alerta quando a quantidade no estoque for atingida

Arquivo `src/store/modules/cart/sagas.js` modificado para exibir um alerta quando a quantidade de itens limite for atingida.

---

## Cart | Saga | Consulta estoque antes de atualizar quantidade

Arquivo `src/store/modules/cart/actions.js` modificado. A função `updateAmount` foi dividida em duas, `updateAmountRequest` e `updateAmountSuccess` (que continuam recebendo o id do produto e a quantidade seguinte).

Arquivo `src/store/modules/cart/sagas.js` modificado. Foi adicionado o Saga `updateAmountSaga` e associado ao disparo da Action `@cart/UPDATE_AMOUNT_REQUEST`. Esse Saga verifica na API a quantidade de produtos em estoque e atualiza a quantidade através da função `updateAmountSuccess` se não alcançar o limite. Se alcançar o limite um alerta é exibido.

Arquivo `src/store/modules/cart/reducer.js` modificado. O type foi alterado para `@cart/UPDATE_AMOUNT_SUCCESS` (disparado pelo `updateAmountSaga`). A condição que verifica se a quantidade solicitada é menor ou igual a 0 foi movida pro Saga (antes de qualquer chamada a API).

Arquivo `src/pages/Cart/index.js` modificado para chamar o `updateAmountRequest` (ao invés do `updateAmount`), informando o `id` e a quantidade seguinte utilizados pelo `updateAmountSaga`.

---
