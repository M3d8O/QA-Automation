describe('Carrito', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
    })
  
    it('TC 10 - Agregar producto al carrito', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('contain', '1')
    })
   
      it('TC 11 - Agregar 3 productos y verificar carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      
        cy.get('[data-test="shopping-cart-badge"]')
          .should('be.visible')
          .and('contain', '3')
      
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible')
      })

      it('TC 12 - Eliminar producto del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="inventory-item-name"]')
          .should('have.length', 1)
          .and('contain', 'Sauce Labs Bike Light')
      })
    })