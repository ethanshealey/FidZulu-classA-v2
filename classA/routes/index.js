var express = require('express');
var router = express.Router();
var axios = require('axios')

// bike -> 3031
// food -> 3032
// toys -> 3033

/* GET bike data. */
router.get('/classA/bikes/all/:location', (req, res, next) => {
  const loc = req.params.location
  axios.get(`http://localhost:3031/bikes/all/${loc}`)
    .then(resp => {
      res.send(resp.data)
    })
    .catch(e => {
      res.status(400).send(e.message)
    })
});

/* GET food data. */
router.get('/classA/foods/all/:location', (req, res, next) => {
  const loc = req.params.location
  axios.get(`http://localhost:3032/foods/all/${loc}`)
    .then(resp => {
      res.send(resp.data)
    })
    .catch(e => {
      res.status(400).send(e.message)
    })
});

/* GET toy data. */
router.get('/classA/toys/all/:location', (req, res, next) => {
  const loc = req.params.location
  axios.get(`http://localhost:3033/toys/all/${loc}`)
    .then(resp => {
      res.send(resp.data)
    })
    .catch(e => {
      res.status(400).send(e.message)
    })
});

module.exports = router;
