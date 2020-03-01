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
