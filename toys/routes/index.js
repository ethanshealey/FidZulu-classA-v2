var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/toys/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Toysjson.json')
  let toys = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      toys.forEach((toy) => {
        toy['tax'] = toy.prize * 0.075
      })
      break
    case 'Durham':
      toys.forEach((toy) => {
        toy['tax'] = toy.prize * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')
  }
  res.send(toys)
});

router.get('/toys/team', (req, res, body) => {
  res.send(JSON.stringify({
      "team": "Shelly's Society",
      "membersNames": [
          "Will Bucher",
          "Ethan Crawford",
          "Dani Rowe",
          "Lauren Dietzler",
          "Alyssa Santos",
          "Evan Ruan",
          "Kevin Lu",
          "Ethan Shealey"
      ]
  }))
})

module.exports = router;