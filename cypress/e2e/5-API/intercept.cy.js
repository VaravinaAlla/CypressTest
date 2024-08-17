/// <reference types="cypress" />

describe('API test', () => {
  beforeEach(() => {}),
    it('Success login test', () => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const fakeCars = {
        status: 'ok',
        data: [
          {
            id: 185028,
            carBrandId: 1,
            carModelId: 4,
            initialMileage: 41241,
            updatedMileageAt: '2024-08-13T16:39:30.000Z',
            carCreatedAt: '2024-08-13T16:39:30.000Z',
            mileage: 41241,
            brand: 'Audi',
            model: 'A6',
            logo: 'audi.png',
          },
          {
            id: 185027,
            carBrandId: 1,
            carModelId: 2,
            initialMileage: 4224,
            updatedMileageAt: '2024-08-13T16:39:27.000Z',
            carCreatedAt: '2024-08-13T16:39:27.000Z',
            mileage: 4224,
            brand: 'Audi',
            model: 'R8',
            logo: 'audi.png',
          },
          {
            id: 185026,
            carBrandId: 1,
            carModelId: 1,
            initialMileage: 42,
            updatedMileageAt: '2024-08-13T16:39:24.000Z',
            carCreatedAt: '2024-08-13T16:39:24.000Z',
            mileage: 42,
            brand: 'Audi',
            model: 'TT',
            logo: 'audi.png',
          },
          {
            id: 180380,
            carBrandId: 3,
            carModelId: 11,
            initialMileage: 1222,
            updatedMileageAt: '2024-07-26T17:15:44.000Z',
            carCreatedAt: '2024-07-26T17:15:44.000Z',
            mileage: 1222,
            brand: 'Ford',
            model: 'Fiesta',
            logo: 'ford.png',
          },
        ],
      };
      cy.intercept('GET', '**/cars', fakeCars);
      cy.contains('Sign in').click();
      cy.get('#signinEmail').type('testovich@gmail.com');
      cy.get('#signinPassword').type('C7Pu6V2e3.FNuy');
      cy.contains('Login').click();
    });
});
