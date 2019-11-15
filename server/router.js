/* eslint-disable linebreak-style */
const controllers = require('./controllers');
const mid = require('./middleware');

/*
    * connect as many middleware calls as you want in the order you want the middleware
        to run
    * first parameter is always the URL, last parameter always the controller
    *Everything in between is any of the middleware operations you want to call
*/
const router = (app) => {
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/maker', mid.requiresLogin, controllers.Data.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Data.make);

  app.get('/account', mid.requiresLogin, controllers.Account.accountPage);
  app.post('/changePassword', mid.requiresLogin, controllers.Account.changePassword);

  app.get('/data', mid.requiresLogin, controllers.Data.dataPage);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
