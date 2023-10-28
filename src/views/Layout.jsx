const React = require('react');

module.exports = function Layout({
  children,
  categories,
  metatags = {
    title: 'Чиполинарий',
    description:
      'Производство и снабжение соленьями и салатами магазинов, ресторанов, кафе, гостиниц, столовых, баров, комбинатов питания',
    robots: 'index, follow',
  },
}) {
  return (
    <html lang="ru">
      <head>
        <script src="google" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metatags.title}</title>
        <meta name="description" content={metatags.description} />
        <meta name="robots" content={metatags.robots} />
        <meta name="rating" content="safe for kids" />
        <meta name="author" content="Dmitriy Rudakov" />
        <meta
          name="google-site-verification"
          content="D1ujA9t6wjA2ytykliC-5kX2x2CDH-CahwYAQsm5clM"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="https://soleniya.online/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <script src="yandex" />
        <script defer src="/js/modalHeader.js" />
      </head>
      <body>
        <header>
          <div className="header_container container">
            <div className="flex_up">
              <div className="logo">
                <a href="/" className="logo_link">
                  <img
                    src="/image/logo.png"
                    alt="logo"
                    className="logo_image"
                  />
                </a>
              </div>
              <div className="supplies">
                <ul className="supplies_list">
                  <li className="supplies_item">Снабжение ресторанов</li>
                  <li className="supplies_item">Снабжение гостиниц</li>
                  <li className="supplies_item">Снабжение столовых</li>
                  <li className="supplies_item">Снабжение кафе</li>
                </ul>
              </div>
              <div className="contact_header">
                <a href="tel:+74957951054" className="phone_link">
                  <p className="contact_header__text">📞 +7(495)7951054</p>
                </a>
                <a href="tel:+79256050225" className="phone_link">
                  <p className="contact_header__text">📞 +7(925)6050225</p>
                </a>
                <a href="tel:+79854723376" className="phone_link">
                  <p className="contact_header__text">📞 +7(985)4723376</p>
                </a>
                <a href="https://wa.me/79686361472" className="whatsapp_link">
                  <img src="/image/whatsapp24.png" alt="whatsapp" />
                  +7(968)6361472
                </a>
                <a
                  href="mailto: &#x69;&#x6e;&#x6d;&#x61;&#x72;&#x63;&#x6f;&#x70;&#x6c;&#x75;&#x73;&#x40;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x72;&#x75;"
                  className="contact_header__text"
                >
                  ✉️
                  &#x69;&#x6e;&#x6d;&#x61;&#x72;&#x63;&#x6f;&#x70;&#x6c;&#x75;&#x73;&#x40;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x72;&#x75;
                </a>
                <button type="button" className=" btn button_price">
                  Подробности
                </button>
              </div>
            </div>
            <div className="flex_down">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse navbar-list"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          aria-current="page"
                          href="/about"
                        >
                          О нас
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/catalog">
                          Каталог
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/prices">
                          Наши цены
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/delivery">
                          Доставка
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contacts">
                          Контакты
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/feedback">
                          Отзывы
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <dialog id="modalPrice">
            <form method="dialog" className="dialogForm">
              <div className="modal-home-price">
                <div className="dialogPriceForm">
                  <div className="closeModalContainer">
                    <button type="button" className="closeModalWindow">
                      {' '}
                      &times;
                    </button>
                  </div>
                  <h3 className="price-form-title">Узнайте подробности</h3>
                  <div className="price-form-description">
                    Заполните форму и мы свяжемся с Вами, чтобы предоставить всю
                    необходимую информацию
                    <p className="price_form_alert_modal" />
                  </div>
                  <form method="POST">
                    <div className="mb-3">
                      <input
                        className="form-price__input form-control"
                        aria-describedby="name"
                        name="name"
                        placeholder="Введите Ваше имя"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-price__input form-control"
                        name="phone"
                        placeholder="Введите Ваш номер телефона"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-price__input form-control"
                        name="email"
                        placeholder="Введите Ваш email"
                      />
                    </div>
                    <button
                      className="price-btn btn modalPriceBtn"
                      type="submit"
                    >
                      Отправить
                    </button>
                    <p className="message" />
                  </form>
                </div>
              </div>
            </form>
          </dialog>

          {/* <script src="https://smtpjs.com/v3/smtp.js" /> */}
        </header>
        <div className="mainContainer">{children}</div>
        <footer>
          <div className="footer_container container">
            <div className="footer_up">
              <div className="footer-logo">
                <a href="/" className="logo_link">
                  <img
                    src="/image/logo.png"
                    alt="logo"
                    className="footer-logo_image"
                  />
                </a>
                <ul className="supply_links">
                  <a href="/contacts">
                    <li className="supplies_item">Снабжение ресторанов</li>
                  </a>
                  <a href="/delivery">
                    <li className="supplies_item">Доставка продуктов</li>
                  </a>

                  <a href="/prices">
                    <li className="supplies_item">Цены</li>
                  </a>

                  <a href="/about">
                    <li className="supplies_item">О нас</li>
                  </a>
                  <a href="/contacts">
                    <li className="supplies_item">Контакты</li>
                  </a>
                </ul>
              </div>
              <div className="catalog_container">
                <h4 className="footer-title">Каталог</h4>
                <ul className="category_list">
                  {categories.length ? (
                    categories.map((category) => (
                      <a
                        key={`${category.id}-catitem`}
                        href={`/catalog/${category.id}`}
                      >
                        <li className="category_lists">{category.title}</li>
                      </a>
                    ))
                  ) : (
                    <li className="empty_list" />
                  )}
                </ul>
              </div>
              <div className="info_container">
                <div className="sales_department">
                  <h4 className="footer-title">Отдел продаж:</h4>
                  <a href="tel:+74957951054" className="phone_link">
                    <p className="contact_header__text">📞 +7(495)7951054</p>
                  </a>
                  <a href="tel:+79256050225" className="phone_link">
                    <p className="contact_header__text">📞 +7(925)6050225</p>
                  </a>
                  <a href="tel:+79854723376" className="phone_link">
                    <p className="contact_header__text">📞 +7(985)4723376</p>
                  </a>
                  <a href="https://wa.me/79686361472" className="whatsapp_link">
                    <img src="/image/whatsapp24.png" alt="whatsapp" />
                    +7(968)6361472
                  </a>
                </div>
                <div className="email_contact">
                  <h4 className="footer-title">Пишите нам:</h4>
                  <a
                    href="mailto: &#x69;&#x6e;&#x6d;&#x61;&#x72;&#x63;&#x6f;&#x70;&#x6c;&#x75;&#x73;&#x40;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x72;&#x75;"
                    className="contact_header__text"
                  >
                    ✉️
                    &#x69;&#x6e;&#x6d;&#x61;&#x72;&#x63;&#x6f;&#x70;&#x6c;&#x75;&#x73;&#x40;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x72;&#x75;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};
