export default new class objednavka2Page {
    loginAccount = () => cy.get('a.btn btn-secondary')

    nameInput = () => cy.get('input[id="billFullName"]')
    emailInput = () => cy.get('input[id="email"]')
    phoneInput = () => cy.get('input[id="phone"]')

    adressInput = () => cy.get('input[id="billStreet"]')
    cityInput = () => cy.get('input[id="billCity"]')
    zipInput = () => cy.get('input[id="billZip"]')


    VyplneniAdresy() {
        this.nameInput().clear().type('Petr Novak')
        this.emailInput().clear().type('email@email.cz')
        this.phoneInput().clear().type('123456789')
        this.adressInput().clear().type('Sokolovska 25/18')
        this.cityInput().clear().type('Praha 8')
        this.zipInput().clear().type('186 00')
    }
 }