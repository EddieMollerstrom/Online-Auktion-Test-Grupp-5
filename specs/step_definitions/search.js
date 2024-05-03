import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/*
Jakob 
*/

Given("I am on the homepage", () => {
  cy.visit("/");
  cy.get(".gap-12 > .items-center").should("exist");
});

When("I click on search bar", () => {
  cy.get("#search").click();
});

Then("I search for {string}", (searchString) => {
  cy.get("#search").type(searchString);
});

Then("I should see product", () => {
  cy.get(
    '[href="/product-info/6634aab19a34f763ff85c5f1"] > .gap-1 > .flex > .text-xl'
  ).should("exist");
});
