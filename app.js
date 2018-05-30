/**
 * Created by harsh.vashisht on 29/05/2018.
 */
/*jshint esversion: 6 */

const express = require('express');
const mysql = require('mysql');


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database :'nodemysql'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


const app = express();


app.get('/createdb', function (req, res)
{  sql= 'CREATE DATABASE nodemysql';
    db.query(sql,function (err, result){
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Database created');
    });
});

  app.get('/createtabledatabase', function (req, res)
    {
        sql = 'CREATE TABLE chatkit (id int AUTO_INCREMENT, tittle TEXT, firstname varchar(255), subject varchar(255), PRIMARY KEY(id))';
        db.query(sql,function (err, result){
            if(err)
            {
                throw err;
            }
            console.log(result);
            res.send('Table created');
        });
    });


app.get('/addatatomytable', function (req, res)
{
    sql = 'INSERT INTO chatkit (tittle, firstname) VALUES ("chatnode","harsh")  ';
    db.query(sql,function (err, result){
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send('Table created');
    });
});

app.get('/showresults', function (req, res)
{
    sql = 'SELECT * FROM nodemysql.chatkit  ';
    db.query(sql,function (err, result){
        if(err)
        {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

function startserver(){
    console.log('Server started on port 3000');
}

//create table

app.get('/createposttable', function (){

});

app.listen('3000', startserver());

