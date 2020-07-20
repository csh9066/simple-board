import React from 'react';
import { Avatar, Layout } from 'antd';
import { MessageFilled, LikeFilled } from '@ant-design/icons';

import './Board.css';

const Board = () => {
	return (
		<Layout>
			<div className="board">
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
						<div className="sub-info flex--row">
							<div>
								<MessageFilled /> 3
							</div>
							<div>
								<LikeFilled /> 3
							</div>
						</div>
					</div>
				</header>
				<div className="board-content">컨텐츠</div>
			</div>
			<div>asdasd </div>
		</Layout>
	);
};
export default Board;
