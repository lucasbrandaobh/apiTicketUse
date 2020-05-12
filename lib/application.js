const ROOT_PATH = process.cwd();
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const compress = require('compression');
const errorHandler = require('errorhandler');
const usersRoutes = require(`${ROOT_PATH}/lib/users/users-router`);
const debitsRoutes = require(`${ROOT_PATH}/lib/debits/debits-router`);
const loginRoutes = require(`${ROOT_PATH}/lib/login/login-router`);
const source = require(`${ROOT_PATH}/package.json`).name;
const app = express();

const paramsErrorHandler = {
    source
  };

errorHandler.config(paramsErrorHandler, (err) => {
  app.set('json spaces', 2);
  app.use(cors());

  app.use(parser.urlencoded({
    extended: true
  }));
  app.use(parser.json());
  app.use(compress());
  app.use(usersRoutes);
  app.use(debitsRoutes);
  app.use(loginRoutes);
});

module.exports = app;