export default new class objednavka2Page {
    loginAccount = () => cy.get('a.btn btn-secondary')

    nameInput = () => cy.get('input[id="billFullName"]')
    emailInput = () => cy.get('input[id="email"]')
    phoneInput = () => cy.get('input[id="phone"]')

    adressInput = () => cy.get('input[id="billStreet"]')
    cityInput = () => cy.get('input[id="billCity"]')
    zipInput = () => cy.get('input[id="billZip"]')

    


    VyplneniAdresy(celeJmeno, emailAdress, phoneNumber, streetName, cityName, zipCode) {
        this.nameInput().clear().type(celeJmeno)
        this.emailInput().clear().type(emailAdress)
        this.phoneInput().clear().type(phoneNumber)
        this.adressInput().clear().type(streetName)
        this.cityInput().clear().type(cityName)
        this.zipInput().clear().type(zipCode)
    }
 }