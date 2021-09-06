const router = require('express').Router();
const {default: axios} = require('axios');
const {Dog, Temperament} = require('../../db');
const {Op} = require('sequelize')


router.get('/', async (req, res) => {
    const {name}= req.query;
    if(name){

        const response = await axios('https://api.thedogapi.com/v1/breeds');
        const allDogs = response.data.map(dog =>{return {
            id: dog.id,
            name : dog.name,
            height : dog.height,
            weight : dog.weight,
            lifespan : dog.life_span,
            temp : dog.temperament
        }});
        const dogs = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
        const dballDogs = await Dog.findAll({
            where:{name: {[Op.like]:`%${name}%`}},
            include: {
                model: Temperament,
                attributes : ['name']
            }})
            const every = await Promise.all([dballDogs, dogs])
            res.json(every)
        }else{
            const response = await axios('https://api.thedogapi.com/v1/breeds');
            const allDogs = response.data.map(dog =>{return {
                id: dog.id,
                name : dog.name,
                height : dog.height,
                weight : dog.weight,
                lifespan : dog.life_span,
                temp : dog.temperament
            }});
            const dballDogs = await Dog.findAll({include: {
                model: Temperament,
                attributes : ['name']
            }})
            const every = await Promise.all([dballDogs, allDogs])
            res.json(every) 
        }
        })
        
        // router.get('/:breedId', (req, res, next) => {
//     const {breedId} = req.params;
//     if (breedId) {
//         Dog.findOne({where: {id: breedId}, include: {model: Temperament}})
//             .then((response) => res.send(response))
//             .catch((err) => next(err));
//     }
// });

// router.post('/', async (req, res) => {
//     res.send('')
// });


module.exports = router;