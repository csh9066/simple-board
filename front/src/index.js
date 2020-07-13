import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/Layout/';

ReactDOM.render(
	<BrowserRouter>
		<AppLayout />
	</BrowserRouter>,
	document.getElementById('root')
);
