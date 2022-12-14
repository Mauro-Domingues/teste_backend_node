# Projeto nodejs

- É melhor de ler esse README por aqui: https://github.com/Mauro-Domingues/teste_backend_node

- É melhor ainda de ler as informações por aqui: https://mauro-domingues.github.io/area-de-testes/ 

# Detalhes:

- Por enquanto os dados: preço, quantia de lotes, limite de vendas e data limite por lote 
estão setados manualmente em [.env](.env)

# Falta terminar: 

- Permitir receber imagens no argumento das requisições (até recebe como um objeto blob, mas precisa do tratamendo para retornar ao usuário)
- retorno das requisições {“message”: “”,“code”: 200,“message_code”: “código usado para translate”“data”: {...}}
- Fazer o ingresso retornar o qr_code e bar_code (A ideia é gerar ambos a partir do "código" inserido ao gerar o ingresso)
- Refazer o projeto para Typescript
- Registro de atividades

# Init no projeto

- Init da API basta abrir o console e digitar "npm start".

- Conexão MySQL local: é necessário abrir o mysql 8.0 e inserir o arquivo [dump](./sql/db_schema.sql) ou digitar os seguintes comandos em: [sql](./sql/sql.txt).
E trocar os dados de conexão em: [dbConn](src\database\dbConn.js)

# Recomendado

- Se quiser poupar tempo, use a área de testes em: https://mauro-domingues.github.io/area-de-testes/ 
para uma versão mais "amigável aos olhos".

- A api está atualmente online em "https://teste-backend-node.herokuapp.com/" 
mas pode ser utilizada localmente.

- O banco de dados está atualmente online em "https://www.db4free.net/phpMyAdmin/" e 
é possível utilizar localmente

- Se preferir fazer manualmente, qualquer aplicação de requisições, 
recomendo https://www.postman.com/ ou a extensão https://www.thunderclient.com/ do vs. code.

# Url_base

    - Localmente: http://localhost:3000/ *Necessário abrir o console e digitar "npm start"

    - Remotamente: https://teste-backend-node.herokuapp.com/ *Nenhuma ação necessária

# Usuarios

    - Criar: url_base/user
    Body = {
        "email": "string",
        "password": "string"
    }

    - Buscar todos: url_base/user
    Headers = {
        "Authorization": "token"
    }

    - Buscar por Id: url_base/user/:id
    Headers = {
        "Authorization": "token"
    }

    - Editar: url_base/user/:id
    Headers = {
        "Authorization": "token"
    }
    Body = {
        "password": "string"
    }

    - Deletar: url_base/user/:id
    Headers = {
        "Authorization": "token"
    }

    - Autenticar: url_base/user/login
    Body = {
        "email": "string",
        "password": "string"
    }

# Eventos

    - Criar: url_base/event
    Headers = {
        "Authorization": "token"
    }
    Body = {
        "name": "string",
        "description": "string",
        "image": "blob",
        "data": "date(yyyy-MM-dd)",
        "place": "string",
        "coordinates": "string",
        "important_info": "string",
        "map": "blob"
    }

    - Buscar todos: url_base/event
    Headers = {
        "Authorization": "token"
    }

    - Buscar por Id: url_base/event/:id
    Headers = {
        "Authorization": "token"
    }

    - Editar: url_base/event/:id
    Headers = {
        "Authorization": "token"
    }
    Body = {
        "id": "int",
        "name": "string",
        "description": "string",
        "image": "blob",
        "data": "date(yyyy-MM-dd)",
        "place": "string",
        "coordinates": "string",
        "important_info": "string",
        "map": "blob"
    }

    - Deletar: url_base/event/:id
    Headers = {
        "Authorization": "token"
    }

# Ingressos

    - Criar: url_base/ticket
    Headers = {
        "Authorization": "token"
    }
    Body = {
        "id": "id",
        "code": "string",
        "type": "string",
    }

    - Buscar todos: url_base/ticket
    Headers = {
        "Authorization": "token"
    }

    - Buscar dentro de eventos: url_base/ticket/:id
    Headers = {
        "Authorization": "token"
    }

    - Buscar por id: url_base/ticket/id/:ticket_id
    Headers = {
        "Authorization": "token"
    }

    - Editar: url_base/ticket/id/:ticket_id
    Headers = {
        "Authorization": "token"
    }
    Body = {
        "id": "int",
        "name": "string",
        "description": "string",
        "image": "blob",
        "data": "date(yyyy-MM-dd)",
        "place": "string",
        "coordinates": "string",
        "important_info": "string",
        "map": "blob"
    }

    - Deletar: url_base/ticket/id/:ticket_id
    Headers = {
        "Authorization": "token"
    }