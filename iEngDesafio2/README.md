<h1 align="center"><strong>Segundo desafio iEngOnline</strong></h1>

# Sobre o Projeto

#### Segundo desafio para a vaga de estágio na iEngOnline 
---

# Pré-requisitos

* Você precisa ter instalado em sua máquina o sistema de controle de versões distribuído [GIT](https://www.npmjs.com/get-npm)
* Você precisa ter instalado em sua máquina o gerenciador de dependêcias [NPM](https://www.npmjs.com/get-npm)
* Você precisa ter instalado em sua máquina o [NODEJS](https://nodejs.org/pt-br/)
* Você precisa ter instalado em sua máquina algum banco de dados MySQL
* Você precisa ter uma conexão com a internet


# Instalação e Configuração

<b>1. Com o projeto em seu computador e navegue até a pasta server renomeie o arquivo .example.env. Depois altere os valores das constantes no arquivo.</b>

```
.example.env para .env
```
Exemplo de .env

```
PORT=3333
HOST=localhost
DBUSER=root
DBPASSWORD=123
DBNAME=banco

```

<b>2. Ainda na pasta server rode o seguinte comando no cmd: </b>

```
npm install
```

<b>3. Depois de terminar a instalação das dependências rode o seguinte comando no cmd para criar a base de dados: </b>

```
npx sequelize db:create
```

<b>4. Depois de terminar a criação da base de dados rode o seguinte comando no cmd para criar a tabela users: </b>

```
npx sequelize db:migrate
```

---

# Execução

<b>Se não possui o POSTMAN ou equivalente para fazer o cadastro na api rode o seguinte comando na pasta server</b>

```
npm run start
```

<b>Caso possua POSTMAN ou equivalente e queira fazer seus próprias requisições</b>

```
npm run develoment
```


---

# Tecnologias utilizadas

* [Materialize](https://materializecss.com/getting-started.html) - Framework CSS
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [XAMPP](https://www.apachefriends.org/pt_br/index.html) -  Ambiente de Desenvolvimento
* [Insomnia](https://insomnia.rest/download/) - Aplicativo Desktop

---

# Author

* **Fernando Marques**  - [GALSANTA](https://github.com/GALSANTA)
