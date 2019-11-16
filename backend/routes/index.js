const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("../../frontend/public/index.html");
});


module.exports = router;
