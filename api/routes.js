require('dotenv').config();
const cors = require('cors');
const express = require('express')
const app = express()

const authenticationRoutes = require('./routes/authenticationRoute')


app.use(cors({
    origin: [process.env.CORS_ORIGIN],
    methods: ["GET","POST"],
    credentials: true,
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const allowedOrigins = [process.env.CORS_ORIGIN];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));


app.use(express.json());
app.use('/',authenticationRoutes);


module.exports = app;