const ROOT_PATH = process.cwd();
const logger = require('logger').createLogger();
const usersServices = require(`${ROOT_PATH}/lib/users/services`);

module.exports = (req, res) => {
  usersServices.find({}, (err, users) => {
    if (err) {
      logger.error('Error on GET /users', err);
      return res.status(500).end();
    }
    if (!users.length) {
      logger.error('Query not found on GET /users');
      return res.status(404).end();
    }
    res.status(200).send(users);
  });
};
