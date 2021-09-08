const router = require('express').Router();
const {Temperament} = require('../db');

router.get('/', async (req, res, next) => {
    Temperament.findAll({order: [['name', 'ASC']]})
        .then((response) => res.send(response))

        .catch((err) => next(err));
});

module.exports = router;