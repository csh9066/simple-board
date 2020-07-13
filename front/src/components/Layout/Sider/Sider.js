import React from 'react';
import { Layout, Menu } from 'antd';

import './Sider.css';

const Sider = () => {
	return (
		<Layout.Sider className="sider">
			<Menu>
				<Menu.Item>메뉴1</Menu.Item>
				<Menu.Item>메뉴1</Menu.Item>
				<Menu.Item>메뉴1</Menu.Item>
				<Menu.Item>메뉴1</Menu.Item>
				<Menu.Item>메뉴1</Menu.Item>
			</Menu>
		</Layout.Sider>
	);
};

export default Sider;
