const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    renderTemplate(Home, { categories }, res);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
