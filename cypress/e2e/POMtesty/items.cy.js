/// <reference types="cypress" />

import LoginPage from '../../support/pages/LoginPage';
import testData from '../../fixtures/credentials.json';
import InventoryPage from '../../support/pages/InventoryPage';
import ItemPage from '../../support/pages/ItemPage';

describe('Login tests with POM', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.loginWithCorrectData();
    InventoryPage.clickProductItem();
  });

  it('Check Image Item is visible', () => {
    ItemPage.imageItem.should('be.visible');
    ItemPage.imageItem.should('exist');
  });

  it('Check Description Item is visible', () => {
    ItemPage.descriptionItem.should('be.visible');
    ItemPage.descriptionItem.should('exist');
  });

  it('Check Price Item is visible', () => {
    ItemPage.priceItem.should('be.visible');
    ItemPage.priceItem.should('exist');
  });

  it('Check Title Item is visible', () => {
    ItemPage.titleItem.should('be.visible');
    ItemPage.titleItem.should('exist');
  });

  it('Check Remove button is appered', () => {
    ItemPage.clickAddToCartBtn();
    ItemPage.removeBtn.should('be.visible');
    ItemPage.removeBtn.should('exist');
  });

  it('Check AddToCart button is appeared', () => {
    ItemPage.clickRemovetBtn;
    ItemPage.addToCartBtn.should('be.visible');
    ItemPage.addToCartBtn.should('exist');
  });
});
