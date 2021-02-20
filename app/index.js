const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/', (req, res) => {
    const con = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM my_app.people", function (err, result, fields) {
            if (err) throw err;

            const people = result.map(({name})=>name).join(",");
            res.send( `<h1>Full Cycle Rocks!</h1>${people}` );
        });
    });
  
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Running http://localhost:3000`)
})



