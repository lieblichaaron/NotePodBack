const express = require('express');

const { login, refresh } = require('../controllers/authCtrlr');

const router = express.Router();

router.post('/login', login);

router.post('/refresh', refresh);

module.exports = router;
