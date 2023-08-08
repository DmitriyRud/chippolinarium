const router = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const AdminPanel = require('../views/AdminPanel');
const { User } = require('../../db/models');
const { Category } = require('../../db/models');
const { isNoAuth } = require('../middlewares/isAuth');

router.get('/', isNoAuth, async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    renderTemplate(AdminPanel, { categories }, res);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.email = user.email;

        req.session.save(() => {
          res.json({ msg: 'Успешный вход' });
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.send('Что-то пошло не так', error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.clearCookie(process.env.COOKIE_NAME);
    }
    res.redirect('/');
  });
});

module.exports = router;
