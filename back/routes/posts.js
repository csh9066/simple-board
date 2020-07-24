const express = require('express');

const pool = require('../db/pool');

const router = express.Router();

router.use((req, res, next) => {
	console.log(req.session.userId);
	if (!req.session.userId) {
		res.status(403).json({
			message: '접근 권한이 없습니다, 로그인 후 서비스를 이용해주세요',
		});
	} else {
		next();
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { title, content } = req.body;
		const { userId } = req.session;

		if (!title || !content) {
			res.status(400).json({
				message: '잘못된 요청입니다, 값을 입력 해주세요',
			});
		}

		await pool.query(
			`insert into 
      board(title, content, created_at, member_id) 
      values(?, ? ,now(), ?)`,
			[title, content, userId]
		);

		res.json({
			message: '포스트 생성 완료',
		});
	} catch (e) {
		console.error(e);
	}
});

module.exports = router;
