'use strict';
var serviceUser = require('../services/usersService')();
var jwt = require('jwt-simple');

module.exports = function(request, response, next) {
  var secret = '402030';
  var token = request.headers['x-access-token'];

  if (token) {
    try {
      var decoded = jwt.decode(token, secret);
     
      if (decoded.exp <= Date.now()) 
        response.json(400, {error: 'Acesso Expirado, faça login novamente'});

      serviceUser.getById(decoded.iss).then( 
          function(user) {
            if(!user)
              return response.status(500).json({error:'Erro ao procurar usuario do token.'});

            request.user = user;
            return next();
          },function(err){
              response.status(500).json({error:'Erro: token inválido.'});
          }
      );    
    } catch (err) {
      return response.status(401).json({error: 'Erro: token inválido'});
    }
  } else {
    response.status(401).json({error:'Token não encontrado'})
  }
};