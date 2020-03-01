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

---
