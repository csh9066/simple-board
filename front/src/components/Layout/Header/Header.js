import React from 'react';
import { Button, Layout } from 'antd';

import './Header.css';

const Header = () => {
	return (
		<Layout.Header className="header">
			<div className="logo">Simpe Board</div>
			<div className="align-center">
				<Button>로그인</Button>
			</div>
		</Layout.Header>
	);
};
export default Header;
