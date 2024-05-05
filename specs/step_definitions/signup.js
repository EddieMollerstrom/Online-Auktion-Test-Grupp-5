import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/*
  Lucas
*/

Given("That I am on the homepage", () => {
  cy.visit("/");
  cy.get(".text-4xl").should("exist");
});

When("I click on the button for login", () => {
  cy.get(".bg-custom-yellow").click();
});

Then("I see the login and signup field", () => {
  cy.get(".max-w-55").should("exist");
  cy.get(".max-w-80").should("exist");
});

Then("I type my new username", () => {
  cy.get('form > [type="text"]').click();
  cy.get('form > [type="text"]').type("Marcus");
});

Then("I type my new email", () => {
  cy.get('form > [type="email"]').click();
  cy.get('form > [type="email"]').type("Marcus@gmail.com");
});

Then("I type my new password", () => {
  cy.get('form > [type="password"]').click();
  cy.get('form > [type="password"]').type("abc123");
});

When("I click on the signup button on the signup page", () => {
  cy.get(".top-5").click();
});

Then("I see conformation of new user not being created", () => {
  cy.get("form > .top-20").should(
    "contain",
    "konto med samma användarnamn eller mail finns redan."
  );
});
