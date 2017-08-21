var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.contentType('text/plain');
  res.send('El Sombrero,La Piazza,Applebees,Ruby Tuesday,The Boathouse');
});

module.exports = router;
