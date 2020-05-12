'use strict';
const ROOT_PATH = process.cwd();
var assert = require('chai').assert;
var request = require('request');
var server = require(`${ROOT_PATH}/server.js`);
var serviceUser = require(`${ROOT_PATH}/app/services/usersService`)();

describe('Testes Users', function () {
    var newUser = { name: 'Tony Stark', email: 'tony@gmail.com', cardId: '101', password: '123456'};    

    after(function () {
        serviceUser.remove(newUser.cardId);
    });
    
    describe('O usuario acessa a rota post/users', function () {
        it('Deve retornar status code 201', function (done) {
            request.post({
                url: 'http://localhost:3000/users',
                json: true,
                body: newUser
            }, function (err, response, body) {
                assert.isNull(err);
                assert.equal(response.statusCode, 201);
                done();
            });

        });

        // it('Deve retornar status code 400 caso tente inserir um usuario com e-mail já cadastrado.', 
        //     function (done) {           
        //         request.post({
        //             url: 'http://localhost:3000/users',
        //             json: true,
        //             body: newUser
        //         }, function (err, response, body) {
        //             assert.equal(response.statusCode, 400); 
        //             assert.equal(body.message, 'Erro: E-mail já existente');
        //             done();
        //         });
        // });

        // it('Deve retornar status code 500 caso tente inserir um usuario inválido.',                
        //     function (done) {    
        //         var newUserInvalid = { nme: 'Tony Stark', eail: 'tony@gmail.com', cardId: '101', password: '123456'};                       
        //         request.post({
        //             url: 'http://localhost:3000/users',
        //             json: true,
        //             body: newUserInvalid
        //         }, function (err, response, body) {
        //             assert.equal(response.statusCode, 500); 
        //             done();
        //         });
        // });
    });

    // describe('O usuario acessa a rota get/users - nenhum usuario encontrado', function () {
    //     it('Deve retornar status code 200', function (done) {
    //         request.get('http://localhost:3000/users', function (err, response, body) {
    //             assert.equal(response.statusCode, 200);
    //             done();
    //         });
    //     });
        
    //     it('Deve retornar status code 404', function (done) {
    //         serviceUser.remove(newUser.cardId);
    //         request.get('http://localhost:3000/users', function (err, response, body) {
    //             assert.equal(response.statusCode, 404);
    //             done();
    //         });
    //     });
    // });   
});
