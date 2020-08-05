const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();

const indexDb = require('./routes/db');
const donateRouter = require('./routes/post_donate');
const streamerRouter = require('./routes/streamer');
const usersRouter = require('./routes/streamers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', donateRouter);
app.use('/', streamerRouter);
app.use('/', usersRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

module.exports = app;