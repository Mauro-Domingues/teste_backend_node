# Projeto nodejs

- Init da API basta abrir o console e digitar "npm start".

- Conexão MySQL local: é necessário abrir o mysql 8.0 e digitar os seguintes comandos em: [sql](sql.txt)
Além de trocar os dados de conexão em: [dbConn](src\database\dbConn.js)

# Recomendado

- Se quiser poupar tempo eu criei uma área de testes em: https://mauro-domingues.github.io/area-de-testes/
Para uma versão mais "amigável aos olhos".

- A api está atualmente online em "https://teste-backend-node.herokuapp.com/"
Mas pode ser utilizada localmente

- O banco de dados está atualmente online em "https://www.db4free.net/phpMyAdmin/"
Mas é possível utilizar localmente

- Se preferir fazer manualmente, qualquer aplicação de requisições.
Recomendo https://www.postman.com/ ou a extensão https://www.thunderclient.com/ do vs. code

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

    - Buscar por Id: url_base/user/:id

    - Editar: url_base/user/:id
    Body = {
        "password": "string"
    }

    - Deletar: url_base/user/:id

    - Autenticar: url_base/user/login
    Body = {
        "email": "string",
        "password": "string"
    }

# Eventos

    - Vários eventos podem ser criados com associação(1, N) aos ingressos

    - Criar: url_base/event
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

    - Buscar por Id: url_base/event/:id

    - Editar: url_base/event/:id
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

# Ingressos

    - Vários ingressos podem ser criados com associação(N, 1) aos eventos

    - Criar: url_base/ticket
    Body = {
        "id": "id",
        "code": "string",
        "type": "string",
    }

    - Buscar todos: url_base/ticket

    - Buscar dentro de eventos: url_base/ticket/:id

    - Buscar por id: url_base/ticket/id/:ticket_id

    - Editar: url_base/ticket/id/:ticket_id
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

# Falta terminar: 

- Criptografia da senha e validação do usuário com o bcrypt
- Privar as rotas com o requerimento do bearer token
- Permitir as variáveis blob para receber imagens no parâmetro
- retorno das requisições {“message”: “”,“code”: 200,“message_code”: “código usado para translate”“data”: {...}}
- Fazer o ingresso retornar o qr_code e bar_code
- Registro de atividades