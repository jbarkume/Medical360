
describe('Department Creation', () => {
  beforeEach(() => {
    cy.visit('https://medical360-d65d823d7d75.herokuapp.com/login');
    cy.get('#Email').type('admin@example.com');
    cy.get('#Password').type('admin@123');
    cy.get('button').contains('Login').click();
    
    // After successful login, navigate to the department creation form
    cy.url().should('include', '/apppage'); // Ensure we're on the app page
    
    // Navigate to departments using the new `data-cy` attribute
    cy.contains('Departments').click();

    cy.url().should('include', '/departmentpage'); // Ensure we're on the department page

    // Click on create department button
    cy.get('button').contains('Create Department').click();

    cy.url().should('include', '/department-form');
  });

  it('allows a user to create a department with an image', () => {
    cy.get('#Name').type('Orthology');

    const filepath = 'image.png'; // Ensure the file path is correct
    cy.get('#Icon').attachFile(filepath);

    cy.get('button').contains('Create New Department').click();
    
    cy.visit('https://medical360-d65d823d7d75.herokuapp.com/departmentpage');
    cy.contains('Orthology').should('be.visible');
    cy.contains('Orthology').parent().find('img').should('have.attr', 'src').should('include', 'uploads');
    // Assume 'Orthology' is the department name you want to delete
   

  });
});
