const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/api/getList', (req,res) => {
  let list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});


module.exports = router;
