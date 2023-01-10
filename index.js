const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

const { connectDb } = require('./app/services/connect');


const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

connectDb();

app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
