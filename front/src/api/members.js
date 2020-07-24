import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://localhost:3065/members/',
	withCredentials: true,
});

export const requestLogin = async (data) => {
	const resopnse = await axios.post('/login', data);
	return resopnse.data;
};

export const requestLogout = async () => {
	const response = await axios.post('/logout');
	return response.data;
};
