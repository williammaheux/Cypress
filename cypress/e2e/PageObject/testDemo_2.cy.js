import { Login, LoginKO } from "./login"
import { prix_decroissant } from "./prix_decroissant"

// This imports the Login and LoginKO classes from the login.js file.

describe('cypress POM test suite', function() {
    it("Login avec un email et mot de passe valide", function() {
        // This test case checks if a user can log in with a valid email and password.

        const loginpage = new Login();
        // Creates an instance of the Login class.

        loginpage.navigate();
        // Navigates to the login page.

        loginpage.email('standard_user');
        // Enters the username 'standard_user'.

        loginpage.password('secret_sauce');
        // Enters the password 'secret_sauce'.

        loginpage.submit();
        // Submits the login form.

        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
        // Asserts that the URL is the inventory page after a successful login.
    })
})

describe('cypress POM test suite', function() {
    it("Login avec un email invalide et mot de passe valide", function() {
        // This test case checks if an error message is displayed when logging in with an invalid email and a valid password.

        const loginpageko = new LoginKO();
        // Creates an instance of the LoginKO class.

        loginpageko.navigate();
        // Navigates to the login page.

        loginpageko.email('invalid_user');
        // Enters the username 'invalid_user'.

        loginpageko.password('secret_sauce');
        // Enters the password 'secret_sauce'.

        loginpageko.submit();
        // Submits the login form.

        cy.get('.error-message-container').should('be.visible')
        // Asserts that the error message container is visible, indicating a failed login attempt.
    })
})

describe('cypress POM test suite', function() {
    it("Trier les articles du plus cher au moins cher", function() {
        // This test case checks if the products are sorted from highest to lowest price.

        prix_decroissant();
        // Calls the prix_decroissant function to sort the products by price in descending order.

        cy.get('.inventory_item_price').each(($el) => {
            prices.push(parseFloat($el.text().replace('$', '')));
        }).then(() => {
            const sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices);
        });
        // Asserts that the products are sorted correctly by price in descending order.
    })
})