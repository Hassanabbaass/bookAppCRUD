const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PFH#23kgrw9",
    database: "bookapp"
})

app.get("/", (req,res) => {
    res.json("Hello, This is the backend")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err,data)=> {
        if (err) return res.json(err)
        return res.json(data)
    })
})



app.listen(8800, ()=>{
    console.log("Server Is Running")
})