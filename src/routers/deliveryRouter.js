const deliveryRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const DeliveryPage = require('../views/DeliveryPage');

const { Category, Delivery } = require('../../db/models');

deliveryRouter.get('/', async (req, res) => {
  const { email } = req.session;
  try {
    const categories = await Category.findAll({ raw: true });
    const deliveries = await Delivery.findAll({ raw: true });
    renderTemplate(DeliveryPage, { categories, deliveries, email }, res);
  } catch (err) {
    console.error(err);
  }
});

deliveryRouter.post('/', async (req, res) => {
  const { order_price: orderPrice, delivery_price: deliveryPrice } = req.body;
  try {
    const newDelivery = await Delivery.create({
      order_price: orderPrice,
      delivery_price: deliveryPrice,
    });
    if (newDelivery) {
      res.json({
        msg: 'Тариф доставки успешно добавлен!',
        orderPrice: newDelivery.order_price,
        deliveryPrice: newDelivery.delivery_price,
        id: newDelivery.id,
      });
    } else {
      res.json({ error: 'Что-то пошло не так!' });
    }
  } catch (err) {
    console.error(err);
  }
});

deliveryRouter.delete('/:id', async (req, res) => {
  const { id } = req.body;
  try {
    await Delivery.destroy({ where: { id } });
    res.json({ msg: 'Тариф доставки удален' });
  } catch (error) {
    console.error(error);
    res.json({ error: 'Тариф доставки не удален' });
  }
});

module.exports = deliveryRouter;
