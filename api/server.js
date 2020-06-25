const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/authRouter');
const userRouter = require('../users/userRouter');
// const strainsRouter

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
// server.use('/api/strains', authenticate, strainRouter);

module.exports = server;