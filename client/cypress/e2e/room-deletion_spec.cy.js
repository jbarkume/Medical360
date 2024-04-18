describe("Room Deletion Tests", () => {
  beforeEach(() => {
    cy.visit("https://medical360-d65d823d7d75.herokuapp.com/login");
    cy.get("#Email").type("admin@example.com");
    cy.get("#Password").type("admin@123");
    cy.get("button").contains("Login").click();

    cy.url().should("include", "/apppage");
    cy.contains("Resource and User Management").click();

    cy.url().should("include", "/resource-management");
    cy.contains("Rooms").click();
    cy.url().should("include", "/all-rooms");
  });

  it('allows an admin to delete "Room 120"', () => {
    cy.get("table").should("be.visible");

    cy.contains("td", "Room 120")
      .parents("tr")
      .within(() => {
        cy.get("td")
          .last()
          .find("div")
          .within(() => {
            cy.get("button").contains("Delete").click();
          });
      });

    cy.get("button.bg-red-600").should("be.visible").click();

    cy.contains("td", "Room 120").should("not.exist");
  });
});
