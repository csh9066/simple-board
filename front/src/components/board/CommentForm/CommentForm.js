import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd';
import MeContext from '../../../context/MeContext';
import { addCommentApi } from '../../../api/posts';

const CommentForm = ({ postId, fectchComments }) => {
	const [content, setContent] = useState('');
	const { me } = useContext(MeContext);

	const onChangeContent = (e) => {
		setContent(e.target.value);
	};

	const onFinishComment = async () => {
		try {
			if (!me) {
				return alert('로그인을 해주세요');
			}
			await addCommentApi(postId, { content });
			setContent((content) => '');
			await fectchComments();
			console.log('?');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Form className="comment-form" onFinish={onFinishComment}>
			<Form.Item>
				{me ? (
					<Input.TextArea
						rows={4}
						placeholder="댓글을 입력 해주세요"
						value={content}
						onChange={onChangeContent}
					/>
				) : (
					<Input.TextArea rows={4} placeholder="로그인을 해주세요" readOnly />
				)}
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" type="primary" disabled={!me}>
					등록
				</Button>
			</Form.Item>
		</Form>
	);
};
export default CommentForm;
