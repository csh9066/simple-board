import React from 'react';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<Layout.Header className="header">
			<div className="logo">
				<Link to="/">Simple Board</Link>
			</div>
			<div className="align-center">
				<Button>
					<Link to="login">로그인</Link>
				</Button>
			</div>
		</Layout.Header>
	);
};
export default Header;
