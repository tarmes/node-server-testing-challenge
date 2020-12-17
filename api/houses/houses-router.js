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

router.post('/', async (req, res) => {
   try {
      const newHouse = await Houses.add(req.body);
      res.status(201).json(newHouse);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
})

router.put('/:id', async (req, res) => {
   try {
      const updatedHouse = await Houses.update(req.params.id, req.body);
      res.status(200).json(updatedHouse)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const deleted = await Houses.remove(id);
      if (!deleted) {
         res.status(404).json({ message: 'nothing to delete!' })
      } else {
         res.status(200).json({ message: 'House deleted successfully!'})
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

module.exports = router;