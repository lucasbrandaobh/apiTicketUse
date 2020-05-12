const ROOT_PATH = process.cwd();
const userModel = require(`${ROOT_PATH}/lib/users/users-model`);

const find = (query, callback) => {
  userModel.find(query, callback);
};

const findUser = (query, callback) => {
  userModel.findOne(query, callback);
};

module.exports = {
  find,
  findUser
};
