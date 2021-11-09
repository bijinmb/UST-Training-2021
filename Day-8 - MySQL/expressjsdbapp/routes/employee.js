var mysql = require('mysql');
var express = require('express');


var router = express.Router();
//Configuring express server for json response
router.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'mysqladmin',
    database: 'UST',
    multipleStatements: true,
    insecureAuth : true
 });


connection.connect((err) => {
    if(!err)
        console.log('MySQL Connection - Successful.');
    else
        console.log('MySQL Connection - Failed!' + JSON.stringify(err,undefined,2));    
})

/* Router to get all employee details. */
router.get('/', (req, res) => {
    connection.query('select * from employee', (err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
  });

  //Router to GET specific employee detail from the MySQL database with employee id.
router.get('/:id' , (req, res) => {
    connection.query('SELECT * from employee WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
    })
});

module.exports = router;
