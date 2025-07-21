describe('Login', () => {
  beforeEach(() => {
    //  Arrange
    cy.visit(Cypress.env('URL'))
    cy.screenshot('after-opening-page')
  })
  it('Login with valid data should allow entrance into the system', () => {
    

    //  Act
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.valid.username)
      cy.get('#senha').click().type(credentials.valid.senha)
    })
    cy.screenshot('after-filling-valid-credentials')
    // One way of getting button
    cy.get('#login-section > .btn').click()
    cy.screenshot('after-clicking-enter-button')

    //  Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

  it('Login with invalid data should show error message', () => {
    //  Act
    cy.fixture('credentials').then(credentials => {
      cy.get('#username').click().type(credentials.invalid.username)
      cy.get('#senha').click().type(credentials.invalid.senha)
    })
    // Different way of getting button, but easier to tell which button it is without having id
    cy.contains('button', 'Entrar').click()

    //  Assert
    cy.get('.toast.red').should('have.text', 'Erro no login. Tente novamente.')
    
  })
})