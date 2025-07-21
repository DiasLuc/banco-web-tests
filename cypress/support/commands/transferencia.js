Cypress.Commands.add('makeTransfer', (senderAcct, receiverAcct, value) => {
    cy.selectOptionInCombobox('conta-origem', senderAcct)
    cy.selectOptionInCombobox('conta-destino', receiverAcct)

    cy.get('#valor').type(value)

    cy.contains('button', 'Transferir').click()
})