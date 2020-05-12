const ROOT_PATH = process.cwd();
const express = require('express');
const router = new express.Router();
const controllers = require(`${ROOT_PATH}/lib/users/controllers`);

router.post('/users', controllers.post);
router.get('/users', controllers.get);

module.exports = router;