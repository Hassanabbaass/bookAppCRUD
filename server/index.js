const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PFH#23kqwr9",
    database: "bookapp"
})

app.listen(8800, ()=>{
    console.log("Server Is Running")
})