Este teste de vaga consiste em uma aplicação de página única (SPA) desenvolvida em React utilizando as boas práticas do Domain Driven Desgin (DDD).
Implementando operações CRUD (Create, Read, Update, Delete) e consumindo uma API construída em ASP.NET Core


# Instruções para execução

Antes de tudo clone este repositório
```bash
git clone git@github.com:CaioSouzalimaa/teste-newcon.git
```

## Inicie executando a API e depois o Frontend

### API

Esta API se comunica com o banco de dados SQL Server, então é necessário ter o SQL Server instalado na máquina.

1. Vá até o arquivo appsettings.json e altere a string de conexão com o banco de dados adicionando sua senha ou crie um usuario SA com a senha teste123. 
Você pode encontrar este arquivo em:
```bash
 /api-tourist-spots/appsettings.json
```
2. Vá até a pasta do projeto
```bash
cd api-tourist-spots
```
3. Execute o comando para rodar a API em localhost:7270
```bash
dotnet run
```

### Frontend

1. Vá até a pasta do projeto
```bash
cd front-end
```

2. Instale as dependencias
```bash
yarn
```

3. Execute o Front-end
```bash
yarn dev
```
