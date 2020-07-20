import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Form, Input, Button } from 'antd';

import './SignupForm.css';

const signupInfoinitialState = {
	id: '',
	password: '',
	passwordCheck: '',
	nickname: '',
	errorMesage: '',
};

const requestInitialState = {
	loading: false,
	error: null,
	success: null,
};

const SignupForm = ({ history }) => {
	const [formInfo, setFormInfo] = useState(signupInfoinitialState);
	const [requestInfo, setRequestInfo] = useState(requestInitialState);

	const { id, password, passwordCheck, nickname, errorMesage } = formInfo;
	const { error, success, loading } = requestInfo;

	const requestSignup = async () => {
		try {
			setRequestInfo({
				loading: true,
				success: null,
				error: null,
			});
			const signupData = { id, password, nickname };
			const response = await axios.post(
				'http://localhost:3065/member',
				signupData
			);
			setRequestInfo((state) => ({
				...state,
				loading: false,
				success: response,
			}));
		} catch (e) {
			setRequestInfo((state) => ({
				...state,
				loading: false,
				error: e,
			}));
		}
	};

	useEffect(() => {
		if (success) {
			history.push('/');
		}
		if (error) {
			if (error.response.status === 400) {
				setFormInfo({
					...formInfo,
					errorMesage: '새로고침 후 다시 시도 해보세요',
				});
			} else if (error.response.status === 401) {
				setFormInfo({
					...formInfo,
					errorMesage: '이미 존재하는 아이디 입니다.',
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestInfo]);

	const onChangeSignupInfo = (e) => {
		setFormInfo({
			...formInfo,
			errorMesage: '',
			[e.target.id]: e.target.value,
		});
	};

	const onFinsihSignupInfo = () => {
		if (id.length < 4) {
			setFormInfo({
				...formInfo,
				errorMesage: '아이디를 4글자 이상으로 해주세요',
			});
		} else if (password.length < 6) {
			setFormInfo({
				...formInfo,
				errorMesage: '비밀번호를 6글자 이상으로 해주세요',
			});
		} else if (password !== passwordCheck) {
			setFormInfo({
				...formInfo,
				errorMesage: '비밀번호를 확인해주세요',
			});
		} else if (!nickname) {
			setFormInfo({
				...formInfo,
				errorMesage: '닉네임을 입력해주세요',
			});
		} else {
			requestSignup();
		}
	};

	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			className="signup-form"
			onFinish={onFinsihSignupInfo}
		>
			<div className="ant-row">
				<h2 className="ant-col ant-col-8 ant-col-offset-10">회원 가입</h2>
			</div>
			<Form.Item label="id" name="id" required>
				<Input value={id} onChange={onChangeSignupInfo}></Input>
			</Form.Item>
			<Form.Item label="password" name="password" required>
				<Input.Password
					value={password}
					onChange={onChangeSignupInfo}
				></Input.Password>
			</Form.Item>
			<Form.Item label="passwordCheck" name="passwordCheck" required>
				<Input.Password
					value={passwordCheck}
					onChange={onChangeSignupInfo}
				></Input.Password>
			</Form.Item>
			<Form.Item label="nickname" name="nickname" required>
				<Input value={nickname} onChange={onChangeSignupInfo}></Input>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 4, span: 14 }}>
				<Button type="primary" block htmlType="submit" loading={loading}>
					회원가입
				</Button>
			</Form.Item>
			<div className="ant-row">
				<div className="ant-col ant-col-14 ant-col-offset-4 error-message">
					{errorMesage}
				</div>
			</div>
		</Form>
	);
};
export default SignupForm;
