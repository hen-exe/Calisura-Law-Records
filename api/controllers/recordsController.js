const express = require('express');
const db = require('./db.js'); 

const retrieveAll = (req, res) => {
    try {
        const {client_id} = req.query;

        const sql = "SELECT * FROM record WHERE client_id = ?"

        db.query (sql, [client_id], (err, results) => {
            if (err) {
                res.status(500).json({error: "Internal serveer error"});
            }else {
                res.json({
                    success: true,
                    record: results,
                })
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Database Error",
        });
    }
}


module.exports = {
    retrieveAll
}