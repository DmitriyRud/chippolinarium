const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ categories }) {
  return (
    <Layout categories={categories}>
      <script defer src="/js/adminPanel.js" />
      <div className="login_container">
        <form id="logForm" name="logName">
          <h2>Войдите на сайт</h2>
          <hr />

          <p className="paragraph"></p>
          <h3 className="logMsg"> </h3>
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
          />
          <br />
          <label htmlFor="Password" className="form-label">
            Password
          </label>

          <input
            name="password"
            type="password"
            className="form-control"
            id="Password"
          />
          <br />
          <button type="button" className="btn button_price">
            Отправить
          </button>
        </form>
        <hr />
        
      </div>
    </Layout>
  );
};
