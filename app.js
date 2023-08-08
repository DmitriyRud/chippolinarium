require('@babel/register');
require('dotenv').config();

const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { isAuth } = require('./src/middlewares/isAuth');

const indexRouter = require('./src/routers/indexRouter');
const contactsRouter = require('./src/routers/contactsRouter');
const feedBackRouter = require('./src/routers/feedbackRouter');
const accountPanelRouter = require('./src/routers/accountPanelRouter');
const deliveryRouter = require('./src/routers/deliveryRouter');
const catalogRouter = require('./src/routers/catalogRouter');
const modalRouter = require('./src/routers/modalRouter');
const aboutRouter = require('./src/routers/aboutRouter');
const adminPanel = require('./src/routers/adminPanelRouter');

const sessionConfig = {
  name: process.env.COOKIE_NAME,
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999999,
    httpOnly: true,
  },
};
const app = express();
const { PORT, HTTPS_PORT } = process.env;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use('/uploads', express.static('uploads'));

// Add middleware to redirect HTTP requests to HTTPS
app.use((req, res, next) => {
  if (!req.secure && req.protocol !== 'https') {
    const { host } = req.headers;
    const parts = host.split(':');
    const hostname = parts[0];
    res.redirect(`https://${hostname}${req.url}`);
  } else {
    next();
  }
});

app.use('/', indexRouter);
app.use('/contacts', contactsRouter);
app.use('/feedback', feedBackRouter);
app.use('/accountPanel', isAuth, accountPanelRouter);
app.use('/delivery', deliveryRouter);
app.use('/catalog', catalogRouter);
app.use('/about', aboutRouter);
app.use('/adminPanel', adminPanel);
app.use('/modalpice', modalRouter);

app.get('/404', (req, res) => {
  res.send('Page not found');
});

// HTTPS server configuration
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '/certs/privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/certs/fullchain.pem')),
};

// Create the HTTPS server
const httpsServer = https.createServer(httpsOptions, app);

// Start both HTTP and HTTPS servers to handle both protocols
http.createServer(app).listen(PORT, () => {
  console.log(`HTTP server started on PORT: ${PORT}`);
});

httpsServer.listen(443, () => {
  console.log(`HTTPS server started on PORT: ${HTTPS_PORT}`);
});
