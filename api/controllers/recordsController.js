const express = require('express');
const db = require('./db.js'); 

const createRecord = (req, res) => {
    console.log('Request body:', req.body);

    const { date, transaction, payments, expenses, remarks, client_id} = req.body;

    const total = 0;
    const status = 'Active';

    const sql = "INSERT INTO record (date, transaction, payments, expenses, total_amount, record_status, remarks, client_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [date, transaction, payments, expenses, total, status, remarks, client_id];

    db.query(sql, values, (err, results) => {
        if (err) {
            res.status(404).json({
                success: false,
                message: "Record add failed",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Record created successfully",
                data: results,
            });
        }
    })
}

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

const retrieveCount = (req, res) => {
    const { client_id } = req.query;

    const sql = "SELECT COUNT(*) AS trans_count, client_id FROM record WHERE client_id = ?";

    db.query(sql, [client_id], (err, results) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" });
        } else {
            const { trans_count, client_id } = results[0];

            res.status(200).json({
                status: 200,
                success: true,
                data: { transactionCount: trans_count, client_id },
            });
        }
    });
};

const deleteRecord = (req, res) => {
    try {
        const { record_id } = req.query;

        const sql = "DELETE FROM record WHERE record_id = ?";

        db.query(sql, [record_id], (err, results) => {
            if (err) {
                console.error('Error Getting data:', err)
                res.status(500).json({
                    status: 500,
                    success: false,
                    message: "Unsuccesful delete operation",
                    error: err.message
                })
            } else if (results.affectedRows === 0) {
                res.status(404).json({
                    status: 404,
                    success: false,
                    message: "Record not found",
                });
            }
            else {
                res.status(200).json({
                    status: 200,
                    success: true,
                    message: "Successfully deleted record",
                    data: results
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Database Error",
            error: error.message
        });
    }
}


module.exports = {
    createRecord,
    retrieveAll,
    retrieveCount,
    deleteRecord
}