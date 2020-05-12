const ROOT_PATH = process.cwd();
const logger = require('logger').createLogger();
const errorHandler = require('errorhandler');
const db = require(`${ROOT_PATH}/lib/commons/db`);
const validation = require(`${ROOT_PATH}/lib/validation`);
const USERS_COLLECTION_NAME = 'users';
const usersModel = {};

usersModel.insert = (model, callback) => {
  const result = validation.validate(model, 'user');
  if (result.valid) {
    const users = db.getCollection(USERS_COLLECTION_NAME);
    users.insert(model, (err, resultInsert) => {
      if (err) {
        logger.error(`Insert user error: ${err}`);
        return callback(err);
      }
      return callback(err, resultInsert.ops[0]);
    });
  } else {
    logger.error(`Operator is not valid: \n ${JSON.stringify(model)} - 
    ${validation.formatErrorMessage(result)}`);
    const error = errorHandler.error(1003, validation.formatErrorMessage(result), null);
    error.statusCode = 400;
    return callback(error);
  }
};

usersModel.findOne = (query, callback) => {
  const users = db.getCollection(USERS_COLLECTION_NAME);
  users.findOne(query, (err, result) => callback(err, result));
};

usersModel.find = (query, callback) => {
  const users = db.getCollection(USERS_COLLECTION_NAME);
  users.find(query).toArray((err, docs) => callback(err, docs));
};

module.exports = usersModel;
