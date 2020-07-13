import React from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './AppLayout.css';
import Header from './Header';
import Sider from './Sider';
import Content from './Content/';

const AppLayout = () => {
	return (
		<Layout>
			<Header />
			<Layout className="app-layout">
				<Sider />
				<Content />
			</Layout>
		</Layout>
	);
};
export default AppLayout;
