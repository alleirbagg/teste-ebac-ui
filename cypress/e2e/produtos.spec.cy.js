///<reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first() > Se eu quiser pegar o primeiro produto
            // .last() > Se eu quiser pegar o último
            // .eq(3) > Se eu quiser escolher por número, o primeiro é "0"
            // .contains > Se eu quiser escolher por nome do produto
            .contains('Atlas Fitness Tank')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Argus All-Weather Tank', 'M', 2)
    });


});