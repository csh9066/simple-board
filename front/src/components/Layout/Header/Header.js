import React, { useContext } from 'react';
import { Layout, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';
import MeContext from '../../../context/MeContext';
import { logoutApi } from '../../../api/members';

const Header = () => {
	const { me, setMe } = useContext(MeContext);

	const onClickLogout = async () => {
		await logoutApi();
		setMe(null);
	};

	return (
		<Layout.Header className="header">
			<div className="logo">
				<Link to="/">Simple Board</Link>
			</div>
			<div className="header-menu">
				{me ? (
					<>
						<Button type="primary">
							<Link to="/write">글쓰기</Link>
						</Button>
						<Divider type="vertical" />
						<Button onClick={onClickLogout}>로그 아웃</Button>
					</>
				) : (
					<>
						<Link to="/login">로그인</Link>
						<Divider type="vertical" />
						<Link to="/signup">회원 가입</Link>
					</>
				)}
			</div>
		</Layout.Header>
	);
};
export default Header;
