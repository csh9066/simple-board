const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const dbConfig = require('../config/db')['development'];

const router = express.Router();

router.post('/', async (req, res, next) => {
	let con;
	try {
		con = await mysql.createConnection({
			host: dbConfig.host,
			user: dbConfig.username,
			password: dbConfig.password,
			database: dbConfig.database,
		});

		const { id, password, nickname } = req.body;

		console.log(id, password, nickname);

		if (!id || !password || !nickname) {
			return res.status(400).json({
				message: '잘못된 파라미터',
			});
		}

		const existUser = await con.query('select * from member where id = ?', id);
		if (existUser[0][0]) {
			return res.status(401).json({
				message: '이미 사용중인 아이디입니다.',
			});
		}

		const hashPassword = await bcrypt.hash(password, 12);

		const result = await con.query(
			`insert into member values('${id}','${hashPassword}','${nickname}',now())`
		);

		console.log(result[0]);
		res.status(201).json({
			message: 'created',
		});
	} catch (e) {
		console.error(e);
		next(e);
	} finally {
		if (con) {
			con.end();
		}
	}
});

router.post('/login', (req, res) => {});

router.post('/logout', (req, res) => {});

module.exports = router;
