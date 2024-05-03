import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* 
Joel 
*/

Given("That I am on the first page", () => {
  cy.visit("/");
  cy.get(".gap-12 > .items-center").should("exist");
});

When("I click on the login button on the homepage", () => {
  cy.get(".bg-custom-yellow").click();
});

Then("I type my username", () => {
  cy.get('.bottom-5 > [type="text"]').click();
  cy.get('.bottom-5 > [type="text"]').type("joel");
});

Then("I type my password", () => {
  cy.get('.bottom-5 > [type="password"]').click();
  cy.get('.bottom-5 > [type="password"]').type("joel");
});

When("I click on the login button on the login page", () => {
  cy.get(".max-w-80 > .px-6").click();
});

Then("I am on the mypages page", () => {
  cy.url().should("include", "/MyPages");
});
