describe('Edit Patient Page', () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get("#Email").type("admin@example.com");
    cy.get("#Password").type("admin@123");
    cy.get("button").contains("Login").click();

    cy.url().should("include", "/apppage");
    cy.contains("Resource and User Management").click();

    cy.url().should("include", "/resource-management");
    cy.contains("Patients").click();
    cy.url().should("include", "/all-patients");
  });

  it('allows an admin to edit the first patient', () => {
    // Ensure the table is visible and has at least one entry
    cy.get("table").should("be.visible").find("tr").its('length').should('be.gt', 1);

    // Click the edit button on the first patient found
    cy.get("table tbody tr").first().within(() => {
      cy.get("button").contains("Edit").click();
    });

    cy.url().should("include", "/edit-patient");

    // Clear and type new name for the patient
    cy.get('#patientName').clear().type('John Doe');
    cy.get('#patientName').should('have.value', 'John Doe');

    // Save the changes
    cy.get('button').contains('Save').click();

    cy.url().should("include", "/all-patients");

    cy.contains('John Doe').should('exist');
  });
});
