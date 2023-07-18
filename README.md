# DeliveryTime (Frontend)

Este é o frontend da aplicação DeliveryTime, desenvolvido utilizando React, ReactDOM, Polished, Styled Components e Axios.

## Configuração do Ambiente

Antes de iniciar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Node.js (versão LTS)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone este repositório em sua máquina local:

```bash
git clone https://gitlab.com/senac-projetos-de-desenvolvimento/2023-diego-cardozo/delivery-time-frontend.git
cd deliverytime-frontend

## Instale as dependências do projeto:

npm install

## Uso

Para iniciar o servidor de desenvolvimento, execute:

npm start

A aplicação estará disponível em http://localhost:3000.
Scripts Disponíveis

npm start: Inicia o servidor de desenvolvimento.

npm run build: Compila o código React para a pasta build.

npm run lint: Executa o ESLint para verificar a sintaxe e estilo do código.

npm run lint:fix: Executa o ESLint e corrige automaticamente problemas de estilo quando possível.

## Estrutura do Projeto

A estrutura do projeto segue o padrão comum de projetos React:

├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── context/
│   │   └── ...
│   ├── sytles/
│   │   └── ...
│   ├── App.js
│   └── index.js
└── ...

A pasta public/ contém o arquivo HTML base index.html e outros arquivos estáticos.

A pasta src/ é o diretório principal do código fonte.
src/components/ contém os componentes React reutilizáveis.
src/styles/ contém os estilos globais e temas do Styled Components.
src/helpers/ contém utilitários e funções auxiliares.
App.js é o componente raiz da aplicação.
index.js é o ponto de entrada do React.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou relatar problemas (issues) se encontrar algum bug ou tiver alguma sugestão.
