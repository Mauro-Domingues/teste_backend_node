# Projeto nodejs

- Init da API basta abrir o console e digitar "npm start".

- Conexão MySQL local: é necessário abrir o mysql 8.0 e digitar os seguintes comandos em: [sql](sql.txt)
Além de trocar os dados de conexão em: [dbConn](src\database\dbConn.js)

# Recomendado

- Se quiser poupar tempo eu criei uma área de testes em: https://mauro-domingues.github.io/area-de-testes/
Para uma versão mais "amigável aos olhos".

- A api está atualmente online em "https://teste-backend-node.herokuapp.com/"
Ou seja, pode usar https://teste-backend-node.herokuapp.com/ como url_base
ao invés de http://localhost:3000/ com "npm start"
É preferível usando http://localhost:3000/ pois não sei se até lá o heroku vai ter aceitado minha requisição de deploy

- O banco de dados está atualmente online em "https://www.db4free.net/phpMyAdmin/"
Ou seja, não precisa fazer nada em relação ao banco de dados.

- Ou se preferir fazer manualmente, qualquer aplicação de requisições.
Recomendo https://www.postman.com/ ou a extensão https://www.thunderclient.com/ do vs. code

# Usuarios

    - Criar: http://localhost:3000/user
    Parâmetros = {
        "email": "string",
        "password": "string"
    }

    - Buscar todos: http://localhost:3000/user

    - Buscar por Id: http://localhost:3000/user/:id

    - Editar: http://localhost:3000/user/:id
    Parâmetros = {
        "password": "string"
    }

    - Deletar: http://localhost:3000/user/:id

    - Autenticar: http://localhost:3000/user/login
    Parâmetros = {
        "email": "string",
        "password": "string"
    }

# Eventos

    - Vários eventos podem ser criados com associação(1, N) aos ingressos

    - Criar: http://localhost:3000/event
    Parâmetros = {
        "name": "string",
        "description": "string",
        "image": "blob",
        "data": "date(yyyy-MM-dd)",
        "place": "string",
        "coordinates": "string",
        "important_info": "string",
        "map": "blob"
    }

    - Buscar todos: http://localhost:3000/event

    - Buscar por Id: http://localhost:3000/event/:id

    - Editar: http://localhost:3000/event/:id
    Parâmetros = {
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

    - Deletar: http://localhost:3000/user/:id

# Ingressos

    - Vários ingressos podem ser criados com associação(N, 1) aos eventos

    - Criar: http://localhost:3000/ticket
    Parâmetros = {
        "id": "id",
        "code": "string",
        "type": "string",
    }

    - Buscar todos: http://localhost:3000/ticket

    - Buscar dentro de eventos: http://localhost:3000/ticket/:id

    - Buscar por id: http://localhost:3000/ticket/id/:id

    - Editar: http://localhost:3000/ticket/id/:ticket_id
    Parâmetros = {
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

    - Deletar: http://localhost:3000/ticket/id/:ticket_id

# Falta terminar: 

- Criptografia da senha e validação do usuário com o bcrypt
- Privar as rotas com o requerimento do bearer token
- Permitir as variáveis blob para receber imagens no parâmetro
- retorno das requisições {“message”: “”,“code”: 200,“message_code”: “código usado para translate”“data”: {...}}
- Fazer o ingresso retornar o qr_code e bar_code
- Registro de atividades
