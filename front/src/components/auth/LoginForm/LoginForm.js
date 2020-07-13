import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import './LoginForm.css';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 20 },
};
const tailLayout = {
	wrapperCol: { span: 24 },
};

const LoginForm = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	const onChangeId = (e) => {
		setId(e.target.Value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="login-form-wrapper">
			<div className="login-form__logo">로그인</div>
			<Form {...layout}>
				<Form.Item
					label="Id"
					name="id"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input value={id} onChange={onChangeId} />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input.Password value={password} onChange={onChangePassword} />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button block type="primary" htmlType="submit">
						로그인
					</Button>
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button block>회원 가입</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default LoginForm;
