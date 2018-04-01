
Feature('Reservation Page Tests');

Scenario('Reservation Page UI @UI', async (I, loginPage, calendarPage, reservationPage) => {
     I.amOnPage('/');
	 loginPage.doLogin('banerjed','California0!');
	 I.wait(2);
	 I.seeTitleEquals('Calendar - base7');
	 calendarPage.clickReservation();
     I.wait(2);
	 I.seeTitleEquals('Reservations - base7');
	 reservationPage.verifyReservationPageUI();
});

Scenario('First Reservation Details Page UI @UI', async (I, loginPage, calendarPage, reservationPage, reservationDetailsPage) => {
    reservationPage.storeFirstReservationElements();
    reservationPage.clickOnFirstReservationItem();
    I.wait(2);
    reservationDetailsPage.verifyReservationDetailsPageUI();
});

Scenario('Test the functionality of the Latest Reservation Item', async (I, loginPage, calendarPage, reservationPage, reservationDetailsPage) => {





});

