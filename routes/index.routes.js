const express = require('express');
const { route } = require('./user.routes');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

module.exports = router;
