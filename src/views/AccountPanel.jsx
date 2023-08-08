const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel({ categories, feedbacks, managers }) {
  return (
    <Layout categories={categories}>
      <link rel="stylesheet" href="/css/account.css" />
      <script defer src="/js/accountPanel.js" />
      <script defer src="/js/managerEmail.js" />
      <script defer src="/js/managerDelete.js" />

      <div className="account_admin_container">
        <div className="logout-container">
          <button className="btn" type="button">
            <a href="/accountPanel/logout" className="btn logout-btn ">
              Выйти из аккаунта
            </a>
          </button>
        </div>
        <div className="update-container">
          <button className="btn updateAdmin-btn" type="button">
            Обновить данные администратора
          </button>
          <p className="message1" />
          <form action="#" method="POST" className="update-form">
            <label>Введите старый email</label>
            <input className="form-control" name="oldEmail" />
            <label>Введите старый пароль</label>
            <input className="form-control" name="oldPassword" />
            <label>Введите новый email</label>
            <input className="form-control" name="newEmail" />
            <label>Введите новый пароль</label>
            <input className="form-control" name="newPassword1" />
            <label>Подтвердите новый пароль</label>
            <input className="form-control" name="newPassword2" />

            <div className="buttons-update-container">
              <button className="btn send-update-btn" type="submit">
                Отправить
              </button>
              <button className="btn close-update-btn" type="button">
                Закрыть
              </button>
            </div>
          </form>
        </div>

        <div className="forms_container">
          <div className="category_create_container">
            <h2> Форма для создания категории </h2>
            <p className="createCategory" />

            <form
              id="newCategory"
              encType="multipart/form-data"
              name="newCategory"
            >
              {/* <div className="pic_input"> */}
              <label htmlFor="pic_input">Выберите фото для категории:</label>
              <input
                id="pic_input"
                type="file"
                name="photo"
                className="form-control"
              />
              <br />
              {/* </div> */}
              {/* <div className="pic_input"> */}
              <label htmlFor="pic_input">Название: </label>
              <input
                id="titleCategory"
                type="text"
                name="title"
                className="form-control"
              />
              <br />
              {/* </div> */}
              <label htmlFor="pic_input">Описание категории</label>
              <input
                id="bodyCategory"
                type="text"
                name="description"
                className="form-control"
              />
              {/* <div className="create_category_btn"> */}
              <button
                type="submit"
                className="btn button_price create_category_btn"
              >
                Отправить
              </button>
              {/* </div> */}
            </form>
          </div>

          <div className="create_item_container">
            <h2> Форма для создания товара </h2>
            <p className="createItem" />

            <form id="newItem" encType="multipart/form-data" name="newItem">
              <label htmlFor="pic_input">Категория товара:</label>

              <select name="categoryName" id="" className="form-control">
                {categories.length ? (
                  categories.map((category) => (
                    <option key={`opt-${category.id}`} value={category.title}>
                      {category.title}
                    </option>
                  ))
                ) : (
                  <span> </span>
                )}
              </select>
              <br />
              <label htmlFor="pic_input">Выберите фото товара:</label>
              <input
                id="pic_input"
                type="file"
                name="photoItem"
                className="form-control"
              />
              <br />
              <label htmlFor="pic_input">Название:</label>
              <input
                id="titleItem"
                type="text"
                name="name"
                className="form-control"
              />
              <br />
              <label htmlFor="pic_input">Описание товара:</label>
              <input
                id="titleCategory"
                type="text"
                name="description"
                className="form-control"
              />

              <button type="submit" className="btn button_price">
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className="flex_feedback_admin">
          <div className="moderate_feedback_container">
            <h2> Отзывы клиентов для модерации </h2>

            <div className="card card_feedback">
              <p className="approved_feedback" />
              {feedbacks.length ? (
                feedbacks.map((feedback) => (
                  <div
                    key={`fback-${feedback.id}`}
                    id={`card-${feedback.id}`}
                    className="card_container_feedback"
                  >
                    <div className="card-body" key={feedback.id}>
                      <h5 className="card-title">{feedback.name}</h5>
                      <p className="card-text">{feedback.body}</p>
                    </div>
                    <div>
                      <div className="div_button_feedback">
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn approved"
                        >
                          Отзыв прошёл
                        </button>
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn deleteFeedback"
                        >
                          Удалить отзыв
                        </button>
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn editFeedback"
                        >
                          Изменить отзыв
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <span> Отзывов пока нет</span>
              )}
            </div>
          </div>
        </div>
        <div className="Manager_container">
          <h2> Список менеджеров </h2>
          <p className="infoDeleteManager" />
          <ul className="managerEmailList">
            {managers.length ? (
              managers.map((manager) => (
                <li key={`manager-${manager.id}`}>
                  {manager.email}
                  <button
                    id={manager.id}
                    type="button"
                    className="deleteManagerBtn btn-close"
                    aria-label="Close"
                  />
                </li>
              ))
            ) : (
              <p> Менеджеры не добавлены </p>
            )}
          </ul>

          <div className="div_manager_form">
            <form method="POST" className="manager_form">
              <h3> Добавить менеджера для рассылки запросов </h3>
              <p className="manager_message" />
              <label>Введите email менеджера</label>
              <input
                className="form-control managerEmail"
                name="managerEmail"
              />
              <button className="btn send-managerEmail-btn" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
