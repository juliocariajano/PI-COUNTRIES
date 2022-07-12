const express = require ('express')
const router = express.Router()
const {Activity} = require ("../db")


router.put('/', async(req, res)=>{
    let {id} = req.params
    let {name} = req.body
    try {
        models.Activity.update({ 
            id: id
    
        })
    } catch (error) {
        
    }
    
    
}




)