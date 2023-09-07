const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Category, Item, Price } = require('../../db/models');
const PriceList = require('../views/PriceList');

router.get('/', async (req, res) => {
  const { email } = req.session;
  const categories = await Category.findAll({
    raw: true,
    order: [['id', 'ASC']],
  });
  const prices = await Price.findAll({
    raw: true,
    include: {
      model: Item,
      attributes: ['name', 'category_id'],
      required: true, // This will perform an INNER JOIN
    },
  });
  const items = await Item.findAll({ raw: true });
  renderTemplate(PriceList, { categories, email, prices, items }, res);
});

router.put('/', async (req, res) => {
  const { updatedPrices } = req.body;
  try {
    await Promise.all(
      updatedPrices.map(async (obj) => {
        try {
          const updateObj = { ...obj };
          if ('itemId' in updateObj) delete updateObj.itemId;
          if ('updated' in updateObj) delete updateObj.updated;
          if (obj.updated) {
            await Price.update(updateObj, { where: { item_id: obj.itemId } });
          } else {
            if ('catId' in updateObj) delete updateObj.catId;
            if ('itemName' in updateObj) delete updateObj.itemName;
            const itemId = Number(obj.itemId.split('-')[1]);
            const existingItemId = await Item.findByPk(itemId);
            updateObj.item_id = existingItemId.dataValues.id;
            await Price.create(updateObj);
          }
        } catch (error) {
          console.error('Error updating price:', error);
          throw error; // Re-throw the error to propagate it
        }
      })
    );
    res.json({
      msg: 'Цены обновлены',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Цены не обновлены',
    });
  }
});

router.delete('/', async (req, res) => {
  const { priceToDelete } = req.body;
  try {
    await Price.destroy({
      where: {
        id: priceToDelete,
      },
    });
    res.json({
      msg: 'Позиция удалена',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Позиция не удалена',
    });
  }
});

module.exports = router;
