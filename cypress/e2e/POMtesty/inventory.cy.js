/// <reference types="cypress" />

import LoginPage from '../../support/pages/LoginPage';
import InventoryPage from '../../support/pages/InventoryPage';

describe('Login tests with POM', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.loginWithCorrectData();
  });

  it('Check burger menu is visible', () => {
    InventoryPage.burgerMenu.should('be.visible');
    InventoryPage.burgerMenu.should('exist');
  });

  it('Check shopping card is visible', () => {
    InventoryPage.shoppingCart.should('be.visible');
    InventoryPage.shoppingCart.should('exist');
  });

  it('Check product sort icon is visible', () => {
    InventoryPage.productSort.should('be.visible');
    InventoryPage.productSort.should('exist');
  });

  it('Check product Sort list should have 4 options', () => {
    InventoryPage.poductSortOptions().should('have.length', 4);
  });

  it('Check user redirect to CartPage when clicking on Shopping cart icon', () => {
    InventoryPage.clickShoppingCart();
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
  });

  it('Check user redirect to ItemPage when clicking on Item', () => {
    InventoryPage.clickProductItem();
    cy.readFile('../../fixtures/savedNumber.json').then((data) => {
      const idNumber = data.idNumber;
      cy.url().should(
        'eq',
        `https://www.saucedemo.com/inventory-item.html?id=${idNumber}`
      );
    });
  });
});
