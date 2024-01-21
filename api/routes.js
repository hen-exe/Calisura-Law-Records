require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

const authenticationRoutes = require('./routes/authenticationRoute');
const userRoutes = require('./routes/userRoute');
const recordsRoutes = require('./routes/recordsRoute');

const allowedOrigins = [process.env.CORS_ORIGIN];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}));

app.use(express.json());
app.use('/', authenticationRoutes);
app.use('/user', userRoutes);
app.use('/records', recordsRoutes);

module.exports = app;
