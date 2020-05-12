const ROOT_PATH = process.cwd();
const usersModel = require(`${ROOT_PATH}/lib/users/users-model`);

const buildUsers = (body) => {
  const user = {
    name: body.name,
    email: body.email,
    cardId: body.cardId,
    password: body.password
  };
  return user;
};

const createUsers = (body, callback) => {
  const user = buildUsers(body);
  usersModel.insert(user, callback);
};

module.exports = {
  createUsers
};
