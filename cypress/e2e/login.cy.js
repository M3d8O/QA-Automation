describe('Login', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
    })
  
    it('TC 4.0 - Login con usuario bloqueado', () => {
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out.')
    })
    it('TC 5.0 - Logout desde el menu', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()
      cy.url().should('eq', 'https://www.saucedemo.com/')
    })
  })