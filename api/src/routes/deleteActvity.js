const express = require ('express');
const router = express.Router();
const {Activity} = require ('../db')


router.delete('/', async (req, res)=>{
    let {name} = req.query
    try {
        await Activity.destroy({
            where:{
                name: name
            }
        })
        res.status(200).send('Actividad eliminada')
    } catch (error){res.send(error)} 
})

module.exports= router