describe('test suite', () => {

  let Username, Password, UsernameOk, FirstName, LastName, cp;

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
    // Mes valeurs de formulaire
    Username = "locked_out_user";
    Password = "secret_sauce"; 
    UsernameOk = "standard_user";
    FirstName = "William";
    LastName = "Maheux";
    cp = "59780";
  })

  // Test Connexion KO
  it('Test Connexion KO', () => {
    cy.get("#user-name").type(Username)
    cy.get("#password").type(Password)
    cy.get("#login-button").click()
    cy.get('.error-message-container').should('be.visible') // Add assertion to check for error message
  })

  // Test Connexion Reset
  it('Test Connexion Reset', () => {
    cy.get("#user-name").clear()
    cy.get("#password").clear()
    cy.get("#user-name").should('have.value', '') // Add assertion to check if the field is cleared
    cy.get("#password").should('have.value', '') // Add assertion to check if the field is cleared
  })

  // Test Connexion OK
  it('Test Connexion OK', () => {
    cy.get("#user-name").type(UsernameOk)
    cy.get("#password").type(Password)
    cy.get("#login-button").click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html') // Add assertion to check if the URL is correct
    cy.get(".product_sort_container").select('hilo')
    cy.get(".btn_primary.btn_inventory").eq(0).click()
    cy.get(".btn_primary.btn_inventory").eq(0).click()
    cy.get("#shopping_cart_container").click()
    cy.get('.btn_action.checkout_button').click()
    cy.get("#first-name").type(FirstName)
    cy.get("#last-name").type(LastName)
    cy.get("#postal-code").type(cp)
    cy.get(".btn_primary.cart_button").click()
    cy.get(".btn_action.cart_button").click()
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER') // Add assertion to check for order completion
  })

})