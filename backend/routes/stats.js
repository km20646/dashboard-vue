var express = require('express');
var router = express.Router();
var stats = require('../stats.json');

router.get('/', function (req, res, next) {
    // const id = parseInt(req.params.id,10);
    // var movie = movies.filter(function (movie) {
    //     return movie.id === id
    //   });
    res.send(stats);
});

module.exports = router;