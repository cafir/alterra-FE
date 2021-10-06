const express = require('express')
const app = express()
const port = 3000
const dbPool = require('./dbConnector')
const { create, getAll, update, destroy } = require('./controllers/controller')


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const createTable = `
    CREATE TABLE IF NOT EXISTS "contacts"(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        phone_number VARCHAR(50),
        email VARCHAR(50)
    );
`;
dbPool.query(createTable)
    .then((data) => {
        console.log(data, `table created!`);
    })
    .catch((err) => {
        console.log(err, 'table cannot be created')
    })

app.post('/', create)

app.get('/', getAll)

app.put('/:id', update)

app.delete('/:id', destroy)

app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})