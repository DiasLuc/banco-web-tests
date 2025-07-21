describe('Login', () => {
  beforeEach(() => {
    //  Arrange
    cy.visit('/')
    cy.screenshot('after-opening-page')
  })
  it('Login with valid data should allow entrance into the system', () => {
    //  Act
    cy.loginWithValidCredentials()
    cy.screenshot('after-clicking-enter-button')

    //  Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

  it('Login with invalid data should show error message', () => {
    //  Act
    cy.loginWithInvalidCredentials()

    //  Assert
    cy.verifyToastMessage('Erro no login. Tente novamente.')
    
  })
})