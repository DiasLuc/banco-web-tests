describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidCredentials()
        
    })
    it('Should transfer when input valid data and values', () => {
        
        // // Original version: 
        // cy.get('label[for="conta-origem"]').parent().as('input-field-conta-origem')
        // cy.get('@input-field-conta-origem').click()
        // cy.get('@input-field-conta-origem').contains('Maria Oliveira com saldo de').click()

        // With selectOptionInCombobox custom command (superseded by makeTransfer):
        // cy.selectOptionInCombobox('conta-origem', 'Maria Oliveira')

        // Old version:
        // cy.get('label[for="conta-destino"]').parent().as('input-field-conta-destino')
        // cy.get('@input-field-conta-destino').click()
        // cy.get('@input-field-conta-destino').contains('João da Silva com saldo de').click()

        // With selectOptioninCombobox custom command (superseded by makeTransfer):
        // cy.selectOptionInCombobox('conta-destino', 'João da Silva')

        // cy.get('#valor').type('12.50')

        // cy.contains('button', 'Transferir').click()

        cy.makeTransfer('Maria Oliveira', 'João da Silva', 13.53)
         cy.verifyToastMessage('Transferência realizada!')
    })

    it('Should show error when attempting to transfer more than R$5000 without a token', () => {
        // // Before makeTransfer custom command
        // cy.selectOptionInCombobox('conta-origem', 'Maria Oliveira')
        // cy.selectOptionInCombobox('conta-destino', 'João da Silva')

        // cy.get('#valor').type('5000.01')

        // cy.contains('button', 'Transferir').click()

        cy.makeTransfer('Maria Oliveira', 'João da Silva', 5000.01)

         cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})