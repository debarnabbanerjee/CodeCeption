
Feature('To Test the Reservation');

Scenario('To Display the proper behaviour of the Reservation Page', async (I, loginPage, calendarPage, reservationPage) => {
     I.amOnPage('/');
	 loginPage.doLogin('banerjed','California0!');
	 I.wait(2);
	 I.seeTitleEquals('Calendar - base7');
	 calendarPage.clickReservation();
     I.wait(2);
	 I.seeTitleEquals('Reservations - base7');
   //  I.seeElement('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');

	 var number = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
	 var client = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[2]');
	var dates = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[3]');
	var created = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]');
	var source = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[5]');
	var room = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[6]');
	var prereservation = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[7]/div');

    console.log('number is ' + number);
    console.log('client is ' + client);
    console.log('dates is ' + dates);
    console.log('created is ' + created);
    console.log('source is ' + source);
    console.log('roomType is ' + room);
	console.log('prereservation is ' + prereservation);

	 I.click('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
	 //reservationPage.clickOnFirstReservation();
     I.waitForElement('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b', 2);

     var clientText = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b');
     console.log('Client Text is ' + clientText);
     I.see(clientText, {xpath: '/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b'});

     var roomType = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[6]/div[3]/div[2]/table/tbody/tr[1]/td[1]');
	 I.see(roomType, {xpath: '/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[6]/div[3]/div[2]/table/tbody/tr[1]/td[1]'});

});
