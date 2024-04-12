describe('Department Creation', () => {
  beforeEach(() => {
    // Navigate to the login page
    cy.visit('http://localhost:5173/login');
    cy.get('#Email').type('admin@example.com');
    cy.get('#Password').type('adminPassword');
    cy.get('button').contains('Login').click();

    // After successful login, navigate to the department creation form
    cy.visit('http://localhost:5173/department-form');
  });

  it('allows a user to create a department with an image', () => {
    // Fill in the department name
    cy.get('#Name').type('Orthology');

    // Handle file upload if your form includes an image upload input
    const filepath = 'image.png' ; // Ensure this is the correct path relative to your project's root
    cy.get('#Icon').attachFile(filepath);

    // Submit the form
    cy.get('button').contains('Create New Department').click();

    // Verify the department was created by checking if it is listed
    cy.visit('http://localhost:5173/departmentpage');
    cy.contains('Orthology').should('be.visible'); // Verify the new department appears

    // Verify the image is displayed, check that the src includes the path to the upload
    cy.contains('Orthology').parent().find('img').should('have.attr', 'src').should('include', 'uploads');
  });
});
