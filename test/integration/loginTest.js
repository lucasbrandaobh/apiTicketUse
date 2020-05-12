// 'use strict';
// const ROOT_PATH = process.cwd();
// var assert = require('chai').assert;
// var request = require('request');
// var server = require(`${ROOT_PATH}/server.js`);
// var serviceUser = require(`${ROOT_PATH}/app/services/usersService`)();

// describe('Testes Login', function () {
//     var newUser = { name: 'Antonio Marin', email: 'antonio@gmail.com', cardId: '1019999', password: '123456'};    

//     before(function () {  
//         serviceUser.post(newUser);    
//     });

//     after(function () {
//         serviceUser.remove(newUser.cardId);
//     });

//     describe('O usuario acessa a rota post/login', function () {
//         it('Deve retornar status code 200 ao tentar fazer o login com um usuario existente', function (done) {
//             request.post({
//                 url: 'http://localhost:3000/login',
//                 json: true,
//                 body: {'username' : newUser.email, 'password' : newUser.password}
//             }, 
//             function (err, response, body) {
//                 assert.isNull(err);
//                 assert.isNotNull(body.token);
//                 assert.equal(response.statusCode, 200);
//                 done();
//             });
//         });

//         it('Deve retornar status code 401 ao tentar fazer o login com um usuario inválido', function (done) {
//             request.post({
//                 url: 'http://localhost:3000/login',
//                 json: true,
//                 body: {'username' : 'invalido@gmail.com', 'password' : '3456'}
//             }, 
//             function (err, response, body) {
//                 assert.isUndefined(body.token);
//                 assert.equal(response.statusCode, 401);
//                 done();
//             });
//         });

//         it('Deve retornar status code 401 ao tentar fazer o login com uma senha inválida', function (done) {
//             request.post({
//                 url: 'http://localhost:3000/login',
//                 json: true,
//                 body: {'username' : newUser.email, 'password' : "741"}
//             }, 
//             function (err, response, body) {
//                 assert.isNull(err);
//                 assert.isNotNull(body.token);
//                 assert.equal(response.statusCode, 401);
//                 done();
//             });
//         });

//         it('Deve retornar status code 401 ao tentar fazer o login com um usuario e senha em branco', function (done) {
//             request.post({
//                 url: 'http://localhost:3000/login',
//                 json: true
//             }, 
//             function (err, response, body) {
//                 assert.isUndefined(body.token);
//                 assert.equal(response.statusCode, 401);
//                 done();
//             });
//         });
//     });
// });
