async function connect(){

    if (global.connection)
            return global.connection.connect();

    const {Pool} = require("pg");
    const pool = new Pool({
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    });

    const client = await pool.connect();
    console.log("criou o pool de conexão");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectCustomers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}

async function selectCustomer(id) {
    const client = await connect();
    const res = await client.query('SELECT * FROM clientes WHERE ID=$1', [id]);
    return res.rows;
}

async function insertCustomer(customer) {
    const client = await connect();
    const sql = 'INSERT INTO clientes(nome,email,telefone, coordenada) VALUES ($1,$2,$3, $4);';
    const values = [customer.nome, customer.email, customer.telefone, customer.coordenada];
    await client.query(sql, values);
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer
}

