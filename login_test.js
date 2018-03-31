
Feature('Login');

Scenario('Postive Login', (I, loginPage, calendarPage) => {
    I.amOnPage('/');
    loginPage.doLogin('banerjed','California0!');
    I.wait(2);
    I.seeTitleEquals('Calendar - base7');
    calendarPage.doLogOut();
});

Scenario('Negative Login', (I, loginPage) => {
    I.amOnPage('/');
    loginPage.doLogin('banerjed1','California0!1');
    I.wait(2);
    I.seeTitleEquals('Login - base7');
    I.see('Invalid Credentials');
});

