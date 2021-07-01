// importing packages
const express = require('express');
const cors = require('cors');
const app = express();
const todosRoute = require('./API/routes');

app.use(cors());

app.use(express.json());

app.use('/todos', todosRoute);

app.listen(8000, console.log('App is running on port 8000'));
