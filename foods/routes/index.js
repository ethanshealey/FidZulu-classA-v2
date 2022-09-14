var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/foods/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Foodjson.json')
  let foods = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      foods.forEach((food) => {
        food['tax'] = food.price * 0.075
      })
      break
    case 'Durham':
      foods.forEach((food) => {
        food['tax'] = food.price * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')
  }
  res.send(foods)
});

router.post('/foods/add', (req, res, body) => {
  const new_food = req.body
  fs.readFile('./data/Foodjson.json', (err, data) => {
    var json = JSON.parse(data)
    json.push(new_food)
    fs.writeFile('./data/Foodjson.json', JSON.stringify(json), (err) => {
      //res.status(500).send('Error adding Food!')
    })
    res.json(new_food)
  })
})

router.get('/foods/team', (req, res, body) => {
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