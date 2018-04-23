const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const postController = require('./controllers/posts')
const logger = require('morgan')
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', postController)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
  res.redirect('/posts');
});

app.post('/', (req, res, next) => {
  res.redirect('/posts');
});
