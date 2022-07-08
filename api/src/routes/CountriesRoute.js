const axios = require ('axios');
const express = require ("express")
const router = express.Router();
const {Country, Activity} = require ("../db");
const {getAllCountry} = require ('../controllers/countryController');

router.get('/', async (req, res) =>{                                                                            
    let {name} = req.query;                                               
    if(!name){                                                                  
        let countries = await getAllCountry();                                        
        res.status(200).send(countries);
     }
     else{
        try{
            let country = await getAllCountry();                                     
            let nameCountry = country.filter(e => e.name.toLowerCase().startsWith(name.toLowerCase()));       
            nameCountry.length ?
            res.status(200).send(nameCountry)                                                            
            : res.status(404).send('No existe nombre del Pais');                                                        
        }
        catch(error){
         res.send(error)
        };} 
});
router.get('/:id', async  (req, res) =>{                                             
    let {id} = req.params                                                               
    try{
        let allId = await getAllCountry();                                                   
        let countryId = allId.filter( c => c.cca3.toUpperCase().startsWith(id.toUpperCase()))
        countryId ?
        res.status(200).send(countryId)
        : res.status(404).send('No existe Id del Pais')
    }
    catch(error){res.send(error)}
});
module.exports = router;