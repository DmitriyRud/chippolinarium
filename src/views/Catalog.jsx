const React = require('react');
const Layout = require('./Layout');

module.exports = function Catalog({ categories, email }) {
  return (
    <Layout categories={categories} email={email}>
      <script defer src="/js/catalog.js" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/catalog.css" />

      <div className="container">
        <div className="allItems-container container">
          {email ? (
            <a href="/accountPanel" className="btn btn-card btn-seeItems">
              Добавить новую категорию
            </a>
          ) : (
            <a className="btn button_price" href="catalog/items">
              показать все товары
            </a>
          )}
        </div>

        <div className="containerCategory">
          {categories.length ? (
            categories.map((category) => (
              <div className="card" key={`catitem-${category.id}`}>
                <div className="card-hidden">
                  <a href={`/catalog/${category.id}`}>
                    <img
                      id={`card-img-top-${category.id}`}
                      src={category.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        id={`card-title-${category.id}`}
                      >
                        {category.title}
                      </h5>
                      <div
                        className="card-text"
                        id={`card-text-${category.id}`}
                      >
                        {category.description.split('\n').map((line, index) => (
                          <p
                            className="text-center"
                            key={`${category.id}line${index}`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </a>
                  <div className="card-btn">
                    {email ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-card editBtn"
                          data-edit-category={category.id}
                          id={`btnEdit-${category.id}`}
                        >
                          изменить
                        </button>
                        <button
                          type="button"
                          className="btn btn-card deleteBtn"
                          data-delete-item={category.id}
                          id={`btnDelete-${category.id}`}
                        >
                          удалить
                        </button>
                      </>
                    ) : (
                      <a
                        className="btn btn-card"
                        href={`/catalog/${category.id}`}
                        id={`btnAdmin-${category.id}`}
                      >
                        подробнее
                      </a>
                    )}
                  </div>
                </div>

                {email && (
                  <div
                    className="hide_container_form"
                    style={{ display: 'none', position: 'absolute' }}
                    id={`hide-form-${category.id}`}
                  >
                    <p style={{ color: 'red' }} className="alert_items" />
                    <form
                      id={`editCategory-${category.id}`}
                      encType="multipart/form-data"
                      name="newCategory"
                      className="form_catalog"
                    >
                      <label htmlFor={`pic_input-${category.id}`}>Фото:</label>
                      <input
                        id={`pic_input-${category.id}`}
                        type="file"
                        name="photo"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor={`title-${category.id}`}>Название:</label>
                      <input
                        id={`title-${category.id}`}
                        type="text"
                        name="title"
                        value={category.title}
                        className="form-control"
                      />
                      <br />
                      <label htmlFor={`description-${category.id}`}>
                        Описание товара:
                      </label>
                      <textarea
                        id={`description-${category.id}`}
                        type="text"
                        name="description"
                        value={category.description}
                        className="form-control"
                      />
                      <br />
                      <button
                        type="button"
                        className="btn sendCategory"
                        data-send-edit-category={category.id}
                        id={`btnAdmin-${category.id}`}
                      >
                        Отправить
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>
              <p>товаров нет</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
