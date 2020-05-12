const ROOT_PATH = process.cwd();
const config = require(`${ROOT_PATH}/lib/commons/config`);
const db = require(`${ROOT_PATH}/lib/commons/db`);

before((done) => {
  db.connect(config.get('MONGO_URL_TEST'), () => {});
});

after((done) => {
  db.dropCollections('users', 'debits',
    () => {
      db.close(done);
    });
});
