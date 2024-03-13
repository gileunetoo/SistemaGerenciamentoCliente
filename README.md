SistemaGerenciamentoCliente

rodar -front
          npm start
      -api
          npm start

instalar node_modules em ambos
          npm install
banco postgres
    sql:
      CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(75) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    coordenada POINT
);
