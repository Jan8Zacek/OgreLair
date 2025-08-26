export default new class kosikPage {
    pokracovatVNakupu = () => cy.get('span[continue-shopping]')
    pokracovatVObjednavce = () => cy.get('a[data-testid="buttonNextStep"]')

    pokracovaniNakupu () {
        this.pokracovatVNakupu().should('be.visible').click()
    }

    pokracovaniObjednavky() {
        this.pokracovatVObjednavce().should('be.visible').click()
    }

}