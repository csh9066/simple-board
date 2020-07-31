import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { LikeFilled, CommentOutlined } from '@ant-design/icons';

import './Board.css';
import { loadPostApi, loadCommentsApi } from '../../../api/posts';
import Comments from '../Comments/Comments';
import CommentForm from '../CommentForm';

const Board = ({ match }) => {
	const { id: postId } = match.params;
	const [board, setBoard] = useState({
		id: '',
		title: '',
		content: '',
		nickname: '',
		createdAt: '',
		commentsLength: '',
		commentInfo: null,
	});

	const { title, content, nickname, createdAt, commentInfo } = board;

	const fectchComments = async () => {
		const { payload } = await loadCommentsApi(postId);
		setBoard((board) => {
			return {
				...board,
				commentInfo: payload,
			};
		});
	};

	const fetchBoard = async () => {
		const { payload } = await loadPostApi(postId);
		setBoard((board) => {
			return {
				...board,
				id: payload.id,
				title: payload.title,
				content: payload.content,
				nickname: payload.nickname,
				commentsLength: payload.comments_length,
				createdAt: payload.created_at,
			};
		});
	};

	useEffect(() => {
		fetchBoard();
		fectchComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="board">
			<div className="board-contents">
				<header className="board__header">
					<h1 className="board__header-title">{title}</h1>
					<div className="board__header-info">
						<div className="flex--row">
							<Avatar
								style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
								size="large"
							>
								{nickname}
							</Avatar>
							<div className="write-info">
								<div className="wirte-info__nickname">{nickname}</div>
								<div>{createdAt}</div>
							</div>
						</div>
						<div className="board-like">
							<LikeFilled className="board-like-button--active" />
							<span className="board-like-counts">3</span>
						</div>
					</div>
				</header>
				<div className="board-content">{content}</div>
			</div>
			<div className="board-comments">
				<h2 className="board-comments-title">
					<CommentOutlined className="comment-icon" />
					댓글 {commentInfo && commentInfo.length}
				</h2>
				{commentInfo && (
					<Comments
						comments={commentInfo.comments}
						fectchComments={fectchComments}
					/>
				)}
				<CommentForm postId={postId} fectchComments={fectchComments} />
			</div>
		</div>
	);
};
export default Board;
