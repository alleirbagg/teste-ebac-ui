///<reference types="cypress" />
const perfil = require ('../fixtures/perfil.json')
context('Funcionalidade Login', () =>{

beforeEach(() => {
    cy.visit('minha-conta/')
});

afterEach(() => {
        cy.screenshot()
});

    it('Deve fazer login com sucesso', () => {
            
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
            
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
})

it('Deve fazer login com sucesso - Usando fixture', () => {
          
        cy.fixture('perfil').then(dados => {
                cy.get('#username').type(dados.usuario)
                cy.get('#password').type(dados.senha, {log:false}) 
                // log false é utilizado para não exibir a senha durante a execução
                cy.get('.woocommerce-form > .button').click()
        
                cy.get('.page-title').should('contain', 'Minha conta')
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')    
        })
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