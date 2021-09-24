# Sun Mobility Admin Panel - Node App

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```bash
#!/bin/bash
Node@v12.x.x
```

### Installing

A step by step series that will tell you how to get a development env running

```bash
#!/bin/bash
$ cd sm-admin-app
```

### Node dependencies

```node
$ npm install
```

### Export environment variables

| Variable                        | Description                       | Default                            |
| ------------------------------- | --------------------------------- | ---------------------------------- |
| PORT                            | Port in which node app is running | 3000                               |
| DATABASE                        | Postgress database name           | sm_marketing_admin_app_development |
| DB_USER_NAME                    | Postgres database username        | sm_admin_user                      |
| DB_USER_PASSWORD                | Postgres database user password   | admin@123                          |
| DB_HOST                         | Postgres host                     | localhost                          |
| DB_DIALECT                      | Sequelize database dialect        | postgres                           |
| AZURE_STORAGE_CONNECTION_STRING | Azure connection string           |                                    |
| AZURE_CONTAINER_NAME            | Azure container name              |                                    |

### Database Setup

- Create postgres user.

```sql
create user sm_admin_user with password 'admin@123';
alter role sm_admin_user with createdb Replication;
```

- Create database & table and run seeders.

```bash
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```

- Note: For More details read sequelize cli [docs](https://sequelize.org/master/manual/migrations.html).

### Run at local server

```bash
npm start
```

### Available APIs

| Name          | Route                                                                    | Description        |
| ------------- | ------------------------------------------------------------------------ | ------------------ |
| Root API      | [http://localhost:3000/](http://localhost:3000/)                         | Root API end point |
| Get all Users | [http://localhost:3000/v1/api/users](http://localhost:3000/v1/api/users) | API end point      |

### Postman Collection

[![Run in Postman](src/public/images/postman.svg)](https://app.getpostman.com/run-collection/37032b6d1b66768e6878#?env%5BSun%20Mobility%20Admin%20Panel%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYXBpX3ZlcnNpb24iLCJ2YWx1ZSI6InYxL2FwaSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYXV0aFRva2VuIiwidmFsdWUiOiJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPakVzSW1saGRDSTZNVFU1T0RrMU1UWTRNems0T1N3aVpYaHdJam94TlRrNE9UVXhPRFUyTnpnNWZRLll4SllGMHI4T3dJLVBPaFFBOUZXUmkxMzl1NWEwMVVnandGN1ZjQ2RQeHZXcUJEX3JuZUZyYVR0aVU0dkpWMWNzQkNxT2tSYWVTbF9jdkJIeHgyZW1UTndmNGNQRjNBRjBMZjZBX1lPSHVpcGVlMWhzdjcwbHNURWVBWXRyU2huNGxmNVBBa3MzY0JMaWNEQjgyckhSNFJEblFuYXpId3lxVWgxM2FwcVZnVFBhUm9wVXZrTW9hZjVzNkRIMlBSNUVfYjk0Q3czUzRhR01Hdlp0TjNwb0VEVTFLelhLZmVCUVFDYm44dkYtYVlRbGExUlpINTh3UWg3QUhKRDkzT2JNSzhBNk1ScTVzbjlVY0h2Y1VzUUs0OEI0MDVzVnJzRlFVc0QtR2pMNlBmTkdHSmp1dXIwb056Y1FXSlVYdU9xYVpOazQtM1BESk92MGRIRk9VYzBFSl96VlhhaWVqRFFlQk1jM0hnQUlmYXAwRUo1RzV6RUNlbnBRQlAxUWVsd08zWGlfQ2kweXRJeVJqU2l3a29SXzZBNTdZcl8tVS1mcDJEZlJSYk9GM09Xak9Sa1IzMGh3TDY2enkwX2NRTUU5ZHpPSHBNNmIycnY5RHRkX0NESnBYN0ZuX1FIWHJlZ2N4cHdfZlJXZVMyMWJTN3g4SkhVQVR0Sl9GTzluaVdGcnJtS0NTWHN1UjRuaTZoWmlRUkFDa1daalpITlVOTERPaG8wNENoWHRxNWhaWEloaXNaZUl6U0FSMlFaNVNBTFZtWURvSTdaNzRDTERKTTYwQjhiaUNGeDQyLWJqeGo3N3pxWE52NmlWZWxYZkpwQVYwUzNNV1A1bmZIYU9oWi1ZQTlGazBNd3F4UkJ2M2JhRkREMTRtZnQ3TFNWaXA5OHk5RGt5UG9kQ2pVIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJiYXNlX3VybCIsInZhbHVlIjoiaHR0cHM6Ly9zbS1jbXMtYXBpLXN0YWdpbmcuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiZW5hYmxlZCI6ZmFsc2V9XQ==)

## Folder Structure

    sm-admin-app
    │
    └───config (Database & env configurations)
    │
    └───src
    │   │
    │   └───admin-bro (Admin bro settings & property directory)
    │   │
    │   └───controllers (All application action end points)
    │   │
    │   └───db (Sequelize instance & database ORM settings)
    │   │
    │   └───public (Static app assets)
    │   │
    │   └───routes (Application routes & api end points)
    │   │
    │   └───utils (Application helpers)
    │
    └───.sequelizerc (Sequelize path configurations)
    │
    └───app.js (Express app declaration)
    │
    └───server.js (Express server settings)

## Developer Best Practice

- Maintain proper namespacing for folders, files, variable and function declarations.
- Format code using [Prettier](https://www.npmjs.com/package/prettier) package.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.
