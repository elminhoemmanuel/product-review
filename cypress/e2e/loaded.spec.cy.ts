describe('Page Load', () => {
  it('properly loads the app landing page', () => {
    cy.visit('http://localhost:3001');
    cy.get('[data-testid="button"]').should('contain', 'Submit');
  })
})