import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/*
Amelia
*/

Given("att jag är på hemsidan", () => {
  cy.visit("/");
  cy.get("#search").should("exist");
});

When("jag går jag till Kontakt", () => {
  cy.get('[href="/Contact"]').click();
  cy.url().should("include", "/Contact");
});

Then("jag fyller i formuläret", () => {
  cy.get('[name="name"]').click().type("Test Namn");
  cy.get('[name="lastName"]').click().type("Test Efternamn");
  cy.get('[type="email"]').click().type("Test@mail.se");
  cy.get('[type="tel"]').click().type("Test 123");
  cy.get("textarea").click().type("Test Test Test");
});

Then("jag klickar på SKICKA knappen", () => {
  cy.get("form > .bg-custom-yellow").click();
});
