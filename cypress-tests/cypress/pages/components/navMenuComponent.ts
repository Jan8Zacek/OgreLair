export default new class navMenuComponent {
    menuWrapper = () => cy.get('[data-testid="headerMenuItems"]').find('li')
    navItem = () => this.menuWrapper().find('a[data-testid="headerMenuItem"]')

    navigace(category: navMenuItem) {
        this.navItem().contains(String(category)).should('be.visible').click()

    }

}

export enum navMenuItem {
    WARHAMMER40000 = 'Warhammer 40.000',
    AGEOFSIGMAR = 'Warhammer Age of Sigmar',
    OSTATNIMINIATURY = 'Ostatní Miniatury',
    VAMPIRE = 'Vampire the Eternal Struggle',
    KNIHY = 'Knihy Black Library',
    BARVYATD = 'Barvy a modelářství',
    HERNIDOPLNKY = 'Herní doplňky',
    VYPRODEJ = 'Výprodej',
    VOUCHERS = 'Dárkové poukazy'
}