import 'cypress-plugin-api';

describe('API test with plugin', () => {
  it('GET', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/users').should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it('POST', () => {
    cy.api('POST', 'https://jsonplaceholder.typicode.com/posts', {
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('DELETE', () => {
    cy.api('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
