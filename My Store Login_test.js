
Feature('My Store Login');

Scenario('Test the booking of Woman TShirts', (I) => {
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

	 let number = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');
	 let client = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[2]');
	 let dates = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[3]');
	 let created = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[4]');
	 let source = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[5]');
	 let roomType = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[6]');
	 let prereservation = I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[7]/div');

	I.click('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/table/tbody/tr[3]/td[1]');

    let clientText;
    function* generator(i) {
        clientText = yield I.grabTextFrom('/html/body/div[1]/div/div[5]/div/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span/b');
     }

    console.log('Client Text is ' + clientText);

});
