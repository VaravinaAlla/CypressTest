/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('Success Login when Login and Password are correct', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.url().should('include', 'inventory.html');
  });

  it('Error msg when user is locked', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Error msg when Login and Password are empty', () => {
    cy.get('[data-test="username"]');
    cy.get('[data-test="password"]');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Username is required');
  });

  it('Error msg when Password is empry', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Password is required');
  });

  it('Error msg when Login and Password are incorrect', () => {
    cy.get('[data-test="username"]').type('user');
    cy.get('[data-test="password"]').type('user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should(
        'eq',
        'Epic sadface: Username and password do not match any user in this service'
      );
  });
});
