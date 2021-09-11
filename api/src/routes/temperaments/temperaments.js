const router = require('express').Router();
const { response } = require('express');
const {Temperament} = require('../../db');
const {default: axios} = require('axios');

router.get('/temperament', async (req, res) => {
    const apiTemp = await axios.get('https://api.thedogapi.com/v1/breeds');
    const temps = apiTemp.data.map(dog => dog.Temperament);
    const tempEach = temps.map(temp => {
        if(temp !== null){
            temp.split(', ');
            return temp
        }
        tempEach.forEach(temp => {
            Temperament.findOrCreate({
                where: {name: temp}
            })
            
        });
        
    })
    const allTemperaments = await Temperament.findAll()
    console.log(temp)
    res.send(apiTemp)
});

router.post('/temperament', async (req, res) =>{
    let temperamentDB = await Temperament.findAll({
        where: {name : temp}
    })
    dogCreated.addTemperament(temperamentDB)
    res.send('Done!')

})

module.exports = router;