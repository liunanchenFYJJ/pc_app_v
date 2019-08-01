// import mysql from 'mysql';
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cln314214@',
    database: 'mysql',
});

connection.connect();

connection.query('select * from user',function(error, results, fields){
    if(error) throw error;
    console.log("这是结果:"+JSON.stringify(results))
});

connection.end();
