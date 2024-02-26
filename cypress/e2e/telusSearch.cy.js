describe("Test search functionality", () => {
  it("passes", () => {
    // set view port
    cy.viewport(1800, 1200);
    // website to visit
    cy.visit("https://www.telus.com");
    // click on the search button
    cy.get("#search-button").click();
    // type internet in the search input
    cy.get('[data-test="search-input"]').type("internet").wait(500);
    // assert that the 3rd search result contains the word 'internet'
    // cy.get('.sc-lizKOf > :nth-child(3) > .sc-ggpjZQ')
    //   .should('contain', 'internet')
    //   .and('match', /internet/)
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include("internet");
      });
    // click on the thrird search result
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ").click();

  });
});
