import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';

import './BoardForm.css';
import { addPostApi } from '../../../api/posts';
import MeContext from '../../../context/MeContext';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 14 },
};

const tailLayout = {
	wrapperCol: { offset: 4, span: 14 },
};

const BoardForm = ({ history }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { me } = useContext(MeContext);

	const onFinishBoardForm = async () => {
		try {
			await addPostApi({ title, content });

			history.push('/');
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	const onChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const onChangeContent = (e) => {
		setContent(e.target.value);
	};

	if (!me) {
		return <div>권한이 없습니다 로그인을 해주세요</div>;
	}
	return (
		<Form {...layout} className="board-form" onFinish={onFinishBoardForm}>
			<div className="ant-row">
				<h2 className="ant-col ant-col-8 ant-col-offset-10">글쓰기</h2>
			</div>
			<Form.Item label="제목">
				<Input value={title} onChange={onChangeTitle} />
			</Form.Item>
			<Form.Item label="본문">
				<Input.TextArea rows="20" value={content} onChange={onChangeContent} />
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
