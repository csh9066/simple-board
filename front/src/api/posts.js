import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://localhost:3065/posts',
	withCredentials: true,
});

export const addPostApi = async (data) => {
	const response = await axios.post('/', data);
	return response.data;
};

export const loadPostsApi = async () => {
	const response = await axios.get('/');
	return response.data;
};

export const loadPostApi = async (postId) => {
	const response = await axios.get(`/${postId}`);
	return response.data;
};

export const loadCommentsApi = async (postId) => {
	const response = await axios.get(`/${postId}/comments`);
	return response.data;
};

export const addCommentApi = async (postId, data) => {
	const response = await axios.post(`/${postId}/comment`, data);
	return response.data;
};
