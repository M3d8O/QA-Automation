
describe('Checkout', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
    })
  
    it('TC 13- Checkout completo exitoso', () => {
      cy.get('[data-test="firstName"]').type('Marie')
      cy.get('[data-test="lastName"]').type('Perez')
      cy.get('[data-test="postalCode"]').type('3382')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]')
        .should('contain', 'Thank you for your order!')
    })
  
    it('TC 14 - Checkout sin completar campos', () => {
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'First Name is required')
    })
  
})