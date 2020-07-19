import React from 'react';
import { Table } from 'antd';

import { Link } from 'react-router-dom';

const columns = [
	{
		title: '번호',
		dataIndex: 'id',
	},
	{
		title: '제목',
		dataIndex: 'title',
		render: (text) => <Link to={text}>{text}</Link>,
	},
	{
		title: '글쓴이',
		dataIndex: 'nickname',
	},
	{
		title: '등록일',
		dataIndex: 'createdAt',
	},
	{
		title: '댓글',
		dataIndex: 'comments',
	},
	{
		title: '추천',
		dataIndex: 'like',
	},
];

const data = Array(30)
	.fill(null)
	.map((_, i) => {
		return {
			key: i,
			id: i,
			title: `김장김치 좋아하나요${i}`,
			nickname: `kimchi${i}`,
			createdAt: '07-19',
			comments: 0,
			like: 0,
		};
	});

const BoardList = () => {
	return (
		<>
			<Table columns={columns} dataSource={data}></Table>
		</>
	);
};
export default BoardList;
