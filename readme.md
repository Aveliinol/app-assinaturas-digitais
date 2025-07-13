# App Assinaturas Digitais

Uma API RESTful para gerenciamento de assinaturas digitais de revistas, desenvolvida com Node.js, Express e PostgreSQL.

## 🚀 Funcionalidades

- **Autenticação JWT**: Sistema de login seguro com tokens de acesso e refresh
- **Gestão de Usuários**: Cadastro, consulta, atualização e exclusão de usuários
- **Assinaturas Digitais**: Gerenciamento completo de assinaturas de revistas
- **Validações**: Validação robusta de dados de entrada
- **Banco de Dados**: Integração com PostgreSQL usando Sequelize ORM

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para JavaScript
- **JWT** - Autenticação e autorização
- **bcrypt** - Criptografia de senhas
- **express-validator** - Validação de dados
- **CORS** - Habilitação de requisições cross-origin

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Aveliinol/app-assinaturas-digitais.git
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   # Configurações do Banco de Dados
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=nome_do_banco
   DB_USER=usuario_do_banco
   DB_PASSWORD=senha_do_banco
   
   # Configurações JWT
   SECRET_KEY=sua_chave_secreta_super_segura
   TEMPO_ACESS_TOKEN=15m
   TEMPO_REFRESH_TOKEN=7d
   
   # Configurações do Servidor
   PORTA=3000
   ```

4. **Configure o banco de dados PostgreSQL**
   - Crie um banco de dados PostgreSQL
   - Atualize as credenciais no arquivo `.env`

5. **Execute o servidor**
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:3000` (ou na porta configurada).

## 📁 Estrutura do Projeto

```
app-assinaturas-digitais/
├── src/
│   ├── config/
│   │   └── configDB.js           # Configuração do banco de dados
│   ├── modules/
│   │   ├── assinatura/           # Módulo de assinaturas
│   │   │   ├── controllers/      # Controladores
│   │   │   ├── middleware/       # Middlewares específicos
│   │   │   ├── models/          # Modelos do banco de dados
│   │   │   └── routes/          # Rotas da API
│   │   ├── autenticacao/        # Módulo de autenticação
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   └── routes/
│   │   └── usuario/             # Módulo de usuários
│   │       ├── controllers/
│   │       ├── middleware/
│   │       ├── models/
│   │       └── routes/
│   └── utils/
│       └── validarCampos.js     # Utilitários de validação
├── index.js                    # Arquivo principal
├── package.json
└── README.md
```

## 🌐 Endpoints da API

### Autenticação
- `POST /auth/login` - Login do usuário

### Usuários
- `GET /usuarios/listar` - Listar todos os usuários
- `POST /usuarios/cadastrar` - Criar novo usuário

### Assinaturas
- `GET /assinaturas/listar` - Listar todas as assinaturas
- `GET /assinaturas/listar/:id` - Buscar assinatura por ID
- `POST /assinaturas/cadastrar` - Criar nova assinatura
- `PUT /assinaturas/editar/:id` - Atualizar assinatura
- `DELETE /assinaturas/deletar/:id` - Deletar assinatura

## 🔒 Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Para acessar endpoints protegidos, inclua o token no header:

```
Authorization: Bearer <seu_token_aqui>
```

## 🗃️ Modelos de Dados

### Usuário
```javascript
{
  id: Integer (Auto-increment, Primary Key),
  nome: String (2-100 caracteres),
  email: String (único, formato de email),
  senha: String (criptografada)
}
```

### Assinatura
```javascript
{
  id: Integer (Auto-increment, Primary Key),
  assinante_nome: String (2-100 caracteres),
  email: String (formato de email),
  revista_nome: String,
  // outros campos específicos da assinatura
}
```

## 📝 Validações

- **Senhas**: Mínimo 6 caracteres com letra maiúscula, minúscula, número e caractere especial
- **Emails**: Formato de email válido e único no sistema
- **Nomes**: Entre 2 e 100 caracteres

## 🚀 Deploy

Para deploy em produção:

1. Configure as variáveis de ambiente no seu provedor
2. Certifique-se de que o PostgreSQL está acessível
3. Execute as migrações do banco de dados
4. Inicie a aplicação com `npm start`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Lucas** - Desenvolvimento inicial

## 📞 Suporte

Para suporte, entre em contato através do email ou abra uma issue no repositório.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
