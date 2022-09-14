var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/bikes/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Bikejson.json')
  let bikes = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      bikes.forEach((bike) => {
        bike['tax'] = bike.price * 0.075
      })
      break
    case 'Durham':
      bikes.forEach((bike) => {
        bike['tax'] = bike.price * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')

  }
  res.send(bikes)
});

router.post('/bikes/add', (req, res, body) => {
  const new_bike = req.body
  fs.readFile('./data/Bikejson.json', (err, data) => {
    var json = JSON.parse(data)
    json.push(new_bike)
    fs.writeFile('./data/Bikejson.json', JSON.stringify(json), (err) => {
      res.status(500).send('Error adding bike!')
    })
    res.json(new_bike)
  })
})

router.get('/bikes/team', (req, res, body) => {
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