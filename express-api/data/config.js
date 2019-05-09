const mysql = require('mysql');
// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'api',
};

// Create a MySQL pool
const pool = mysql.createPool(config);
module.exports = pool;