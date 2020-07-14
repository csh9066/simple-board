const express = require('express');
const logger = require('morgan');

const app = express();

const memberRouter = require('./routes/memberRouter');

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('first');
});

app.use('/member', memberRouter);

app.listen(3065, () => {
	console.log('http://localhost:3065');
});
