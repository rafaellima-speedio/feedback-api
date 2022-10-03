require('dotenv/config');
const express = require('express');

const feedbackController = require('./controllers/feedbackController')

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());

app.use('/v1/feedbacks', feedbackController);

app.listen(
    PORT,
    () => console.log(`Running - http://localhost:${PORT}/`)
)