const express = require('express');
const bcrypt = require('bcrypt');

const pool = require('../db/pool');

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const { id, password, nickname } = req.body;

		if (!id || !password || !nickname) {
			return res.status(400).json({
				message: '입력이 안된 값이 있습니다, 값을 입력 해주세요',
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

		res.status(201).json({
			message: '계정 생성 완료',
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
});

router.post('/login', async (req, res) => {
	try {
		const { id, password } = req.body;
		console.log(id, password);

		if (!id || !password) {
			return res.status(400).json({
				message: '입력이 안된 값이 있습니다, 값을 입력 해주세요',
			});
		}

		const [user] = await pool.query('select * from member where id = ?', id);

		if (!user[0]) {
			return res.status(401).json({
				message: '존재하지 않는 아이디입니다',
			});
		}
		const result = await bcrypt.compare(password, user[0].password);

		if (result) {
			req.session.userId = user[0].id;
			return res.status(200).json({
				message: '로그인 성공',
				payload: {
					id: user[0].id,
					nickname: user[0].nickname,
				},
			});
		}

		res.status(401).json({
			message: '비밀번호가 틀립니다',
		});
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.post('/logout', (req, res) => {
	req.session.destroy();
	res.json({
		message: '로그아웃 성공',
	});
});

module.exports = router;
