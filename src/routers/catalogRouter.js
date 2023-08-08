const multer = require('multer');
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Items = require('../views/Items');
const Catalog = require('../views/Catalog');
const AllItems = require('../views/AllItems');

const { Category, Item } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === 'photoItem') {
      // Путь для загрузки видео
      cb(null, 'public/image/items/');
    } else if (file.fieldname === 'photo') {
      cb(null, 'public/image/categories/');
    }
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({
      raw: true,
    });
    renderTemplate(Catalog, { categories, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get('/items', async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ raw: true });
    renderTemplate(AllItems, { categories, items, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { email } = req.session;
    const { id } = req.params;
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({
      where: { category_id: id },
      raw: true,
      include: Category,
    });

    renderTemplate(Items, { categories, items, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.put(
  '/item/:id',
  upload.fields([{ name: 'photoItem', maxCount: 1 }]),
  async (req, res) => {
    const { id } = req.params;
    const { categoryName, name, description } = req.body;
    try {
      if (req.files.photoItem) {
        const image = req.files.photoItem[0].originalname;
        const category = await Category.findOne({
          where: { title: categoryName },
        });
        const editItem = await Item.update(
          {
            category_id: category.id,
            name,
            description,
            image: `/image/items/${image}`,
          },
          { where: { id } }
        );
        const newItem = await Item.findByPk(id);
        res.json({
          msg: 'Товар успешно обновлен',
          name: newItem.name,
          image: newItem.image,
          description: newItem.description,
        });
      } else {
        const category = await Category.findOne({
          where: { title: categoryName },
        });
        const editItem = await Item.update(
          {
            category_id: category.id,
            name,
            description,
          },
          { where: { id } }
        );
        const newItem = await Item.findByPk(id);
        res.json({
          msg: 'Товар успешно обновлен',
          name: newItem.name,
          image: newItem.image,
          description: newItem.description,
        });
      }
    } catch (err) {
      console.error(err);
      res.json({ error: 'Не удалось обновить товар' });
    }
  }
);

router.put(
  '/:id',
  upload.fields([{ name: 'photo', maxCount: 1 }]),
  async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      if (req.files.photo) {
        const image = req.files.photo[0].originalname;

        const editCategory = await Category.update(
          {
            title,
            description,
            image: `/image/categories/${image}`,
          },
          { where: { id } }
        );

        const newCategory = await Category.findByPk(id);
        res.json({
          msg: 'Товар успешно обновлен',
          title: newCategory.title,
          image: newCategory.image,
          description: newCategory.description,
        });
      } else {
        const editCategory = await Category.update(
          {
            title,
            description,
          },
          { where: { id } }
        );

        const newCategory = await Category.findByPk(id);
        res.json({
          msg: 'Товар успешно обновлен',
          title: newCategory.title,
          image: newCategory.image,
          description: newCategory.description,
        });
      }
    } catch (err) {
      console.error(err);
      res.json({ error: 'Не удалось обновить товар' });
    }
  }
);

router.delete('/item/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Item.destroy({ where: { id } });
    res.json({ msg: 'success' });
  } catch (error) {
    console.log('Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id }, include: Item });
    res.json({ msg: 'success' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
