import React, { useState, useContext, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import { requestLogin } from '../../../api/member';
import './LoginForm.css';
import MeContext from '../../../context/MeContext';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 },
};
const tailLayout = {
	wrapperCol: { offset: 4, span: 14 },
};

const LoginForm = ({ history }) => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const { me, setMe } = useContext(MeContext);

	useEffect(() => {
		if (me) {
			history.push('/');
		}
	}, [me, history]);

	const onChangeId = (e) => {
		setId(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onFinshLoginForm = async () => {
		try {
			const { payload } = await requestLogin({ id, password });
			console.log(payload);
			setMe({
				id: payload.id,
				nickname: payload.nickname,
			});
		} catch (e) {
			console.log(e.response.data);
		}
	};

	return (
		<Form {...layout} className="login-form" onFinish={onFinshLoginForm}>
			<div className="ant-row">
				<h2 className="ant-col ant-col-8 ant-col-offset-10">로그인</h2>
			</div>
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
				<Button block>
					<Link to="/signup">회원 가입</Link>
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
