import homePage from "../pages/homePage";
import loginData from "../fixtures/loginData.json";

describe('Testy prihlaseni', () => {
        
    beforeEach(() => {    
        cy.setCookie('CookiesConsent', '{"consent":"analytics,personalisation","cookieId":"dql1rnkvpveek25qqq7upae2m4qogk8s"}')
        cy.visit('')
    }) 

    it('Nespravne heslo', () => {
        homePage.loginFunkce(loginData.validEmail,loginData.invalidHeslo)
        homePage.errorMessage().should('be.visible')
    });

    it('Nespravny email', () => {
        homePage.loginFunkce(loginData.invalidEmail,loginData.invalidHeslo)
        homePage.errorMessage().should('be.visible')
    });

    it('Spravne udaje', () => {
        homePage.loginFunkce(loginData.validEmail,loginData.validHeslo)
        cy.url().should('include','klient/')
        homePage.logoutButton().click()
    });
    
});