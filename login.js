const express = require('express');
const mysql=require('mysql');


const app=express();

const db=mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'Fatoh@360Nasr',
  database:'acme'
});
db.connect();
app.get('/users',(req,res) =>{
  const sql= 'SELECT * FROM users WHERE age=25';
  db.query(sql,(err, result)=>{
    if(err) throw err;
    res.send(result);
  })
});


app.listen(3000);
