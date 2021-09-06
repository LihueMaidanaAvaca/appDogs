const { Router } = require('express');
const dogs = require('./dogs/dogs.js');



const router = Router();

router.use('/dogs', dogs);



module.exports = router;

