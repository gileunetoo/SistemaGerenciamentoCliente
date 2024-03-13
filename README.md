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


link video google drive
          https://drive.google.com/file/d/1lmX1-GV_duTMYwqLSjCC7rQY5fSTwZSU/view?usp=drive_link
