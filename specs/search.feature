Feature: Search for products

    Scenario: Search for products
        Given I am on the homepage
        When I click on search bar
        Then I search for "Testkörning"
        And I should see product