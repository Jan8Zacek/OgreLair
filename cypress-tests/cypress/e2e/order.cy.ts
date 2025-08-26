import homePage from "../pages/homePage";
import navMenuComponent, { navMenuItem } from "../pages/components/navMenuComponent";
import seachFormComponent from "../pages/components/seachFormComponent";
import productComponent from "../pages/components/productComponent";
import productAddedModalComponent from "../pages/components/productAddedModalComponent";
import kosikPage from "../pages/kosikPage";
import objednvka1Page from "../pages/objednvka1Page";
import objednavka2Page from "../pages/objednavka2Page";

describe('Objednavka', () => {
    beforeEach(() => {    
        cy.setCookie('CookiesConsent', '{"consent":"analytics,personalisation","cookieId":"dql1rnkvpveek25qqq7upae2m4qogk8s"}')
        cy.visit('')
    }) 


    it('Objednani a vyplneni adresy', () => {
        seachFormComponent.searchForProduct(Cypress.env('productName'))

        const product = new productComponent(Cypress.env('productId'))
        product.pridatDoKosiku()

        productAddedModalComponent.modalDoKosiku()

        kosikPage.pokracovaniObjednavky()

        objednvka1Page.pokracovatKPlatbe()

        objednavka2Page.VyplneniAdresy()

        //objednavka se neodesila, necheme zbytecne delat zmatek v eshopu






        
    });
    
});