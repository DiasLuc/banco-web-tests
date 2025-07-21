Cypress.Commands.add('loginWithValidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
        cy.get('#username').click().type(credentials.valid.username)
        cy.get('#senha').click().type(credentials.valid.senha)
      })
      cy.screenshot('after-filling-valid-credentials')
      // One way of getting button
      cy.get('#login-section > .btn').click()
})

Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.fixture('credentials').then(credentials => {
        cy.get('#username').click().type(credentials.invalid.username)
        cy.get('#senha').click().type(credentials.invalid.senha)
      })
      // Different way of getting button, but easier to tell which button it is without having id
      cy.contains('button', 'Entrar').click()
})