Sincronização de dados de municípios e estados do Brasil
Esta aplicação realiza a sincronização de dados de municípios e estados do Brasil, obtidos através da API do IBGE, com um banco de dados.

A aplicação utiliza a biblioteca Axios para realizar as requisições HTTP para a API do IBGE e o Sequelize para realizar a sincronização com o banco de dados.

O arquivo db.js contém a configuração do banco de dados, enquanto o arquivo uf.js define o modelo de dados para os estados e o arquivo muni.js define o modelo de dados para os municípios.

O arquivo index.js é o arquivo principal da aplicação, que realiza a sincronização dos dados. Ao ser executado, o arquivo sincroniza o banco de dados, obtém a lista de estados através da API do IBGE e, para cada estado, obtém a lista de municípios. Em seguida, a aplicação verifica se o estado e cada município já existem no banco de dados e, caso não existam, cria os registros correspondentes.

Para executar a aplicação, basta clonar o repositório, instalar as dependências (npm install) e executar o arquivo index.js (node index.js). É necessário ter um banco de dados configurado e atualizar as informações de configuração no arquivo db.js.

Dependências
Node.js
Axios
Sequelize
Executando a aplicação
Clone o repositório: git clone https://github.com/juhlio/cad_ibge
Instale as dependências: npm install
Configure o banco de dados no arquivo db.js
Execute a aplicação: node index.js

Autor: Julio Ramos (julio@jcsr.com.br)