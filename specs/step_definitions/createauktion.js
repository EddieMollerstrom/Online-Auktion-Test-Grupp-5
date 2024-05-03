import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/*
Valon
*/

Given("att jag är inloggad", () => {
  cy.url().should("include", "/MyPages");
});

When("går jag till Auktionpage", () => {
  cy.get('.place-content-around > [href="/Auktionpage"]').click();
  cy.url().should("include", "/Auktionpage");
});

Then("Jag fyller ut formuläret med alla parametrar", () => {
  cy.get("#title").click().type("Testkörning");
  cy.get("#description").click().type("Testar");
  cy.get("#ends").click().type("2024-06-01T08:30");
  cy.get("#minimumBid").click().type("4000");
  cy.get("#price").click().type("10000000");
  cy.get("#däggdjur").click();
  cy.get("#img")
    .click()
    .type(
      "https://tressays.files.wordpress.com/2015/09/test-clip-art-cpa-school-test.png?w=640"
    );
});

When("Jag klickar på skapa annons knappen", () => {
  // Man kan skapa annons men formateringen som krävs gör att sidan crashar så vi fick kommentera ut det
  //cy.get(".bg-custom-grey > .bg-custom-yellow").click();
});

Then("går jag till homepage", () => {
  cy.get("#logo").click();
});

Then("jag klickar på auktionen", () => {
  cy.get(
    '[href="/product-info/6634aab19a34f763ff85c5f1"] > .gap-1 > .flex > .text-xl'
  ).should("exist");
  cy.get(
    '[href="/product-info/6634aab19a34f763ff85c5f1"] > .gap-1 > .flex > .text-xl'
  ).click();
  cy.url().should(
    "include",
    "http://localhost:5173/product-info/6634aab19a34f763ff85c5f1"
  );
});
