const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => {

  console.log('Sent list of items');
});


module.exports = router;
