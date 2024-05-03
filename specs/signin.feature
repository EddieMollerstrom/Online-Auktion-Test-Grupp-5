Feature: Create a new user on website that already exists

    Scenario: Sign up to website
        Given That I am on the homepage
        When I click on the button for login
        Then I see the login and signup field
        Then I type my new username
        Then I type my new email
        Then I type my new password
        When I click on the signup button on the signup page
        Then I see conformation of new user not being created

