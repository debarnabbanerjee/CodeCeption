
'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    firstReservationItem: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]",
    reservationSearchBar: "/html/body/div[1]/div/div[5]/div/div[1]/form/input",

    // introducing methods
    verifyReservationPageUI(){
        I.seeElement(this.reservationSearchBar);
    },

    clickOnFirstReservationItem() {
        I.click(this.firstReservationItem);
    }
}
