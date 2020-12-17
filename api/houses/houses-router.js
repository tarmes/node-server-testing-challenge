const express = require('express');

const Houses = require('./houses-model');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const houses = await Houses.getAll();
      if (!houses) {
         res.status(500).json({ message: 'failure getting the houses!'})
      } else {
         res.json(houses)
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

module.exports = router;