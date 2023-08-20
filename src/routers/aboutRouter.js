const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const About = require('../views/About.jsx');
const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  const categories = await Category.findAll({ raw: true });
  renderTemplate(About, { categories }, res);
});

module.exports = router;
