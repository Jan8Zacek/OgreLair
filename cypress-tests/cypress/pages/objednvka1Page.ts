export default new class objednavka1Page {
    continue = () => cy.get('button[data-testid="buttonNextStep"]')

    pokracovatKPlatbe() {
        this.continue().should('be.visible').click()
    }
}