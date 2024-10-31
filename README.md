<h1 align="center">
     🏬 <a href="#" alt="site da loja física">Loja Física API</a>
</h1>

<h3 align="center">
    📍 Encontre lojas físicas de forma fácil e eficiente. 💚
</h3>

## 💻 Sobre o Projeto

🏬 **Loja Física API** é uma API RESTful para gerenciamento de lojas físicas. A API utiliza o **Google Maps Geocoding API** e o **ViaCEP API** para fornecer informações detalhadas e coordenadas geográficas dos endereços. Ela permite encontrar lojas próximas com base em um CEP fornecido. Este projeto foi desenvolvido como parte do Desafio UOL e utiliza Node.js, Express, TypeScript, MongoDB e Swagger para documentação da API.


---

## 🔌 APIs Utilizadas

Este projeto faz uso das seguintes APIs externas para enriquecer as funcionalidades:

- **[Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)**: Utilizada para obter as coordenadas geográficas com base nos endereços fornecidos.
- **[ViaCEP API](https://viacep.com.br/)**: Utilizada para buscar informações detalhadas sobre um endereço a partir do CEP informado.

---

## ⚙️ Funcionalidades

- **Cadastro de Lojas**: Empresas podem se cadastrar na plataforma enviando:
  - Nome, número, segmento e CEP da loja (obrigatório).
  - Telefone de contato e horário de funcionamento (opcional).

- **Consulta de Lojas**:
  - Consultar todas as lojas cadastradas.
  - Encontrar lojas próximas a partir de um CEP.

---

## 📄 Documentação Swagger

A documentação completa da API pode ser acessada através do Swagger. Para visualizar e testar os endpoints disponíveis, acesse:

- **Swagger Documentation:** http://localhost:(PORT)/api/docs/#/ (substitua `(PORT)` pela porta em que o servidor estiver rodando).

---

## 🚀 Como Executar o Projeto

### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
git clone https://github.com/usuario/repo-loja-fisica.git

# Acesse a pasta do projeto no terminal/cmd
cd repo-loja-fisica

# Instale as dependências
npm install

# Crie o arquivo .env e configure as variáveis de ambiente necessárias

# Variáveis de ambiente:
NODE_ENV=  # Define o ambiente de execução (development, production, etc.)
PORT=  # Porta na qual o servidor irá rodar
DATABASE=  # URL de conexão com o banco de dados MongoDB
DATABASE_PASSWORD=  # Senha para acessar o banco de dados
GOOGLE_API_KEY=  # Chave de API do Google para serviços como Geocoding

# Compile o TypeScript
npm run ts watchmode

# Execute os testes automatizados
npm run test

# Modo de Desenvolvimento
npm run start:dev

# O servidor iniciará na porta definida pela variável de ambiente - acesse http://localhost:(PORT)

# Modo de Produção
npm run start:prod
```

### Diferenças Entre os Modos de Execução

- **Modo de Desenvolvimento**
  - No modo de desenvolvimento, o tratamento de erros é detalhado e inclui mensagens explicativas que ajudam na depuração. Todos os logs, incluindo logs de debug, estão habilitados, permitindo acompanhar as operações da aplicação em detalhes. Esse modo é ideal para encontrar e corrigir erros rapidamente.
  - Para iniciar em modo de desenvolvimento, use o comando:
    ```bash
    npm run start:dev
    ```

- **Modo de Produção**
  - No modo de produção, o tratamento de erros é mais simplificado para garantir a segurança, sem revelar informações sensíveis ou detalhes de erros não operacionais. Logs de debug não são exibidos, e o foco está em otimizar o desempenho e a estabilidade da aplicação.
  - Para iniciar em modo de produção, use o comando:
    ```bash
    npm run start:prod
    ```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção e teste do projeto:

- **[Node.js](https://nodejs.org/)** - Plataforma de desenvolvimento backend.
- **[Express](https://expressjs.com/)** - Framework para Node.js.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript que adiciona tipagem estática.
- **[MongoDB](https://www.mongodb.com/)** - Banco de dados NoSQL.
- **[Swagger](https://swagger.io/)** - Documentação da API.
- **[Jest](https://jestjs.io/)** - Framework de testes.
- **[Winston](https://github.com/winstonjs/winston)** - Biblioteca de logs.
- **[Axios](https://github.com/axios/axios)** - Cliente HTTP.

---

## 🦸 Autor

Feito com empenho ❤️ por Victor Saraiva 👋🏽
