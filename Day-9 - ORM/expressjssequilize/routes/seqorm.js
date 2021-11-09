
var express = require('express');
var { Sequelize, DataTypes } = require('sequelize');



var router = express.Router();
//Configuring express server for json response
router.use(express.json());

/*const connection = new Sequelize('UST', 'root', 'mysqladmin', {
   host: 'localhost',
   dialect: 'mysql' 
 });
 */

const connection = new Sequelize('UST', 'root', 'mysqladmin', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');

}).catch((err) => {
  console.log('Unable to connect to the database:', err.toString());
})

const Employee = connection.define('Employee', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  emp_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  designation: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  salary: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  city: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: "employee",
  timestamps: false
});


// `sequelize.define` also returns the model
console.log(Employee === connection.models.Employee); // true


/* Router to get all employee details. */
router.get('/', (req, res) => {
  connection.query("SELECT * FROM employee", { type: Employee.sequelize.QueryTypes.SELECT }).then((results, metadata) => {
    res.send(results);
  }).catch((err) => {
    console.log('Query Failed.');
  })

});


/* Router to get specific employee detail from the MySQL database with employee id. 
router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM employee WHERE id = ${req.params.id}`, { type: Employee.sequelize.QueryTypes.SELECT }).then((results, metadata) => {
    res.send(results);
  }).catch((err) => {
    console.log('Query Failed.');
  })

});
*/

/* Router to ADD an employee details to the Employee Table in the MySQL database. */
router.get('/add', async (req, res) => {

  const emp = await Employee.create({

    emp_name: "Rahul",
    designation: "Architect",
    salary: "90",
    city: "Banglore"
  })

  console.log("Added Employee", emp.id);
  res.send({ "Added Employee": emp.id })
});

/* Router to DELETE an employee details to the Employee Table in the MySQL database. */
router.get('/delete', async (req, res) => {

  const emp = await Employee.destroy({

    where: { id: "12" }
  })

  console.log("Deleted Employee");
  res.send({ "Deleted Employee": emp.id })
});

/* Router to UPDATE an employee details to the Employee Table in the MySQL database. */
router.get('/update', async (req, res) => {

  const emp = await Employee.update(
    { emp_name: "Kiran" },
    { where: { id: "15" } }
  )

  console.log("Updated Employee", emp.toString());
  res.send({ "Updated Employee": emp.toString() })
});

/* Router to LIST an employee details to the Employee Table in the MySQL database. */
router.get('/list', async (req, res) => {

  const emp = await Employee.findAll()

  //console.log(emp.every(emp => emp instanceof Employee)); // true
  console.log("All Employee(s):", JSON.stringify(emp, null, 2));

  res.send({"All Employee(s)": emp}); // true
  
  
});


/*
router.get('/add', (req, res) => {
  // Create a new user
  Employee.create({ emp_name: "Roy", designation: "Software Engineer", salary: "90", city: "Cochin" }).then((emp_rec) => {
    console.log("Jane's Auto generated ID:", emp_rec.id);
    res.send({ "ID": emp_rec.id })
  }).catch((err) => {
    console.log(err);
    res.send("Insert Failed" + err.toString())
  })
});
*/





module.exports = router;
