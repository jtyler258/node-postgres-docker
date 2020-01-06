const express = require('express');
const BrandController = require('./controller');

const router = express();

router.get('/', async (req, res) => {
  try {
    const brands = await BrandController.list();
    return res.status(200).json(brands);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const brand = await BrandController.get(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    return res.status(200).json(brand);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const brand = await BrandController.create(req.body.name);
    return res.status(201).json(brand);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await BrandController.update(req.params.id, req.body.name);
    if (!result) {
      return res.status(404).json({ message: "Brand not found" });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const brand = await BrandController.delete(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});


module.exports = router;