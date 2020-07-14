const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('first');
});

app.listen(3065, () => {
	console.log('http://localhost:3065');
});
