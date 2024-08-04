/// <reference types="cypress" />

import BasePage from './BasePage';
class ItemPage extends BasePage {
  get imageItem() {
    return cy.get('.inventory_details_img');
  }

  get descriptionItem() {
    return cy.get('[data-test="inventory-item-desc"]');
  }

  get priceItem() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get titleItem() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get addToCartBtn() {
    return cy.get('#add-to-cart');
  }

  clickAddToCartBtn() {
    return this.addToCartBtn.click();
  }

  get removeBtn() {
    return cy.get('#remove');
  }

  clickRemovetBtn() {
    return this.removeBtn.click();
  }
}

export default new ItemPage();
