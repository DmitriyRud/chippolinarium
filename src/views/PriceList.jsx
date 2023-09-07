const React = require('react');
const Layout = require('./Layout');

module.exports = function PriceList({ categories, email, prices, items }) {
  const metaTags = {
    title: 'Прайс-лист солений и салатов [ Чиполинарий ]',
    description: 'Актуальные цены на продукцию ООО Инмарко Плюс',
    robots: 'index, follow',
  };

  function displayPrice(price) {
    if (price) {
      return price.toFixed(2);
    }
    return '';
  }
  // console.log(items);
  // let categoriesArr = [
  //   {
  //     category_id: 1,
  //     items: [
  //       {
  //        ...
  //       }
  //     ]
  //   }
  // ]

  const categoriesArr = categories.map((cat) => ({
    category_id: cat.id,
    items: items.filter((item) => item.category_id === cat.id),
  }));

  const priceIds = new Set(prices.map((item) => item.item_id));

  const filteredCatArr = categoriesArr.map((category) => ({
    category_id: category.category_id,
    items: category.items.filter((item) => !priceIds.has(item.id)),
  }));

  // console.log(categoriesArr);

  // console.log(prices);

  return (
    <Layout categories={categories} metatags={metaTags}>
      <link rel="stylesheet" href="/css/pricelist.css" />
      <link rel="canonical" href="https://soleniya.online/prices" />
      <script defer src="/js/priceList.js" />
      <div className="container price-container" id="price-container">
        <h2 className="price-title">Наши цены</h2>
        {email && (
          <button
            type="button"
            className="btn btn-card saveBtn"
            id="btnSave-1"
            disabled
          >
            Сохранить
          </button>
        )}
        <table id="price-table">
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td colSpan="6" className="rows-title">
              ФАСОВКА
            </td>
          </tr>
          {categories.map((category) => (
            <React.Fragment key={`category-${category.id}`}>
              <tr className="package-title">
                <td colSpan="2" className="category-title">
                  {category.title}
                </td>
                <td>0.25</td>
                <td>0.5</td>
                <td>1</td>
                <td>3</td>
                <td>5</td>
                <td>10</td>
              </tr>
              {prices
                .filter((e) => e['Item.category_id'] === category.id)
                .map((price, index) => (
                  <tr key={`item-${price.item_id}`} className="content-tr">
                    {email ? (
                      <td className="item-del-td" id={`del-price-${price.id}`}>
                        <button type="button" id={`btnDel-${category.id}`}>
                          -
                        </button>
                      </td>
                    ) : (
                      <td>{index + 1}</td>
                    )}

                    <td>{price['Item.name']}</td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg025"
                          type="number"
                          className="price-inputs"
                          id={`input-kg025-${price.item_id}`}
                          value={`${price.kg025}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg025)
                      )}
                    </td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg05"
                          type="number"
                          className="price-inputs"
                          id={`input-kg05-${price.item_id}`}
                          value={`${price.kg05}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg05)
                      )}
                    </td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg1"
                          type="number"
                          className="price-inputs"
                          id={`input-kg1-${price.item_id}`}
                          value={`${price.kg1}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg1)
                      )}
                    </td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg3"
                          type="number"
                          className="price-inputs"
                          id={`input-kg3-${price.item_id}`}
                          value={`${price.kg3}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg3)
                      )}
                    </td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg5"
                          type="number"
                          className="price-inputs"
                          id={`input-kg5-${price.item_id}`}
                          value={`${price.kg5}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg5)
                      )}
                    </td>
                    <td>
                      {email ? (
                        <input
                          name="input-kg10"
                          type="number"
                          className="price-inputs"
                          id={`input-kg10-${price.item_id}`}
                          value={`${price.kg10}`}
                          onChange={() => {}}
                        />
                      ) : (
                        displayPrice(price.kg10)
                      )}
                    </td>
                  </tr>
                ))}
              {email && (
                <tr>
                  <td className="item-add-td">
                    {filteredCatArr.find(
                      (cat) => cat.category_id === category.id
                    ).items.length ? (
                      <button type="button" id={`btnAdd-${category.id}`}>
                        +
                      </button>
                    ) : (
                      <span />
                    )}
                  </td>
                  <td>
                    {filteredCatArr.find(
                      (cat) => cat.category_id === category.id
                    ).items.length ? (
                      <select
                        name="itemName"
                        id={`selectName-${category.id}`}
                        className="form-control"
                      >
                        {filteredCatArr
                          .find((cat) => cat.category_id === category.id)
                          .items.map((item) => (
                            <option
                              key={`opt-${item.id}`}
                              id={`opt-${item.id}`}
                              value={item.name}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    ) : (
                      <span>В категории нет других товаров</span>
                    )}
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan="8" className="empty-tr">
                  &nbsp;
                </td>
              </tr>
            </React.Fragment>
          ))}
        </table>
        {email && (
          <button
            type="button"
            className="btn btn-card saveBtn"
            id="btnSave-2"
            disabled
          >
            Сохранить
          </button>
        )}
      </div>
    </Layout>
  );
};
