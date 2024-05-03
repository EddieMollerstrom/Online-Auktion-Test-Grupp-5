Feature: Skapa en annons

    Scenario: Login as a user
        Given That I am on the first page
        When I click on the login button on the homepage
        Then I type my username
        And I type my password
        When I click on the login button on the login page
        Then I am on the mypages page

    Scenario: Visa skapa annons formuläret
        Given att jag är inloggad
        When går jag till Auktionpage
        Then Jag fyller ut formuläret med alla parametrar
        When Jag klickar på skapa annons knappen
        Then går jag till homepage
        And jag klickar på auktionen
