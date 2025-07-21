Cypress.Commands.add('verifyToastMessage', (message) => {
    cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectOptionInCombobox', (fieldLabel, option) => {
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`input-field-${fieldLabel}`)
    cy.get(`@input-field-${fieldLabel}`).click()
    cy.get(`@input-field-${fieldLabel}`).contains(option).click()
})