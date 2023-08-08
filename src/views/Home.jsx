const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ categories }) {
  return (
    <Layout categories={categories}>
      <link
        type="image/png"
        sizes="32x32"
        rel="icon"
        href="/image/favicon.png"
      ></link>
      <script defer src="/js/requestPriceHome.js" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
      />
      <link rel="stylesheet" href="/css/home.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
        rel="stylesheet"
      />
      <div>
        <div className="swiper container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="slide1-text">
                <div className="slide1-title">
                  <div className="logo_header">
                    <h2>Чиполинарий</h2>
                  </div>
                  <div className="image_text_container">
                    <p> Магазин солений и салатов </p>
                  </div>
                </div>
              </div>
              <div className="image-slider">
                <img src="/image/slider/slider-1.jpg" />
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="slide2-container">
                <div className="slide2-item">Вкусно</div>
                <div className="slide2-item">Выгодно</div>
                <div className="slide2-item">Удобно</div>
              </div>
              <div className="image-slider">
                <img src="/image/slider/slider-2.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-slider">
                <img src="/image/slider/slider-3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-title">
            <h2 className="home-title-text">
              Доставка солений и салатов для Вашего ресторана, кафе или любого
              другого предприятия по оптовым ценам
            </h2>
            <div className="home-title-description">
              Компания "Инмарко Плюс" осуществляет снабжение солениями и
              салатами ресторанов, кафе, гостиниц, столовых, баров, комбинатов
              питания по Москве и Московской области
            </div>
          </div>
          <div className="home-price">
            <div className="price-form">
              <h3 className="price-form-title">Узнайте актуальные цены</h3>
              <div className="price-form-description formOnHome">
                Заполните форму и мы пришлем Вам информацию об актуальных ценах
                <p className="price_form_alert_home" />
              </div>
              <form className="formRequestPriceHome">
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
                <button className="price-btn btn" type="submit">
                  Отправить
                </button>
                <p className="message" />
              </form>
            </div>
          </div>
          <div className="advantages">
            <div className="advantages-inner">
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/assortiment.png" alt="assortment" />
                </div>
                <h5 className="advantages-title">Обширный ассортимент</h5>
                <div className="advantaged-descr">
                  Богатый выбор закусок и солений на любой вкус.
                </div>
                <a href="/catalog" className="advantages-btn btn">
                  КАТАЛОГ
                </a>
              </div>
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/delivery.png" alt="delievery" />
                </div>
                <h5 className="advantages-title">УДОБНАЯ ДОСТАВКА</h5>
                <div className="advantaged-descr">
                  Доставка по Москве и области - в кратчайшие сроки по приятным
                  ценам.
                </div>
                <a href="/delivery" className="advantages-btn btn">
                  ДОСТАВКА
                </a>
              </div>
              <div className="advantages-item">
                <div className="advantages-img">
                  <img src="/image/trust.png" alt="partners" />
                </div>
                <h5 className="advantages-title">Нам доверяют</h5>
                <div className="advantaged-descr">
                  Посмотрите отзывы реальных клиентов
                </div>
                <a href="/feedback" className="advantages-btn btn">
                  ОТЗЫВЫ
                </a>
              </div>
            </div>
          </div>
          <div id="map" className="map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.711247%2C54.959259&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjUzODI5ODI0EqwB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0LPQvtGA0L7QtNGB0LrQvtC5INC-0LrRgNGD0LMg0JvRg9GF0L7QstC40YbRiywg0YHQtdC70L4g0J3QuNC20L3QtS3QnNCw0YHQu9C-0LLQviwg0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQu9C40YbQsCwgMTHQkCIKDWZ5HUIVVVVbQg%2C%2C&z=8.97"
              frameBorder="1"
              allowFullScreen="true"
              title="YandexMap"
            />
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" />
      <script defer src="/js/home.js" />
    </Layout>
  );
};
