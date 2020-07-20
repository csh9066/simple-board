import React from 'react';
import { Avatar, Comment, Tooltip, Form, Input, Button } from 'antd';
import { LikeFilled, UserOutlined, CommentOutlined } from '@ant-design/icons';
import moment from 'moment';

import './Board.css';

const Board = () => {
	return (
		<div className="board">
			<div className="board-contents">
				<header className="board__header">
					<h1 className="board__header-title">영어 문법 노베이스 인강</h1>
					<div className="board__header-info">
						<div className="flex--row">
							<Avatar
								style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
								size="large"
							>
								kim
							</Avatar>
							<div className="write-info">
								<div className="wirte-info__nickname">nick</div>
								<div>2020.03.23</div>
							</div>
						</div>
						<div className="board-like">
							<LikeFilled className="board-like-button--active" />
							<span className="board-like-counts">3</span>
						</div>
					</div>
				</header>
				<div className="board-content"></div>
			</div>
			<div className="board-comments">
				<h2 className="board-comments-title">
					<CommentOutlined className="comment-icon" />
					댓글 13
				</h2>
				<Comment
					author="kim"
					avatar={<Avatar icon={<UserOutlined />}>Kim</Avatar>}
					content={<p>asdasdasdsad</p>}
					datetime={
						<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
							<span>{moment().fromNow()}</span>
						</Tooltip>
					}
				/>
				<Comment
					author="hoong"
					avatar={<Avatar icon={<UserOutlined />}>Kim</Avatar>}
					content={<p>asdasdasdsad</p>}
					datetime={
						<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
							<span>{moment().fromNow()}</span>
						</Tooltip>
					}
				/>
				<Form className="comment-form">
					<Form.Item>
						<Input.TextArea rows={4} placeholder="로그인을 해주세요" readOnly />
					</Form.Item>
					<Form.Item>
						<Button htmlType="submit" type="primary">
							등록
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
export default Board;
