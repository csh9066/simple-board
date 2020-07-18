const express = require('express');
const bcrypt = require('bcrypt');

const pool = require('../db/pool');

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const { id, password, nickname } = req.body;

		console.log(id, password, nickname);

		if (!id || !password || !nickname) {
			return res.status(400).json({
				message: '잘못된 파라미터',
			});
		}

		const [existUser] = await pool.query(
			'select * from member where id = ?',
			id
		);
		if (existUser[0]) {
			return res.status(401).json({
				message: '이미 사용중인 아이디입니다.',
			});
		}

		const hashPassword = await bcrypt.hash(password, 12);

		const [insertedUser] = await pool.query(
			`insert into member values('${id}','${hashPassword}','${nickname}',now())`
		);

		console.log(insertedUser);
		res.status(201).json({
			message: 'created',
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
});

router.get('/login', (req, res) => {});

router.get('/logout', (req, res) => {});

module.exports = router;
