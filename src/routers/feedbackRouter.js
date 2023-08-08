const feedBackRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Feedbacks = require('../views/Feedbacks');

const { Category, Feedback } = require('../../db/models');

feedBackRouter.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll(
      { where: { approved: true } },
      { raw: true }
    );
    const categories = await Category.findAll({ raw: true });
    renderTemplate(Feedbacks, { categories, feedbacks }, res);
  } catch (err) {
    console.error(err);
  }
});

feedBackRouter.post('/', async (req, res) => {
  const { email, name, body } = req.body;
  try {
    const newFeedback = await Feedback.create({
      email,
      name,
      body,
      approved: false,
    });
    if (newFeedback) {
      res.json({
        msg: 'Ваш отзыв успешно создан! После модерации он отобразится на сайте.',
      });
    } else {
      res.json({ error: 'Что-то пошло не так!' });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = feedBackRouter;
