import homePage from "../pages/homePage"

describe('HTML Testy', () => {

  beforeEach(() => {    
    cy.setCookie('CookiesConsent', '{"consent":"analytics,personalisation","cookieId":"dql1rnkvpveek25qqq7upae2m4qogk8s"}')
    cy.visit('')
  }) 


  it('Kontrola ovladacich prvku', () => {


    homePage.homeLogo().should('be.visible')
    homePage.kontaktEmail().should('be.visible')
    homePage.telCislo().should('be.visible')
    homePage.login().should('be.visible')
    homePage.searchBar().should('be.visible')

    


  })


})