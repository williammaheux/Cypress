// describe('template spec', () => {
//   it('passes', () => {
//     // cy.visit('/')
//   })
// })
// describe c'est comme une fonction
describe('test suite', () => {
 

  let Username, Password, UsernameOk, FirstName, LastName, cp;
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/')
      // Mes valeur de formulaire
      Username = "locked_out_user";
      Password = "secret_sauce"; 
      UsernameOk = "standard_user";
      FirstName = "William";
      LastName = "Maheux";
      cp = "59780";
      

  
    })
// it c'est comme un cas de test 
    it('Test Connexion KO', () => {

      cy.get("#user-name").type(Username)
      cy.get("#password").type(Password)
      cy.get("#login-button").click()
     
  
    })

    it('Test Connexion Reset', () => {

      cy.get("#user-name").clear()
      cy.get("#password").clear()
  
    })

    it('Test Connexion OK', () => {

      cy.get("#user-name").type(UsernameOk)
      cy.get("#password").type(Password)
      cy.get("#login-button").click()
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
  
    })

    

  })