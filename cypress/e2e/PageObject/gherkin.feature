Feature: Add product to cart and proceed to checkout

  Scenario: Add product to cart and proceed to checkout
    Given I navigate to "https://automationexercise.com/view_cart"
    When I click on the "addtocart" button of the first product in the category "add to cart"
    Then a pop-up "Added!" should appear
    When I click on the "View Cart" link
    And I click on the "check-out" button
    Then a pop-up "Checkout" should appear
    When I click on the "Register/login" link
    And I enter my name in the "Name" field on the login page
    And I enter my email address in the "Email Address" field on the login page
    And I click on the "Signup" button

#V2

Feature: Add product to cart and proceed to checkout

  Scenario: Navigate to cart and add product
    Given I navigate to "https://automationexercise.com/view_cart"
    When I click on the "addtocart" button of the first product in the category "add to cart"
    Then a pop-up "Added!" should appear

  Scenario: View cart and proceed to checkout
    Given I have added a product to the cart
    When I click on the "View Cart" link
    And I click on the "check-out" button
    Then a pop-up "Checkout" should appear

  Scenario: Register or login
    Given I am on the checkout page
    When I click on the "Register/login" link
    And I enter my name in the "Name" field on the login page
    And I enter my email address in the "Email Address" field on the login page
    And I click on the "Signup" button