/// <reference types="cypress" />

import LoginPage from '../../support/pages/LoginPage';
import testData from '../../fixtures/credentials.json';

describe('Login tests with POM', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Success Login when Login and Password are correct', () => {
    LoginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.correctPassword
    );
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.url().should('include', 'inventory.html');
  });

  it('Error msg when user is locked', () => {
    LoginPage.login(
      testData.userNames.lockedUsername,
      testData.passwords.correctPassword
    );
    LoginPage.verifyErrorMessage(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

  it('Error msg when Login and Password are empty', () => {
    LoginPage.usernameField;
    LoginPage.passwordField;
    LoginPage.loginButton.click();
    LoginPage.verifyErrorMessage('Epic sadface: Username is required');
  });

  it('Error msg when Password is empry', () => {
    LoginPage.usernameField.type(testData.userNames.correctUsername);
    LoginPage.passwordField;
    LoginPage.loginButton.click();
    LoginPage.verifyErrorMessage('Epic sadface: Password is required');
  });

  it('Error msg when Login and Password are incorrect', () => {
    LoginPage.login(
      testData.userNames.correctUsername,
      testData.passwords.incorrectPassword
    );
    LoginPage.verifyErrorMessage(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
