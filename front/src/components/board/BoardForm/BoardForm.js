import React from 'react';
import { Form, Input, Button } from 'antd';

import './BoardForm.css';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 },
};

const tailLayout = {
	wrapperCol: { offset: 4, span: 14 },
};

const BoardForm = () => {
	return (
		<Form {...layout} className="board-form">
			<div className="ant-row">
				<h2 className="ant-col ant-col-8 ant-col-offset-10">글쓰기</h2>
			</div>
			<Form.Item label="제목">
				<Input />
			</Form.Item>
			<Form.Item label="본문">
				<Input.TextArea rows="20" />
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit" style={{ float: 'right' }}>
					등록
				</Button>
			</Form.Item>
		</Form>
	);
};
export default BoardForm;
