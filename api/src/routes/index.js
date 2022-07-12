const { Router } = require('express');
const {Country, Activity} = require('../db');
const countryRouter = require('./CountriesRoute');
const activityRouter = require('./ActivitiesRoutes')
const getCountryById = require('../controllers/countryController.js');



const router = Router();

router.use('/countries', countryRouter);
router.use('/activity', activityRouter);


 module.exports = router;
