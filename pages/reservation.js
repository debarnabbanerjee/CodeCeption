
'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    reservationSearchBar: "/html/body/div[1]/div/div[5]/div/div[1]/form/input",
    reportsOfArrival: "/html/body/div[1]/div/div[5]/div/div[1]/div[2]/button",
    reservationHistory: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[1]/td/div/button",

    // first reservation labels
    firstReservationNumber: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]",
    firstReservationClient: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[2]",
    firstReservationDates: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[3]",
    firstReservationCreated: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]",
    firstReservationSource: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]",
    firstReservationRoom: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[7]/div",

    // Recently Viewed
    RecentlyViewedLabel: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]",
    RecentlyViewedNumber: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[1]",
    RecentlyViewedClient: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[2]",
    RecentlyViewedDates: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[3]",
    RecentlyViewedCreated: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[4]",
    RecentlyViewedSource: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[5]",
    RecentlyViewedRooms: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[6]",
    RecentlyViewedStatus: "/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[12]/th[7]",

    // introducing methods
    verifyReservationPageUI(){

        // Reservation Details Table
        I.seeElement(this.reservationSearchBar);
        I.seeElement(this.firstReservationNumber);
        I.seeElement(this.reportsOfArrival);
        I.seeElement(this.reservationHistory);
        I.seeElement(this.firstReservationClient);
        I.seeElement(this.firstReservationDates);
        I.seeElement(this.firstReservationCreated);
        I.seeElement(this.firstReservationSource);
        I.seeElement(this.firstReservationRoom);

        // Recently Viewed
        I.seeElement(this.RecentlyViewedLabel);
        I.seeElement(this.RecentlyViewedNumber);
        I.seeElement(this.RecentlyViewedClient);
        I.seeElement(this.RecentlyViewedDates);
        I.seeElement(this.RecentlyViewedCreated);
        I.seeElement(this.RecentlyViewedSource);
        I.seeElement(this.RecentlyViewedRooms);
        I.seeElement(this.RecentlyViewedStatus);
    },

    // Function which stores the values of the first reservation row.
    storeFirstReservationElements: async () => {
        var number = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
        var client = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[2]');
        var dates = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[3]');
        var created = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]');
        var source = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[5]');
        var room = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[6]');
        var prereservation = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[7]/div');

        console.log('client is ' + client);
        console.log('dates is ' + dates);
        console.log('created is ' + created);
        console.log('source is ' + source);
        console.log('roomType is ' + room);
        console.log('prereservation is ' + prereservation);
    },

    // Function for clicking on the first reservation detail.
    clickOnFirstReservationItem() {
        I.click(this.firstReservationNumber);
    }




}
