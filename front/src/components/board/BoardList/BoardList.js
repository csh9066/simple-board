import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import { Link } from 'react-router-dom';
import { loadPostsApi } from '../../../api/posts';

const columns = [
	{
		title: '번호',
		dataIndex: 'key',
	},
	{
		title: '제목',
		dataIndex: 'title',
		render: (text, record) => <Link to={`/board/${record.key}`}>{text}</Link>,
	},
	{
		title: '글쓴이',
		dataIndex: 'nickname',
	},
	{
		title: '등록일',
		dataIndex: 'created_at',
	},
	{
		title: '댓글',
		dataIndex: 'comment_count',
	},
	{
		title: '추천',
		dataIndex: 'like_count',
	},
];

const BoardList = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const posts = await loadPostsApi();
			setData(posts.payload);
		};
		fetchData();
	}, []);

	return (
		<>
			<Table columns={columns} dataSource={data}></Table>
		</>
	);
};
export default BoardList;
