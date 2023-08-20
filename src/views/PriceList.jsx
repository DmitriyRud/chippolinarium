const React = require('react');
const Layout = require('./Layout');

module.exports = function PriceList({ categories, email, prices }) {
  const metaTags = {
    title: 'Прайс-лист солений и салатов [ Чиполинарий ]',
    description: 'Актуальные цены на продукцию ООО Инмарко Плюс',
    robots: 'index, follow',
  };
  console.log(prices);
  // console.log(prices[0]['Item.category_id']);
  return (
    <Layout categories={categories} metatags={metaTags}>
      <link rel="stylesheet" href="/css/pricelist.css" />
      <link rel="canonical" href="https://soleniya.online/prices" />
      <div className="container price-container">
        <h2 className="price-title">Наши цены</h2>
        <table>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td colSpan="6" className="rows-title">
              ФАСОВКА
            </td>
          </tr>
          {categories.map((category) => (
            <div key={`category-${category.id}`}>
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
                    <td>{index + 1}</td>
                    <td>{price['Item.name']}</td>
                    <td>{price.kg025 ? price.kg025.toFixed(2) : ''}</td>
                    <td>{price.kg05 ? price.kg05.toFixed(2) : ''}</td>
                    <td>{price.kg1 ? price.kg1.toFixed(2) : ''}</td>
                    <td>{price.kg3 ? price.kg3.toFixed(2) : ''}</td>
                    <td>{price.kg5 ? price.kg5.toFixed(2) : ''}</td>
                    <td>{price.kg10 ? price.kg10.toFixed(2) : ''}</td>
                  </tr>
                ))}
              <tr>
                <td colSpan="8" className="empty-tr">
                  &nbsp;
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    </Layout>
  );
};
