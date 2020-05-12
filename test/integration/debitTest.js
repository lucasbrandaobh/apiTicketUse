// 'use strict';
// const ROOT_PATH = process.cwd();
// var assert = require('chai').assert;
// var request = require('request');
// var serviceUser = require(`${ROOT_PATH}/app/services/usersService`)();
// var serviceDebits = require(`${ROOT_PATH}/app/services/debitsService`)();
// var server = require(`${ROOT_PATH}/server.js`);

// describe('Testes Debts', function () {
//     var newUser = { name: 'Jose Silva', email: 'jose@gmail.com', cardId: '99999', password: '123456'}; 
//     var token;
    
//     before(function () {  
//         serviceUser.post(newUser); 
//         request.post({
//             url: 'http://localhost:3000/login',
//             json: true,
//             body: {'username' : newUser.email, 'password' : newUser.password}
//         }, 
//         function (err, response, body) {
//             token = body.token;
//         });  

//     });    

//     after(function () {
//         serviceUser.remove(newUser.cardId);
//         serviceDebits.remove(newUser.cardId);
//     });

//     describe('O usuario acessa a rota get/debits passando filtro via queryString', function () {
//         var newDebits = 
//         [
//             {cardId: '99999', code: '2101', value: '3', debitedAt : '2017-11-01'},
//             {cardId: '99999', code: '3455', value: '3', debitedAt : '2017-11-02'},
//             {cardId: '99999', code: '3455', value: '3', debitedAt : '2017-11-03'}
//         ];        

//         before(function () {
//             serviceDebits.post(newDebits);
//             done();
//         });
        
//         it('Deve retornar status code 200 - Filtro CardId Valido', function (done) {
//             request.get('http://localhost:3000/debits?cardId=' + newUser.cardId, function (err, response, body) {
//                 assert.isNull(err);
//                 assert.isNotNull(body); 
//                 assert.equal(response.statusCode, 200);
//                 done();
//             });
//         });

//         it('Deve retornar status code 200 - Filtro initialDate & finalDate Valido', function (done) {            
//             request.get('http://localhost:3000/debits?initialDate=2017-11-01&finalDate=2017-11-03', 
//                 function (err, response, body) {
//                     assert.isNull(err);
//                     assert.isNotNull(body); 
//                     assert.equal(response.statusCode, 200);
//                     done();
//             });
//         });
        
//         it('Deve retornar status code 500 - Filtro initialDate & finalDate Formato Inválido', function (done) {
//             request.get('http://localhost:3000/debits?initialDate=20171132&finalDate=20171123', 
//                 function (err, response, body) {
//                     assert.equal(response.statusCode, 500);
//                     done();
//             });
//         });
        
//         it('Deve retornar status code 404 sem informar filtro', function (done) {
//             request.get('http://localhost:3000/debits', function (err, response, body) {
//                 assert.equal(response.statusCode, 404);
//                 done();
//             });
//         });
//     });

//     describe('O usuario acessa a rota post/debits', function () {
//         var newDebit = [{cardId: '99999', code: '2101', value: '3'}];        
       
//         it('Deve retornar status code 201', function (done) {
//             request.post({
//                 url: 'http://localhost:3000/debits',
//                 json: true,
//                 body: newDebit,
//                 headers: { 'x-access-token' : token }
//             }, function (err, response, body) {
//                 assert.isNull(err);
//                 assert.equal(response.statusCode, 201);
//                 done();
//             });
//         });
        
//         it('Deve retornar status code 401 - Token não enviado', function (done) {
//             var newDebit = [{cardId: '9999', code: '2101', value: '3.0'}];
//             request.post({
//                 url: 'http://localhost:3000/debits',
//                 json: true,
//                 body: newDebit,
//                 headers: { 'x-access-token' : '' }
//             }, function (err, response, body) {
//                 assert.equal(response.statusCode, 401);
//                 done();
//             });
//         });

//         it('Deve retornar status code 500 - Usuario não cadastrado', function (done) {
//             var newDebit = [{cardId: '9999', code: '2101', value: '3.0'}];
//             request.post({
//                 url: 'http://localhost:3000/debits',
//                 json: true,
//                 body: newDebit,
//                 headers: { 'x-access-token' : token }
//             }, function (err, response, body) {
//                 assert.equal(response.statusCode, 500);
//                 done();
//             });
//         });
//     });
// });
