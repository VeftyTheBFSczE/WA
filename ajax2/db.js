const mysql = require('mysql2');
const config = require('./config.js');

// Create connection
const conn = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.pass,
  database: config.db
});

// Check connection
conn.connect((err) => {
  if (err) {
    console.error("Connection failed: " + err.message);
    process.exit(1);
  }
  
  // console.log("Connected successfully");
});

