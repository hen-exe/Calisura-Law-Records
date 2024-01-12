const express = require('express');
const db = require('./db.js'); 

const retrieveAll = (req, res) => {
    try {
        const sql = "SELECT * FROM client"
        db.query(sql, (err, results) => {
            if(err){
                res.status(500).json({error: 'Internal server error'})
            }else{
                res.json({
                    success: true,
                    client: results,
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Database Error",
        });
    }
}

module.exports = {
    retrieveAll
};