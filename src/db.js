const mysql = require('mysql2');
require('dotenv').config();  // Load .env variables

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Hummerh2@akshay',
  database: 'dns_db'
}).promise();

// Test connection
pool.query('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

module.exports = pool;
