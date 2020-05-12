const ROOT_PATH = process.cwd();
const express = require('express');
const router = new express.Router();
const controllers = require(`${ROOT_PATH}/lib/debits/controllers`);
const authenticator = require(`${ROOT_PATH}/lib/middlewares/authenticator`);

router.post('/debits', authenticator, controllers.post);
router.get('/debits', controllers.get);

module.exports = router;