export default new class productAddedModalComponent {
    modal = () => cy.get('div.shoptet-modal-lg')
    
    pokracovaniButton = () => this.modal().find('button[data-testid="buttonPopupBack"]')
    doKosikuButton = () => this.modal().find('a[data-testid="buttonPopupCart"]')
    zavrit = () => this.modal().find('button[id="cboxClose"]')

    modalPokracovat() {
        this.pokracovaniButton().should('be.visible').click()
    }

    modalDoKosiku() {
        this.doKosikuButton().should('be.visible').click()
    }

    modalZavrit() {
        this.zavrit().should('be.visible').click()
    }
}