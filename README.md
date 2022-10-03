# Projeto nodejs

- Init da API basta abrir o console e digitar "npm start".

- Conexão MySQL local: é necessário abrir o mysql 8.0 e inserir o arquivo [dump](./sql/Dump20221002.sql) ou digitar os seguintes comandos em: [sql](./sql/sql.txt).
E trocar os dados de conexão em: [dbConn](src\database\dbConn.js)

# Recomendado

- Se quiser poupar tempo eu criei uma área de testes em: https://mauro-domingues.github.io/area-de-testes/ 
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

    - Vários eventos podem ser criados com associação(1, N) aos ingressos

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

    - Vários ingressos podem ser criados com associação(N, 1) aos eventos

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

# Falta terminar: 

- Criptografia da senha e validação do usuário com o bcrypt (Criptografia ok, falta validar e retornar para fora do escopo)
- Permitir receber imagens no parâmetro (já recebe, mas precisa do tratamendo ao retornar para o usuário)
- retorno das requisições {“message”: “”,“code”: 200,“message_code”: “código usado para translate”“data”: {...}}
- Fazer o ingresso retornar o qr_code e bar_code (A ideia é gerar ambos a partir do "código" inserido ao gerar o ingresso)
- Registro de atividades