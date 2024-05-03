Feature: Login as a user

    Scenario: Login as a user
        Given That I am on the first page
        When I click on the login button on the homepage
        Then I type my username
        And I type my password
        When I click on the login button on the login page
        Then I am on the mypages page