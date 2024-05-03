Feature: Bid on a auction

    Scenario: Login as a user
        Given That I am on the first page
        When I click on the login button on the homepage
        Then I type my username
        And I type my password
        When I click on the login button on the login page
        Then I am on the mypages page

    Scenario: Bid on a auction
        Given That I am logged in
        When I go to homepage
        Then I press on a auction
        And I press on lägg bud
        Then I add a Bid
        And I should see it on the auction page