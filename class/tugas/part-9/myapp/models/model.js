
const dbPool = require('../dbConnector')
module.exports = {
    createContact : (body) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO "contacts" (first_name, last_name, phone_number, email) VALUES ($1, $2, $3, $4);`;

            dbPool.query(query, Object.values(body))
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(data);
                });
        });
    },

    getAllContact : () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM "contacts" ORDER BY id;`;

            dbPool.query(query)
                .then((data) => {
                    resolve(data.rows);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    updateContact : (params, body) => {
        return new Promise((resolve, reject) => {
            const { first_name, last_name, phone_number, email } = body;

            const query = `UPDATE "contacts"
                SET first_name = $2, last_name = $3, phone_number = $4, email = $5
                WHERE id = $1;
            `;

            const values = [+params, first_name, last_name, phone_number, email];

            dbPool.query(query, values)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
            
        });
    },

    deletContact : (params) => {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM "contacts" WHERE id = $1;`;

            dbPool.query(query, [params])
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}
