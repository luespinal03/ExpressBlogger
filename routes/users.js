var express = require('express');
var router = express.Router();

/* GET users listing. */
// Because our base path for users.js is "/users" and the route names concatenate, the final path for this route is going to be "localhost:3000/users/all"
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/single', (req, res) => {
  res.json({
    success: true,
    user: "Single User"
  })
})


module.exports = router;