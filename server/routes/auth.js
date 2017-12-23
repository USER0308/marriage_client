'use strict';

var auth = require('../controllers/user.js');
var koaRouter = require('koa-router');
var router = koaRouter();

router.post('/user/operation', auth.operation);
router.post('/user/validate', auth.validate);
router.post('/user/resetPass', auth.passwordReset);
// router.post('/user/update', auth.updateInfo);
router.post('/user', auth.authorize);

module.exports = router;
