const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.post('/', weatherController.createWeatherData);
router.get('/', weatherController.getAllWeatherData);
// router.get('/:id', weatherController.getWeatherDataById);
router.put('/:id', weatherController.updateWeatherData);
router.delete('/:id', weatherController.deleteWeatherData);
router.get('/city/:city', weatherController.getWeatherDataByCity);

module.exports = router;