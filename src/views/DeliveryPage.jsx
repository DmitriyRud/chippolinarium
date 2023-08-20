const React = require('react');

const Layout = require('./Layout');

module.exports = function Delivery({ categories, deliveries, email }) {
  const metaTags = {
    title: 'Доставка [ 🥗 соленья и салаты ]',
    description:
      '🚌Виды, 💰стоимость, 🌎регионы и 🎁условия доставки наших вкусных салатов и солений',
    robots: 'index, follow',
  };
  return (
    <Layout categories={categories} email={email} metatags={metaTags}>
      <script defer src="/js/delivery.js" />
      <link rel="stylesheet" href="/css/delivery.css" />
      <link rel="canonical" href="https://soleniya.online/delivery" />
      <div className="delivery-container">
        <h2 className="delivery-title">Доставка нашей продукции</h2>
        <div className="delivery-inner">
          <div className="text-container">
            <p>
              В настоящее время мы осуществляем доставку продуктов высокого
              качества не только организациям, профилем которых является сфера
              общественного питания, но и физическим лицам (на дом) по Москве и
              МО.
            </p>
            <p>
              Обращаясь в компанию &quot;Инмарко Плюс&quot;, Вы сможете
              размещать заказы на любые виды виды солений и салатов,
              представленные в нашем каталоге. При размещении заказа наши
              менеджеры свяжутся с Вами для консультации и ответят на все
              интересующие Вас вопросы.
            </p>
          </div>

          <img
            className="delivery-image__img"
            src="/image/delivery2.png"
            alt="delivery_image"
          />
        </div>

        <div className="delivery">
          <h2 className="delivery-title">
            Регион и условия доставки продуктов
          </h2>
          <p>Основной регион доставки - Москва и Московская область.</p>
          <p>
            Доставка осуществляется ежедневно, в соответствии с графиком
            поставок. Как правило, доставка продуктов производится на следующий
            день после размещения заказа.
          </p>
          <p>
            Наша компания располагает собственным автопарком современных
            автомобилей, поэтому доставка продуктов в рестораны, кафе, столовые
            и другие предприятия питания осуществляется быстро и в удобное для
            клиентов время.
          </p>
          <p>
            В настоящее время мы осуществляем доставку продуктов высокого
            качества не только организациям, профилем которых является сфера
            общественного питания, но и физическим лицам на дом по Москве и МО
          </p>

          <div className="table_container">
            <p className="alert_table" />
            <table
              id="delivery_table"
              className="table"
              style={{ border: '2px solid black' }}
            >
              {email ? (
                <thead>
                  <tr>
                    <th>Сумма заказа</th>
                    <th>Стоимость доставки</th>
                    <th> </th>
                  </tr>
                </thead>
              ) : (
                <thead>
                  <tr>
                    <th>Сумма заказа</th>
                    <th>Стоимость доставки</th>
                  </tr>
                </thead>
              )}

              {email ? (
                <tbody>
                  {deliveries.length ? (
                    deliveries.map((el) => (
                      <tr
                        id={`tr-${el.id}`}
                        key={`dlvr-${el.id}`}
                        style={{ fontSize: '12px' }}
                      >
                        <td>{el.order_price}</td>
                        <td>{el.delivery_price}</td>
                        <td>
                          {' '}
                          <button
                            type="button"
                            className="btn usual-btn"
                            data-delete-delivery={el.id}
                            id={el.id}
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {/* <td />
                      <td /> */}
                    </tr>
                  )}
                </tbody>
              ) : (
                <tbody>
                  {deliveries.length ? (
                    deliveries.map((el) => (
                      <tr id={`tr-${el.id}`} key={`dlvry-${el.id}`}>
                        <td>{el.order_price}</td>
                        <td>{el.delivery_price}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {/* <td></td>
                      <td></td> */}
                    </tr>
                  )}
                </tbody>
              )}
            </table>

            <div>
              <p className="newFeedback" />
              <form id="deliveryForm" style={{ display: 'none' }}>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Cтоимость заказа
                  </label>
                  <input
                    name="order_price"
                    type="text"
                    className="form-control"
                    id="exampleInputDelivery1"
                    placeholder="Введите стоимость заказа"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Стоимость доставки
                  </label>
                  <input
                    name="delivery_price"
                    type="text"
                    className="form-control"
                    id="exampleInputDelivery2"
                    placeholder="Введите стоимость доставки"
                  />
                </div>

                <button type="submit" className="btn usual-btn addFormBtn">
                  Отправить
                </button>
                <button type="submit" className="btn  usual-btn closeFormBtn">
                  Закрыть форму
                </button>
              </form>
            </div>
          </div>
          {email ? (
            <div className="addBtn">
              <button id="newDelivery" className="btn usual-btn" type="submit">
                Добавить
              </button>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Layout>
  );
};
