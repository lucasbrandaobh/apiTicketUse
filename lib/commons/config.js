const nconf = require('nconf');

nconf.argv()
  .env()
  .file('conf/apiticketuser.json')
  .defaults({
    CONSUMER_CLIENT_MSG_INVALID_MOBILE: 'O número de celular passado é inválido',
    CONSUMER_CLIENT_MSG_CONSUMER_CREATE_ERROR: 'Erro ao criar o consumidor na base de dados',
    CONSUMER_HOURS_TO_CHECK_PORTABILITY: '24',
    CONSUMER_PAGE_LIMIT: '10',
    CONSUMER_CLIENT_MSG_GET_CONSUMER_ERROR: 'Erro ao recuperar o consumidor'
  });

module.exports = nconf;
