Feature: The Automation test site

  Scenario: As a user, I Should be able to register and login
    Given I am on the login page
    When I register with random email
    And fill the registration form
    Then I should be able to verify my credentials
    Then I should be able to logout

  
Scenario: As a user, I Should be able to register and login
    Given I am on the login page
    When I login with registered email
    Then I should navigate to my account page
    When I select a product and navigate to payments page
    Then I should be able to verify product name
