describe('Search Room Page Tests', () => {
  beforeEach(() => {
    cy.visit('/all-rooms'); 
  });

  it('allows users to filter rooms', () => {
    cy.get('input[data-cy=search-bar]').should('be.visible');
    cy.get('[data-cy=search-button]').should('be.visible');

    cy.get('input[data-cy=search-bar]').type('101');

    cy.get('[data-cy=search-button]').click();

    cy.url().should('include', '/all-rooms');

   
    cy.get('[data-cy^="room-"]').should('have.length', 1);
    cy.get('[data-cy^="room-"]').first().should('contain', '101');

   
    cy.get('[data-cy^="room-"]').should('not.contain', '102');
    cy.get('[data-cy^="room-"]').should('not.contain', '103');
  });

 
});
