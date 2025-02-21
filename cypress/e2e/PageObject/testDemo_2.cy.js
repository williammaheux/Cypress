import Login from "./login"
import loginKO from "./login"

describe('cypress POM test suite', function() {
    it("Login avec un email et mot de passe valide", function() {

    const loginpage = new Login();

    loginpage.navigate();
    loginpage.email('standard_user');
    loginpage.password('secret_sauce');
    loginpage.submit();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })
})

describe('cypress POM test suite', function() {
    it("Login avec un email invalide et mot de passe valide", function() {

    const loginpageko = new loginKO();

    loginpageko.navigate();
    loginpageko.email('standard_user');
    loginpageko.password('secret_sauce');
    loginpageko.submit();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })
})

