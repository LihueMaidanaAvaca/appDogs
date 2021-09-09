const { Router } = require('express');
const dogs = require('./dogs/dogs.js');
const temperament = require('./temperament/temperament.js');


const router = Router();

router.use('/dogs', dogs);
router.use('/temperament', temperament);


module.exports = router;

