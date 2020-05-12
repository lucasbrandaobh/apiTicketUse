const ROOT_PATH = process.cwd();
const logger = require('logger').createLogger();
const userServices = require(`${ROOT_PATH}/lib/users/services`);

module.exports = (req, res) => {
  const newBody = req.body;

  userServices.createUser(newBody, (err, user) => {
    if (err) {
      logger.error('Error creating user at post users. Err:', err);
      if (err.statusCode) {
        return res.status(err.statusCode).send(err);
      }
      return res.status(500).end();
    }
    return res.status(201).send(user);
  });
};