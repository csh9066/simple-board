const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');

const app = express();

const memberRouter = require('./routes/memberRouter');

app.use(logger('dev'));
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: false,
		},
	})
);

app.get('/', (req, res) => {
	res.send('first');
});

app.use('/member', memberRouter);

app.listen(3065, () => {
	console.log('http://localhost:3065');
});
