const { createContact, getAllContact, updateContact, deletContact } = require('../models/model')
module.exports = {
    create: (req, res) => {
        createContact(req.body)
        .then((data) => {
            res.status(201).json({
                data, message: 'success create contact'
            });
        })
        .catch((err) => {
            res.status(500).json({
                err, message: 'error create contact'
            });
        });
    },

    getAll : (req, res) => {
        getAllContact()
        .then((data) => {
            res.status(200).json({
                data, message: 'success get all contact data'
            });
        })
        .catch((err) => {
            res.status(500).json({
                err, message: 'could not get all contact data'
            });
        });
    },

    update : (req, res) => {
        const id = req.params.id;

        updateContact(id, req.body)
            .then((data) => {
                res.status(200).json({
                    data, message: 'success modify contact data'
                });
            })
            .catch((err) => {
                res.status(500).json({
                    err, message: 'could not modify contact data'
                });
            });
    },

    destroy : (req, res) => {
        const id = req.params.id;

        deletContact(id)
            .then((data) => {
                res.status(200).json({
                    data, message: 'success delete contact'
                });
            })
            .catch((err) => {
                res.status(500).json({
                    err, message: 'could not delete contact'
                })
            })
    }
}

