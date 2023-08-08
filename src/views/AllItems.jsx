const React = require('react');
const Layout = require('./Layout');

module.exports = function AllItems({ categories, email, items }) {
  return (
    <Layout categories={categories} email={email}>
      <link rel="stylesheet" href="/css/catalog.css" />
      <link rel="stylesheet" href="/css/home.css" />
      <script defer src="/js/modalHeader.js" />
      {email ? (
        <div className="container">
          <div className="containerCategory" style={{ margin: '0' }}>
            {items.length ? (
              items.map((item) => (
                <div className="card" key={`${item.id}item`}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-btn">
                    <button
                      type="button"
                      className="btn btn-card itemPriceRequest"
                    >
                      заказать
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>товаров нет</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div className="card" key={`item-${item.id}`}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-btn">
                    <button
                      type="button"
                      className="btn btn-card itemPriceRequest"
                    >
                      заказать
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>товаров нет</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};
