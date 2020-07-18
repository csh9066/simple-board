const mysql = require('mysql2/promise');
const config = require('./config')['development'];

const pool = mysql.createPool({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database,
	connectionLimit: 10,
});

module.exports = pool;
