exports.isLoggedIn = (req, res, next) => {
	if (!req.session.userId) {
		res.status(403).json({
			message: '접근 권한이 없습니다, 로그인 후 서비스를 이용해주세요',
		});
	} else {
		next();
	}
};
