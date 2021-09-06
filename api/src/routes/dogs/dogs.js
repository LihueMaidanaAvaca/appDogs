const router = require('express').Router();
const {default: axios} = require('axios');
const {Dogs, Temperament} = require('../db');

router.get('/', async (req, res) => {
    res.send('')
});

router.get('/:breedId', (req, res, next) => {
    const {breedId} = req.params;
    if (breedId) {
        Dog.findOne({where: {id: breedId}, include: {model: Temperament}})
            .then((response) => res.send(response))
            .catch((err) => next(err));
    }
});

router.post('/', async (req, res) => {
    res.send('')
});


module.exports = router;