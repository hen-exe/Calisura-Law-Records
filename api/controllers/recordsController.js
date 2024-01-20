const express = require('express');
const db = require('./db.js'); 

const createRecord = (req, res) => {
    console.log('Request body:', req.body);

    const { date, transaction, payments, expenses, remarks, client_id } = req.body;

    const total_amount = payments - expenses;
    const status = 'Active';

    const sql = "INSERT INTO record (date, transaction, payments, expenses, total_amount, record_status, remarks, client_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [date, transaction, payments, expenses, total_amount, status, remarks, client_id];

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

        const sql = "SELECT * FROM record WHERE client_id = ? ORDER BY date DESC"

        db.query (sql, [client_id], (err, results) => {
            if (err) {
                res.status(500).json({error: "Internal serveer error"});
            }else {
                res.json({
                    success: true,
                    records: results,
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
    const sql = "SELECT COUNT(*) AS trans_count FROM record WHERE client_id = ? AND record_status = 'Active'";
  
    db.query(sql, client_id, (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        const transactionCounts = results[0].trans_count;
        res.status(200).json({
          status: 200,
          success: true,
          data: { [client_id]: transactionCounts },
        });
      }
    });
  };

  const retrieveRecordDetails = (req, res) => { //retrieve specific record
    try {
        const { record_id } = req.query;

        const sql = "SELECT * FROM record WHERE record_id = ?";

        db.query(sql, [record_id], (err, results) => {
            if (err) {
                res.status(500).json({ error: "Internal server error" });
            } else {
                res.json({
                    success: true,
                    record: results,
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Database Error",
        });
    }
};

  const retrieveByParams = (req, res) => { //for search

    try {
      const { col, val } = req.query;
  
      let sql;
      let values;
  
      if (col === 'transaction') {
        sql = "SELECT * FROM record WHERE ?? LIKE ?";
        values = [col, `%${val}%`];
      } else {
        // Invalid column
        return res.status(400).json({ error: 'Invalid column specified' });
      }
  
      db.query(sql, values, (err, results) => {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json({
            status: 200,
            success: true,
            records: results,
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        success: false,
        message: 'Database Error',
      });
    }
  };

  const updateRecord = (req, res) => {
    
    const { record_id, date, transaction, payments, expenses, remarks } = req.body;

    const total = payments - expenses;
    const sql = "UPDATE record SET date = ?, transaction = ?, payments = ?, expenses = ?, total_amount = ?, remarks = ?  WHERE record_id = ?";

    db.query(sql, [date, transaction, payments, expenses, total, remarks, record_id], (err, results) => {
        if (err) {
            console.error('Error updating record:',  err);
            res.status(500).json({
                success: false,
                message: "Failed to update record",
                error: err.message
            });
        } else if (results.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "Record not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Record updated successfully",
                data: results
            });
        }
    });
};

const updateRecordSpecific = (req, res) => {
    const { record_id, total_amount} = req.body;

    const sql = `UPDATE record SET total_amount = ? WHERE record_id = ?`;

    db.query(sql, [total_amount, record_id], (err, results) => {
        if (err) {
            console.error('Error updating record:', err);
            res.status(500).json({
                success: false,
                message: "Failed to update record",
                error: err.message
            });
        } else {
            res.status(200).json({
                success: true,
                message: "record updated successfully",
                data: results
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
    retrieveByParams,
    retrieveRecordDetails,
    updateRecord,
    deleteRecord
}