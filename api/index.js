require("dotenv").config();

const db = require("./database/db");
const port = process.env.PORT;
const express = require('express');
const app = express();
const cors =  require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
   res.json({
       message: "Fucionando!"
   })
});

app.get('/clientes/:id', async (req, res) => {
    const customer = await db.selectCustomer(req.params.id);
    res.json(customer);
});

app.get('/clientes', async (req, res) => {
    const customers = await db.selectCustomers();
    res.json(customers);
});

app.post('/clientes', async (req, res) => {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
});

app.listen(port);

console.log('API funcionando!');