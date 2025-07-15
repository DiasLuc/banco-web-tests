describe('Login', () => {
  beforeEach(() => {
    //  Arrange
    cy.visit('http://localhost:4000')
  })
  it('Login with valid data should allow entrance into the system', () => {
    

    //  Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    // One way of getting button
    cy.get('#login-section > .btn').click()

    //  Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

  it('Login with invalid data should show error message', () => {
    //  Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('incorrectpass')
    // Different way of getting button, but easier to tell which button it is without having id
    cy.contains('button', 'Entrar').click()

    //  Assert
    cy.get('.toast.red').should('have.text', 'Erro no login. Tente novamente.')
    
  })
})