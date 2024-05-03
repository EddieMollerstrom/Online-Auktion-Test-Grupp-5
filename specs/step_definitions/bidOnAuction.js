import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/*
Eddie
*/

Given("That I am logged in", () => {
  cy.url().should("include", "/MyPages");
});

When("I go to homepage", () => {
  cy.get("#logo").click();
  cy.get(".gap-12 > .items-center").should("exist");
});

Then("I press on a auction", () => {
  cy.get(
    '[href="/product-info/6633351e81d8e845a1a6d9c0"] > .gap-1 > .bg-contain'
  ).click();
  cy.url().should("include", "6633351e81d8e845a1a6d9c0");
});

Then("I press on lägg bud", () => {
  cy.get(".h-80 > .flex > .bg-custom-green").click();
  cy.get("#bidDialog").should("exist");
});

Then("I add a Bid", () => {
  cy.get("#bidDialogInput").type("600");
  cy.get("#addBidDialog").click();
  cy.reload();
});

Then("I should see it on the auction page", () => {
  cy.get(".h-80 > :nth-child(1) > :nth-child(6)").contains("600");
});
