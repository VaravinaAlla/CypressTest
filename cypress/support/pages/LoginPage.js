/// <reference types="cypress" />

import BasePage from './BasePage';
import testData from '../../fixtures/credentials.json';

class LoginPage extends BasePage {
  get usernameField() {
    return cy.get('#user-name');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  open() {
    super.open('');
  }

  login(userName, password) {
    this.usernameField.type(userName);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  loginWithCorrectData() {
    this.usernameField.type(testData.userNames.correctUsername);
    this.passwordField.type(testData.passwords.correctPassword);
    this.loginButton.click();
  }

  verifyErrorMessage(text) {
    this.errorMessage.should('have.text', text);
  }
}

export default new LoginPage();
