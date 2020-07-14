import React from 'react';
import { Form, Input, Button } from 'antd';

import './SignupForm.css';

const SignupForm = () => {
	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			className="signup-form"
		>
			<div className="ant-row">
				<h2 className="ant-col ant-col-8 ant-col-offset-10">회원 가입</h2>
			</div>
			<Form.Item label="id" name="id" required>
				<Input></Input>
			</Form.Item>
			<Form.Item label="password" name="password" required>
				<Input></Input>
			</Form.Item>
			<Form.Item label="passwordCheck" name="passwordCheck" required>
				<Input></Input>
			</Form.Item>
			<Form.Item label="nickname" name="nickname" required>
				<Input></Input>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 4, span: 14 }}>
				<Button type="primary" block>
					회원가입
				</Button>
			</Form.Item>
		</Form>
	);
};
export default SignupForm;
