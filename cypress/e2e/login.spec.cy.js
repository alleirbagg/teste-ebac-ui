///<reference types="cypress" />

context('Funcionalidade Login', () =>{

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    it('Deve fazer login com sucesso', () => {
            
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    })

    // Para rodar teste único, utilizar 'it.only'

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
            
            cy.get('#username').type('usuarioinvalido@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
       
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhainvalida')
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.woocommerce-error > li >').should('contain','Erro')
})


})