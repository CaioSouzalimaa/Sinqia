# 🚀 Teste Prático

Este teste consiste em uma **aplicação de página única (SPA)** desenvolvida em **React**, seguindo as boas práticas do **Domain Driven Design (DDD)**.  
A aplicação implementa operações **CRUD (Create, Read, Update, Delete)** e consome uma **API construída em ASP.NET Core**.  

---

## 📌 Instruções para execução  

### 🔹 1️⃣ Clone este repositório  
Antes de tudo, clone o projeto em sua máquina:  
```bash
git clone git@github.com:CaioSouzalimaa/Sinqia.git
```

### 🔹 2️⃣ Inicie a API antes do Frontend  

---

## ⚙️ Backend - API (ASP.NET Core)  

Esta API se comunica com um banco de dados **SQL Server**, então é necessário ter o **SQL Server instalado** na máquina.  

### 🛠️ **Pré-requisitos**  
Antes de executar a API, certifique-se de que possui o **.NET 8.0** instalado.  
📌 **Verifique a versão do .NET com:**  
```bash
dotnet --version
```
Se não tiver o **.NET 8.0**, baixe e instale a versão mais recente em:  
🔗 [Download do .NET 8.0](https://dotnet.microsoft.com/pt-br/download)  

### 🛠️ **Passos para configurar e rodar a API:**  

1️⃣ **Configurar a string de conexão**  
- Vá até o arquivo `appsettings.json` e altere a **string de conexão** com o banco de dados.  
- Modifique o **User ID** e **Senha** conforme necessário.  
- Ou crie um usuário **SA** com a senha padrão: `teste123`.  
📌 **Local do arquivo:**  
```bash
/api-tourist-spots/appsettings.json
```
📌 **Exemplo de string de conexão:**  
```json
"ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=TouristSpotsDB;User Id=SA;Password=teste123;"
}
```

2️⃣ **Acesse a pasta do projeto**  
```bash
cd api-tourist-spots
```

3️⃣ **Execute a API**  
```bash
dotnet run
```
✅ **A API estará rodando em:** `http://localhost:7270`  

---

## 🎨 Frontend - React  

### 🛠️ **Passos para rodar o Frontend:**  

1️⃣ **Acesse a pasta do projeto**  
```bash
cd front-end
```

2️⃣ **Instale as dependências**  
```bash
yarn
```

3️⃣ **Execute o Frontend**  
```bash
yarn dev
```
✅ **O Frontend estará rodando em:** `http://localhost:3000` (ou outra porta disponível)  

---

## 🚀 Conclusão  

Agora sua aplicação **SPA** estará rodando corretamente!  
✅ **API em ASP.NET Core** conectada ao **SQL Server**.  
✅ **Frontend React** consumindo a API.  
