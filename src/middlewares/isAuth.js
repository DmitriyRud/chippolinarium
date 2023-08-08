function isAuth(req, res, next) {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/adminPanel');
  }
}

function isNoAuth(req, res, next) {
  if (!req.session.email) {
    next();
  } else {
    res.redirect('/accountPanel');
  }
}
module.exports = { isAuth, isNoAuth };
