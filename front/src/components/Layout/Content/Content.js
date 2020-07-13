import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import './Content.css';

const Content = ({ children }) => {
	return (
		<Layout className="content-layout">
			<Breadcrumb className="breadcrumb">
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
			</Breadcrumb>
			<Layout.Content className="content">{children}</Layout.Content>
		</Layout>
	);
};
export default Content;
