const ROOT_PATH = process.cwd();
const findUserServices = require(`${ROOT_PATH}/lib/users/services/find-user`);
const createUserServices = require(`${ROOT_PATH}/lib/users/services/create-user`);

module.exports = {
  find: findUserServices.find,
  findUser: findUserServices.findUser,
  createUser: createUserServices.createUser
};
