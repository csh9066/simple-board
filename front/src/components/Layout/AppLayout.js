import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './AppLayout.css';
import Header from './Header';
import Sider from './Sider';
import Content from './Content/';

import LoginPage from '../../pages/LoginPage';
import IndexPage from '../../pages/IndexPage';

const AppLayout = () => {
	return (
		<Layout className="app-layout">
			<Header />
			<Layout>
				<Sider />
				<Content>
					<Route exact path="/" component={IndexPage} />
					<Route path="/login" component={LoginPage} />
				</Content>
			</Layout>
		</Layout>
	);
};
export default AppLayout;
