class Login{
navigate(){
    cy.visit('http://www.saucedemo.com/v1/')
}
email(username) {
    cy.get('#user-name')
    .clear()
    .type(username);
    return this
}
password(password) {
    cy.get('#password')
    .clear()
    .type(password);
    return this
}
submit(){
    cy.get('#login-button').click()
}
}

class loginKO{
navigate(){
    cy.visit('http://www.saucedemo.com/v1/')
}
email(username) {
    cy.get('#user-name')
    .clear()
    .type(username);
    return this
}
password(password) {
    cy.get('#password')
    .clear()
    .type(password);
    return this
}
submit(){
    cy.get('#login-button').click()
}
}

export default {Login, loginKO};