
'use strict';

let I;

module.exports = {

  _init() {
      I = actor();
  },
  // insert your locators and methods here
    fields: {
    },
    Reservation: {css: 'div.item:nth-child(5) > div:nth-child(1)'},
    logOutButton: {xpath: '/html/body/div[1]/div/div[2]/div/div[3]/div/div/div[3]/div/div[2]/div/button[4]'},

    // introducing methods
    doLogOut() {
        I.click(this.logOutButton);
    },

    clickReservation() {
        I.click(this.Reservation);
    }
}
