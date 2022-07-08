const { Router } = require('express');
const {Country, Activity} = require('../db');
const countryRouter = require('./CountriesRoute');
const deleteActivity = require('./deleteActvity')
const activityRouter = require('./ActivitiesRoutes')
const getCountryById = require('../controllers/countryController.js');



const router = Router();

router.use('/countries', countryRouter);
router.use('/activity', activityRouter);
router.use('/delete', deleteActivity);




 module.exports = router;
