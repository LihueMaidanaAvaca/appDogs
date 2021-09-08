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
            height : dog.height.metric,
            weight : dog.weight,
            lifespan : dog.life_span,
            temp : dog.temperament,
            img: dog.image.url
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
                height : dog.height.metric,
                weight : dog.weight,
                lifespan : dog.life_span,
                temp : dog.temperament,
                img: dog.image.url
            }});
            const dballDogs = await Dog.findAll({include: {
                model: Temperament,
                attributes : ['name']
            }})
            const every = await Promise.all([dballDogs, allDogs])
            res.json(every) 
        }
        })
        
// router.post('/', async (req, res, next) => {

//     const {name, height, weight, lifespan, temp, img} = req.body;
//     try {
//         let newDog = await Dog.create({
//             name: name,
//             weight: weight,
//             height: height,
//             lifespan: lifespan,
//             img: img,
//             created: 'true',
//             });
//         if (temp.length) {
//             temp.map(async (tem) => {
//                 try {
//                     let temper = await Temperament.findOne({where: {name: tem}});
//                     newDog.addTemperament(temper);
//                 } catch (err) {
//                     next(err);
//                 }
//             });
//         }
//         res.send('Dog Created!');
//     } catch (err) {
//         next(err);
//     }
//         });        


module.exports = router;