import React from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment';

const Comments = ({ comments }) => {
	return (
		<>
			{comments.map((comment) => {
				return (
					<Comment
						key={comment.id}
						author={comment.nickname}
						avatar={<Avatar icon={<UserOutlined />} />}
						content={<p>{comment.content}</p>}
						datetime={
							<Tooltip
								title={moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}
							>
								<span>{moment(comment.createdAt).fromNow()}</span>
							</Tooltip>
						}
					/>
				);
			})}
		</>
	);
};
export default Comments;
