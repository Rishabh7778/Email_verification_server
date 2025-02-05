const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const db = require('./libs/db');
const router = require('./routes/AuthROutes');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, 
}));

app.use(express.json());
app.use('/auth', router);

app.listen(8000, ()=> {
    console.log("server is started")
})