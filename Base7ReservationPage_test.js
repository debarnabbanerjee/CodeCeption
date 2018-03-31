
Feature('My Store Login');

Scenario('Test the booking of Woman TShirts', async (I) => {
	 I.amOnPage('/');
	 I.seeTitleEquals('Login - base7');
	 I.fillField('.content > form:nth-child(1) > input:nth-child(1)', 'banerjed');
	 I.fillField('.content > form:nth-child(1) > input:nth-child(2)', 'California0!');
	 I.click('.login-button');
	 I.wait(2);
	 I.seeTitleEquals('Calendar - base7');
	 I.wait(2);
	 I.click('div.item:nth-child(5) > div:nth-child(1) > div:nth-child(1)');
	 I.seeTitleEquals('Reservations - base7');
	 I.wait(2);
	 I.seeElement('/html/body/div[1]/div/div[5]/div/div[1]/form/input');

	 I.seeTitleEquals('Reservations - base7');
	 I.seeElement('/html/body/div[1]/div/div[5]/div/div[1]/form/input');

	 var number = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
	 var client = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[2]');
	 let dates = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[3]');
	 let created = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]');
	 let source = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[5]');
	 let room = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[6]');
	 let prereservation = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[7]/div');

    console.log('number is ' + number);
    console.log('client is ' + client);
    console.log('dates is ' + dates);
    console.log('created is ' + created);
    console.log('source is ' + source);
    console.log('roomType is ' + room);
	console.log('prereservation is ' + prereservation);

	 I.click('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
     I.waitForElement('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b', 2);

     var clientText = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b');
     console.log('Client Text is ' + clientText);
     I.see(clientText, {xpath: '/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b'});

     var roomType = await I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[6]/div[3]/div[2]/table/tbody/tr[1]/td[1]');
	 I.see(roomType, {xpath: '/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[6]/div[3]/div[2]/table/tbody/tr[1]/td[1]'});

});
