const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Category, Item, Price } = require('../../db/models');
const PriceList = require('../views/PriceList');

router.get('/', async (req, res) => {
  const { email } = req.session;
  const categories = await Category.findAll({ raw: true });
  const prices = await Price.findAll({
    raw: true,
    include: {
      model: Item,
      attributes: ['name', 'category_id'],
      required: true, // This will perform an INNER JOIN
    },
  });
  renderTemplate(PriceList, { categories, email, prices }, res);
});

module.exports = router;
