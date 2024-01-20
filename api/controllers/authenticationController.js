const express = require('express');
const db = require('./db.js'); 

const login = (req, res) => {
    try {
        const { user_type, password } = req.body;

        // Query to retrieve user based on user_type and password
        const sql = "SELECT * FROM user WHERE user_type = ? AND password = ?";
        const values = [user_type, password];

        db.query(sql, values, (err, dbresult) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Internal Server Error');
            } else {
                // Check if any user was found
                if (dbresult.length > 0) {
                    // User found, authentication successful
                    res.status(200).json({ 
                        success: true,
                        message: 'Login successful' });
                } else {
                    // No matching user found, authentication failed
                    res.status(200).json({ 
                        success: false,
                        error: 'Invalid credentials' });
                }
            }
        });
    } catch (error) {
        console.error('Error in login function:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { login };
