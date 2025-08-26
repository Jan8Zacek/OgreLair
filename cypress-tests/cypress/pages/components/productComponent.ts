export default class productComponent {

    private productId : String

    constructor(productId:string){
        this.productId = productId
    }

    productWrapper = () => cy.get(`div[data-micro-product-id="${this.productId}"]`)
    nazevProduktu = () => this.productWrapper().find('span[data-testid="productCardName"]')
    cenaProduktu = () => this.productWrapper().find('div[data-testid="productCardPrice"]')
    buttonDoKosiku = () => this.productWrapper().find('button[data-testid="buttonAddToCart"]')

    pridatDoKosiku() {
        this.buttonDoKosiku().should('be.visible').click()


    }


    
}