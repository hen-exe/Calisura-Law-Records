const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db.js'); 

const login = async (req, res) => {
    try {
        const { user_type, password } = req.body;
        
        const sql = "SELECT * FROM user WHERE user_type = ?";
        const values = [user_type];

        db.query(sql, values, async (err, dbresult) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).send('Internal Server Error');
            }

            if (dbresult.length > 0) {
                const storedHashedPassword = dbresult[0].password;

                const match = await bcrypt.compare(password, storedHashedPassword);

                if (match) {
                    return res.status(200).json({ 
                        success: true,
                        message: 'Login successful' 
                    });
                } else {
                    return res.status(200).json({ 
                        success: false,
                        error: 'Invalid credentials' 
                    });
                }
            } else {
                return res.status(200).json({ 
                    success: false,
                    error: 'Invalid credentials' 
                });
            }
        });
    } catch (error) {
        console.error('Error in login function:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = { login };
