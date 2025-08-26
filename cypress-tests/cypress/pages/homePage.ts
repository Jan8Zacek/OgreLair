export default new class HomePage {

    homeLogo = () => cy.get('a[data-testid="linkWebsiteLogo"]')
    telCislo = () => cy.get('a[data-testid="contactboxPhone"]')
    kontaktEmail = () => cy.get('a[data-testid="contactboxEmail"]')
    login = () => cy.get('a[data-testid="signin"]')

    searchBar = () => cy.get('input[data-testid="searchInput"]')
    searchButton = () => cy.get('button[data-testid="searchBtn"]')
    
    emailInput = () => cy.get('input[data-testid="inputEmail"]')
    hesloInput = () => cy.get('input[data-testid="inputPassword"]')
    
    loginButton = () => cy.get('button[data-testid="buttonSubmit"]')
}