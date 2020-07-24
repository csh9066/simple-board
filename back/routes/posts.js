const express = require('express');

const pool = require('../db/pool');
const { isLoggedIn } = require('../routes/middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
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

router.get('/', async (req, res, next) => {
	try {
		const [row] = await pool.query(`
		select id,title,content,created_at,member_id,
			(select count(id) from board_comment where board_id = board.id ) as commentCount,
			(select count(id) from board_like where board_id = board.id) as like_count 
		from board 
		order by created_at desc;
		`);
		console.log(row);
		res.json({ payload: row });
	} catch (e) {}
});

module.exports = router;
