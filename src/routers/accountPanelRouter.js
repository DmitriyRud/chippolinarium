const multer = require('multer');
const bcrypt = require('bcrypt');
const accountPanelRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const AccountPanel = require('../views/AccountPanel');

const {
  Category,
  Feedback,
  Item,
  User,
  ManagerEmail,
} = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === 'photo') {
      // Путь для загрузки фотографий
      cb(null, 'public/image/categories/');
    } else if (file.fieldname === 'photoItem') {
      // Путь для загрузки видео
      cb(null, 'public/image/items/');
    } else {
      // Путь по умолчанию
      cb(null, 'public/other/');
    }
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
// const upload = multer({ dest: 'public/image/categories/' });
const upload = multer({ storage });

accountPanelRouter.get('/', async (req, res) => {
  try {
    const managers = await ManagerEmail.findAll({ raw: true });
    const categories = await Category.findAll({ raw: true });
    const feedbacks = await Feedback.findAll(
      { where: { approved: false } },
      { raw: true }
    );
    renderTemplate(AccountPanel, { categories, feedbacks, managers }, res);
  } catch (err) {
    console.error(err);
  }
});

accountPanelRouter.post(
  '/',
  upload.fields([{ name: 'photo', maxCount: 1 }]),
  async (req, res) => {
    try {
      const image = req.files.photo[0].originalname;
      const { title, description } = req.body;
      const newCategory = await Category.create({
        title,
        description,
        image: `/image/categories/${image}`,
      });
      if (newCategory) {
        res.json({ msg: 'Категория успешно создана' });
      } else {
        res.json({ error: 'Ошибка создания категории' });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

accountPanelRouter.put('/:id', async (req, res) => {
  const { id } = req.body;
  try {
    await Feedback.update({ approved: true }, { where: { id } });
    res.json({ msg: 'Отзыв одобрен' });
  } catch (error) {
    console.error(error);
    res.json({ error: 'Что-то пошло не так!' });
  }
});



accountPanelRouter.post('/edit-feedback/:id', async (req, res) => {
  const { id } = req.body;
  try {
    const feedback = await Feedback.findByPk(id);
    res.json(feedback);
  } catch (error) {
    console.log(error);
  }
});

accountPanelRouter.put('/edit-feedback/:id', async (req, res) => {
  const { id } = req.params;
  const { name, body } = req.body;
  try {
    const feedback = await Feedback.update(
      {
        name,
        body,
      },
      { where: { id } }
    );
    const newFeedback = await Feedback.findByPk(id);
    res.json(newFeedback);
  } catch (error) {
    console.log(error);
  }
});

accountPanelRouter.post(
  '/item',
  upload.fields([{ name: 'photoItem', maxCount: 1 }]),
  async (req, res) => {
    try {
      const image = req.files.photoItem[0].originalname;
      const { name, categoryName, description } = req.body;
      const category = await Category.findOne({
        where: { title: categoryName },
      });
      const newItem = await Item.create({
        name,
        description,
        image: `/image/items/${image}`,
        category_id: category.id,
      });
      if (newItem) {
        res.json({ msg: 'Товар успешно создан' });
      } else {
        res.json({ error: 'Ошибка создания товара' });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
accountPanelRouter.post('/admin', async (req, res) => {
  const { oldEmail, oldPassword, newEmail, newPassword1, newPassword2, code } =
    req.body;
  try {
    const checkUser = await User.findOne({
      where: { email: oldEmail },
      raw: true,
    });
    if (checkUser) {
      const checkPass = await bcrypt.compare(oldPassword, checkUser.password);
      if (checkPass) {
        if (newPassword1 === newPassword2) {
          const hashPassword = await bcrypt.hash(newPassword1, 5);

          await User.update(
            { email: newEmail, password: hashPassword, code },
            { where: { id: checkUser.id } }
          );
          res.json({ success: 'Данные успешно изменены' });
        } else {
          res.json({ msg: 'Пароли не совпадают' });
        }
      } else {
        res.json({ msg: 'Неверный пароль' });
      }
    } else {
      res.json({ msg: 'Такой email не зарегистрирован как администратор' });
    }
  } catch (error) {
    console.log(error);
  }
});

accountPanelRouter.post('/manager', async (req, res) => {
  const { managerEmail } = req.body;

  try {
    const manager = await ManagerEmail.findOne({
      where: { email: managerEmail },
    });
    if (manager) {
      return res.json({ msg: 'Такой менеджер уже добавлен' });
    } else {
      const newManager = await ManagerEmail.create({
        email: managerEmail,
      });
      res.json(newManager);
    }
  } catch (error) {
    console.log('Не удалось добавить менеджера', error);
  }
});

accountPanelRouter.delete('/manager', async (req, res) => {
  const { id } = req.body;
  try {
    await ManagerEmail.destroy({ where: { id } });
    res.json({ msg: 'Менеджер успешно удалён' });
  } catch (error) {
    res.json({ error: 'Менеджер не удалён' });
  }
});

accountPanelRouter.delete('/:id', async (req, res) => {
  const { id } = req.body;
  try {
    await Feedback.destroy({ where: { id } });
    res.json({ msg: 'Отзыв удален' });
  } catch (error) {
    console.error(error);
    res.json({ error: 'Что-то пошло не так!' });
  }
});

accountPanelRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie(process.env.COOKIE_NAME);
    res.redirect('/');
  });
});

module.exports = accountPanelRouter;
