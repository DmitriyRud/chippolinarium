const contactsRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Contacts = require('../views/Contacts');
const { Category } = require('../../db/models');

contactsRouter.get('/', async(req, res) => {
  const categories = await Category.findAll({
    raw: true,
  });
  renderTemplate(Contacts, {categories }, res);
});

module.exports = contactsRouter;