# Rocketshoes • Mobile

Aplicação Mobile para um e-commerce de venda de tênis. Feita com ReactNative, Redux e Redux Saga. A aplicação consome uma REST API fake e permite criar, listar, atualizar ou remover itens (CRUD) ao carrinho de compras.

Passo a passo documentado em: https://github.com/cafecomlucas/Rocketshoes_Mobile/blob/master/_steps.md

---

## Como iniciar

### Localmente

Clone o repositório, acesse o diretório e instale as dependências:

```bash
git clone https://github.com/cafecomlucas/Rocketshoes.git
cd Rocketshoes
yarn
```

Inicie a REST API fake:

```bash
json-server server.json -p 3333 -d 400
```

Em outro terminal, inicie a aplicação:

```bash
yarn dev
```

---
