const router = require('express').Router();
const { response } = require('express');
const {Temperament} = require('../../db');

router.get('/', async (req, res, next) => {
    const {name}= req.query;
    if(name){

        const response = await axios('https://api.thedogapi.com/v1/breeds');
    }
    // Temperament.findAll({order: [['name', 'ASC']]})
    //     .then((response) => res.send(response))

    //     .catch((err) => next(err));
    
    // let temperament = await Temperament.findAll();
    // console.log(temperament)
    // if(temperament === []){
        // traer todo de la apiiiiiiiiiii
    // 
    
});

module.exports = router;