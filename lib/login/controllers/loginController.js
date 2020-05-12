const ROOT_PATH = process.cwd();
var jwt = require('jwt-simple');
var moment = require('moment');
var UserModel = require('../models/user');

module.exports = function(app) {  
  var controller = {};

  controller.login = function(request, response) { 
    var secret = '402030';     
    var username  = request.body.username || '';
    var password = request.body.password || '';
    
    if (username == '' || password == '') 
        return response.status(401).json({message: 'Erro: Usuario ou Senha Inválido'});

    UserModel.findOne({'email': username}, function (err, user) {
      if (err || !user) 
          return response.status(401).json({message: 'Erro: Usuario ou Senha Inválida'});

      user.verifyPassword(password, function(isMatch) {
        if (!isMatch) 
          return response.status(401).json({message: 'Erro: Usuario ou Senha Inválida'});
          
        var expires = moment().add(7,'days').valueOf();
        
        var token = jwt.encode({
          iss: user.id,
          exp: expires
        }, secret);        

        return response.status(200).json({
          token : token,
          expires: expires,
          user: user.toJSON()
        });
      });
    });
  };
  return controller;
};