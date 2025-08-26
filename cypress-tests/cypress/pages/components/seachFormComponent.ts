export default new class SearchFormComponent {
    private formWrapper = () => cy.get('form[data-testid="searchForm"]')
    private searchInput = () => this.formWrapper().find('input[data-testid="searchInput"]')
    private searchButton = () => this.formWrapper().find('button[data-testid="searchBtn"]')

    searchForProduct(productName: string) {
        this.searchInput().should('be.visible').clear().type(productName)
        this.searchButton().should('be.visible').click()
    }
}