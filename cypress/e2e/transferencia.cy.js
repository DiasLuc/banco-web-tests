describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credentials').then(credentials => {
            cy.get('#username').click().type(credentials.valid.username)
            cy.get('#senha').click().type(credentials.valid.senha)
        })
        cy.contains('button', 'Entrar').click()
        
    })
    it('Should transfer when input valid data and values', () => {
        cy.get('label[for="conta-origem"]').parent().as('input-field-conta-origem')
        cy.get('@input-field-conta-origem').click()
        cy.get('@input-field-conta-origem').contains('Maria Oliveira com saldo de').click()

        cy.get('label[for="conta-destino"]').parent().as('input-field-conta-destino')
        cy.get('@input-field-conta-destino').click()
        cy.get('@input-field-conta-destino').contains('João da Silva com saldo de').click()

        cy.get('#valor').type('12.50')

        cy.contains('button', 'Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})