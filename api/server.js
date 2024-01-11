const express = require('express');
const { checkConnection } = require('./controllers/db'); 
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const port = 5000;

const PORT = process.env.PORT || 5000; 
const app = require('./routes')

// // Check database connection during startup
// checkConnection();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: [process.env.CORS_ORIGIN],
    methods: ["GET","POST"],
    credentials: true,
}));

app.get('/', (req,res)=>{
    res.json({
        successful: true,
        data:[1,2,3],
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
