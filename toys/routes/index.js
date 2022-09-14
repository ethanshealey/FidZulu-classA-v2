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

router.post('/toys/add', (req, res, body) => {
  const new_toy = req.body
  fs.readFile('./data/Toysjson.json', (err, data) => {
    var json = JSON.parse(data)
    json.push(new_toy)
    fs.writeFile('./data/Toysjson.json', JSON.stringify(json), (err) => {
      //res.status(500).send('Error adding toy!')
    })
    res.json(new_toy)
  })
})

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