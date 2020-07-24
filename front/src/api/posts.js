import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://localhost:3065/posts',
	withCredentials: true,
});

export const addPostApi = async (data) => {
	const response = await axios.post('/', data);
	return response.data;
};
