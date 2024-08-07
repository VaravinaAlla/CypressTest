/// <reference types="cypress" />

import BasePage from './BasePage';
class InventoryPage extends BasePage {
  get burgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

  get shoppingCart() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  get productSort() {
    return cy.get('[data-test="product-sort-container"]');
  }

  clickShoppingCart() {
    return this.shoppingCart.click();
  }

  poductSortOptions() {
    return this.productSort.find('option');
  }

  clickProductItem() {
    cy.get('[data-test="inventory-item-name"]').then(($items) => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      const $randomItem = $items.eq(randomIndex);
      cy.wrap($randomItem)
        .parent('a')
        .invoke('attr', 'id')
        .then((id) => {
          const idNumber = id.match(/\d+/)[0];
          cy.log('Extracted ID Number:', idNumber);
          cy.writeFile('../../fixtures/savedNumber.json', { idNumber });
          cy.wrap($randomItem).click();
        });
    });
  }
}

export default new InventoryPage();
