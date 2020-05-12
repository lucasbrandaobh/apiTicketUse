const ROOT_PATH = process.cwd();
const express = require('express');
const router = new express.Router();
const controllers = require(`${ROOT_PATH}/lib/login/controllers`);

router.post('/login', controllers.login);

module.exports = router;