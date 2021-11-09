const mysql = require("mysql2");
var { Sequelize, DataTypes } = require('sequelize');

// MySQL Connection...

const connection = new Sequelize('API-STUDENTS', 'root', 'mysqladmin', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }, 
    logging: console.log
  })
    
  connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  
  }).catch((err) => {
    console.log('Unable to connect to the database:', err.toString());
  })

  
const students = connection.define('students', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    student_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    exam_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    // Other model options go here
    tableName: "students",
    timestamps: false,

});

const courses = connection.define('courses', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
    tableName: "courses",
    timestamps: false
});

const exams = connection.define('exams', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    exam_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    tableName: "exams",
    timestamps: false
});

//students.hasOne(courses);

students.belongsTo(exams,{foreignKey: "exam_id"});
// exams.belongsTo(students);

students.belongsTo(courses,{foreignKey: "course_id"});
//courses.hasMany(students);


//connection.sync();
module.exports = {students, courses, exams};