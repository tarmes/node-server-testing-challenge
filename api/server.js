const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const housesRouter = require('./houses/houses-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/houses', housesRouter);

server.get("/", (req, res) => {
   res.json({ api: "up" });
});

module.exports = server;