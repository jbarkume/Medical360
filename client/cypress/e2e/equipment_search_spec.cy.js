describe('Search Equipment Page Tests', () => {
  beforeEach(() => {
    cy.visit('/all-equipments'); 
  });

  it('allows users to filter equipments', () => {
    cy.get('input[data-cy=search-bar]').should('be.visible');
    cy.get('[data-cy=search-button]').should('be.visible');

    cy.get('input[data-cy=search-bar]').type('ECG Machine 5');

    cy.get('[data-cy=search-button]').click();

    cy.url().should('include', '/all-equipments');

   
    cy.get('[data-cy^="equipment-"]').should('have.length', 1);
    cy.get('[data-cy^="equipment-"]').first().should('contain', 'ECG Machine 5');

   
    
  });

 
});
