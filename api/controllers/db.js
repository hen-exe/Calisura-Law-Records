const mysql = require('mysql');
require('dotenv').config(); 

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}); 

// db.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//     } else {
//         console.log('Connected to the database');
//         connection.release();
//     }
// });

// function checkConnection() {
//     db.getConnection((err, connection) => {
//         if (err) {
//             console.error('Error connecting to database:', err);
//         } else {
//             console.log('Database is connected');
//             connection.release();
//         }
//     });
// }

module.exports = db;