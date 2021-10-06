const { Pool } = require('pg')//8.7.1

const pool = new Pool({
    user: 'postgres',  
    host: 'localhost', 
    database: 'db_school', 
    password: 'eca82013', 
    port: 5432 
})

//export digunakan agar file tersebut dapat dipanggil dalam file lain
module.exports = pool;