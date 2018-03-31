'use strict';
let I;

module.exports = {

  _init() {
   I = actor();
  },

  // insert your locators and methods here
    fields: {
        username: '.content > form:nth-child(1) > input:nth-child(1)',
        password: '.content > form:nth-child(1) > input:nth-child(2)'
    },
    loginButton: {css: '.login-button'},

    // introducing methods
    doLogin(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    }
}
