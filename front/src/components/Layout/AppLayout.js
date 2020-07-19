import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './AppLayout.css';
import Header from './Header';
import Content from './Content/';

import LoginPage from '../../pages/LoginPage';
import IndexPage from '../../pages/IndexPage';
import SignupPage from '../../pages/SignupPage';

import { MeProvider } from '../../context/MeContext';

const AppLayout = () => {
	return (
		<MeProvider>
			<Layout className="app-layout">
				<Header />
				<Content>
					<Route exact path="/" component={IndexPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
				</Content>
			</Layout>
		</MeProvider>
	);
};
export default AppLayout;
