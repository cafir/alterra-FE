const { Pool } = require('pg')

const dbPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_contacts',
    password: 'eca82013',
    port: 5432
})

module.exports = dbPool;