const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tienda',
    password: 'root'
});

module.exports = conn;