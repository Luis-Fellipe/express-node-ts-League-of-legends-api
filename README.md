# Projeto Node.js - LoL Champion API 🛡️🧙‍♂️

## 📌 Sobre o Projeto

Esta é uma API REST desenvolvida em **Node.js com TypeScript**, que simula um sistema de gerenciamento de **campeões e suas rotas (lanes)** baseado no universo do League of Legends. O projeto permite criar, listar, editar e deletar campeões, além de consultar as lanes disponíveis e os campeões mais usados em cada uma.

## 🚀 Funcionalidades

- Listar todos os campeões
- Buscar um campeão por ID
- Criar um novo campeão
- Atualizar as estatísticas de um campeão
- Deletar um campeão
- Listar todas as lanes e seus respectivos campeões

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Cors
- API REST
- Padrão MVC (Model-View-Controller)
- Manipulação de dados com JSON (sem banco de dados por enquanto)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório do projeto
cd express-ts-League-of-legends-api

# Instale as dependências
npm install
```

## ▶️ Como Executar

Antes de iniciar, crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```
PORT=3333
```

Depois, execute:

```bash
npm run start:dev
```

O servidor iniciará em `http://localhost:3333`.

## 🔁 Rotas da API

### 🎯 Campeões

- `GET /api/champions`  
  Lista todos os campeões cadastrados.

- `GET /api/champions/:id`  
  Retorna os dados de um campeão específico.

- `POST /api/champions`  
  Cria um novo campeão.  
  **Exemplo de body:**
  ```json
  {
    "id": 99,
    "name": "Lux",
    "role": "Mage",
    "statistics": {
      "attack": 2,
      "defense": 1,
      "magic": 9,
      "difficulty": 5
    }
  }
  ```

- `PUT /api/champions/:id`  
  Atualiza as estatísticas de um campeão.  
  **Exemplo de body:**
  ```json
  {
    "attack": 3,
    "defense": 2,
    "magic": 9,
    "difficulty": 6
  }
  ```

- `DELETE /api/champions/:id`  
  Remove um campeão do sistema.

---

### 🛤️ Lanes

- `GET /api/lanes`  
  Lista todas as lanes e os campeões relacionados.

  **Exemplo de resposta:**
  ```json
  [
    {
      "id": 1,
      "lane": "Top",
      "champions": ["Sett", "Mordekaiser", "Nasus", "Jax", "Ornn"]
    }
  ]
  ```

## ✅ Status da API

A API retorna os seguintes códigos HTTP:

- `200 OK`: Requisição bem-sucedida
- `201 Created`: Recurso criado com sucesso
- `204 No Content`: Nenhum dado encontrado
- `400 Bad Request`: Requisição inválida

## 🧠 Conceitos Praticados

- Criação de rotas com Express
- Separação em camadas (controllers, services, repositories)
- Tipagem com TypeScript
- Manipulação de JSON como "banco de dados"
- Padrões de resposta HTTP

## 👨‍💻 Autor

[Meu LinkedIn](https://www.linkedin.com/in/luis-fellipe-real)
