const axios = require ('axios');
const express = require ("express");
const router =  express.Router();
const {Country, Activity} = require ("../db");

router.get('/', async (req, res)=>{
try{
const activity = await Activity.findAll({
attributes: ['id','name', 'difficulty','duration','season' ],
include: Country
})
res.status(200).send(activity)
}
catch(error){
console.log(error)
}
});

router.post ("/", async (req, res)=>{
    const {name, difficulty, duration, season, countries} = req.body
    const activity = {name, difficulty, duration, season}
    try {
        const validate = await Activity.findOne({
            where:{name}
        })
        if(!validate){
           const actCreate = await Activity.create(activity)
           let actDb = await Country.findAll({
               where:{name: countries}
           })
           console.log(actDb)
           await actCreate.addCountry(actDb)
           res.status(200).send('Actividad creada')
         
        }else {
            let actCreate2 = await Country.findAll({
                where:{
                    name:countries
                }
            })
            await validate.addCountry(actCreate2)
            res.status(200).send('Actividad creada')
        }          
         
    } catch (error) {
        console.log(error)
    }
   
})

module.exports= router
