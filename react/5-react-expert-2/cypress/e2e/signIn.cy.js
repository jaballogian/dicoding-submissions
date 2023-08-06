/* eslint-disable import/no-extraneous-dependencies */
/* eslint linebreak-style: ["error", "windows"] */

// TEST SCENARIOS

// SIGN IN FEATURE

// should display Sign In page correctly
// should display alert when email is empty
// should display alert when password is empty
// should display alert when email and password are wrong
// should display Home page when email and password are correct

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign-in');
  });

  it('should display Sign In page correctly', () => {
    cy.get('input[placeholder="Enter your email address here"]').should('be.visible');
    cy.get('input[placeholder="Enter your password here"]').should('be.visible');
    cy.get('button').contains(/^Sign In$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Sign In$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Enter your email address here"]').type('test@gmail.com');
 
    cy.get('button').contains(/^Sign In$/).click();
 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Enter your email address here"]').type('test@gmail.com');
 
    cy.get('input[placeholder="Enter your password here"]').type('test password');
 
    cy.get('button').contains(/^Sign In$/).click();
 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display Home page when email and password are correct', () => {
    cy.visit('http://localhost:3000/sign-in');

    cy.get('input[placeholder="Enter your email address here"]').type('alberteinstein@gmail.com');
 
    cy.get('input[placeholder="Enter your password here"]').type('albert einstein');
 
    cy.get('button').contains(/^Sign In$/).click();

    cy.get('h1').contains(/^Forum App$/).should('be.visible');
  });
});
