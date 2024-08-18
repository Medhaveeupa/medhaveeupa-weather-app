// const MicroRegionWeather = require('../models/MicroRegionWeather');

// exports.getMicroRegionData = async (req, res) => {
//   try {
//     const microRegionData = await MicroRegionWeather.find().sort({ timestamp: -1 });
//     res.json(microRegionData);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMicroRegionData = async (req, res) => {
//   try {
//     const { region, temperature, condition } = req.body;
//     const updatedData = await MicroRegionWeather.findOneAndUpdate(
//       { region },
//       { temperature, condition },
//       { new: true, upsert: true }
//     );
//     res.json(updatedData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };