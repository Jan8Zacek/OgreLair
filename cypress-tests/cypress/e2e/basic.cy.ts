import homePage from "../pages/homePage"
import navMenuComponent, { navMenuItem } from "../pages/components/navMenuComponent"

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

    navMenuComponent.navigace(navMenuItem.WARHAMMER40000)
    navMenuComponent.navigace(navMenuItem.AGEOFSIGMAR)
    navMenuComponent.navigace(navMenuItem.OSTATNIMINIATURY)
    navMenuComponent.navigace(navMenuItem.VAMPIRE)
    navMenuComponent.navigace(navMenuItem.KNIHY)
    navMenuComponent.navigace(navMenuItem.BARVYATD)
    navMenuComponent.navigace(navMenuItem.HERNIDOPLNKY)
    navMenuComponent.navigace(navMenuItem.VYPRODEJ)
  })


})