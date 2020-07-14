import React from 'react';
import { Layout, Divider } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<Layout.Header className="header">
			<div className="logo">
				<Link to="/">Simple Board</Link>
			</div>
			<div className="header-menu">
				<Link to="/login">로그인</Link>
				<Divider type="vertical" />
				<Link to="/signup">회원 가입</Link>
			</div>
		</Layout.Header>
	);
};
export default Header;
