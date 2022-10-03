const express = require('express');

const feedbackController = require('./controllers/feedbackController')

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/feedback', feedbackController);

app.listen(
    PORT,
    () => console.log(`Running...`)
)