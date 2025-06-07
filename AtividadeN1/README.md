# Atividade N1 - Disciplina Programação Web 1 🚀

## 🎯 Descrição da atividade
Criar a estrutura básica de uma aplicação. Implementar tudo relacionado a parte visual, tais como, HTML, CSS, cores, modelos de página (templates), formulários, etc. Apenas na N2 serão implementadas as funcionalidades (autenticação, bancos de dados, integração com APIs, etc). Implementar as rotas utilizando o Nodejs (Express). 

---
## 📄 Atividade N1.pdf
Algumas etapas sobre esta atividade estão contidos no documento **[Atividade N1.pdf](https://github.com/kkauaon/pweb1/blob/main/AtividadeN1/Atividade%20N1.pdf)**.

---
## 📂 Conteúdo do Diretório
* **`app.js`** (ou similar): Arquivo principal de configuração do servidor Express.
* **`views/`**: Pasta contendo os arquivos de template EJS.
    * **`partials/`**: Pasta contendo os partials EJS (conteúdo reutilizável).
* **`routes/`**: Pasta contendo as definições de rotas da aplicação.
* **`public/`**: Pasta para arquivos estáticos acessíveis publicamente:
    * **`images/`**: Contém todas as imagens utilizadas no projeto.
    * **`javascripts/`**: Arquivos JavaScript para o frontend .
    * **`json/`**: Arquivos JSON que funcionam como *banco de dados*.
    * **`stylesheets/`**: Arquivos CSS, incluindo o output do Tailwind CSS.
* **`Atividade N1.pdf`**: Documento com as especificações da atividade (linkado acima).

---
## 🛠️ Tecnologias Utilizadas
As principais tecnologias e linguagens empregadas nesta atividade incluem:

* **HTML5**: Para a estruturação do conteúdo nas views EJS.
* **CSS3**: Para a estilização, gerenciada principalmente pelo **Tailwind CSS**.
* **JavaScript**: Tanto no backend (Node.js) quanto no frontend (para interatividade).
* **Node.js**: Ambiente de execução JavaScript no lado do servidor.
* **Express.js**: Framework web para Node.js, utilizado para roteamento e gerenciamento de requisições.
* **EJS (Embedded JavaScript templating)**: Motor de templates para gerar HTML dinamicamente.
* **Tailwind CSS**: Framework CSS utility-first para estilização rápida.
* **Nodemon**: Ferramenta que reinicia automaticamente o servidor Node.js durante o desenvolvimento.

---
## 🚀 Como Visualizar/Executar
Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone https://github.com/kkauaon/pweb1.git
    ```
2.  **Navegue até este diretório:**
    ```bash
    cd pweb1/AtividadeN1
    ```
3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```
4.  **Inicie o processo de compilação do Tailwind CSS (em um terminal):**
    Este comando irá observar as alterações nos seus arquivos e gerar o CSS necessário.
    ```bash
    npm run tailwind
    ```
5.  **Inicie o servidor Express (em outro terminal):**
    Este comando utilizará o Nodemon para iniciar o servidor, que reiniciará automaticamente ao detectar alterações nos arquivos do backend.
    ```bash
    npx nodemon
    ```
