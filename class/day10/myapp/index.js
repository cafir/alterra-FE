const express = require('express') //4.17.1
const app = express()
const port = 3000
const pool = require('./config')

let createTeacher = (body) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO "Teachers" (first_name, last_name, email, gender) VALUES ($1, $2,$3, $4);`;

    pool.query(query, Object.values(body))
        .then((data) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

createTeacher({
    first_name: 'nama_depan',
    last_name: 'nama_belakang',
    email: 'email@mail.com',
    gender: 'androgini'

})

//method post dengan request dan respond
app.post('/', (req, res) => {
    
})
// app.get('/', (req, res) => {
//     res.send('Hello word')
// })

app.listen(port, () => {
    console.log('Server running on port:', port)
})
