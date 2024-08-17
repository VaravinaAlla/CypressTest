describe('API test', () => {
  it('Request - GET then+expect', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then(
      (response) => {
        const body = response.body;
        expect(body.length).to.be.eq(10);
        expect(body[0].name).to.eq('Leanne Graham');
      }
    );
  });

  it('Request - GET user id =2', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then(
      (response) => {
        const body = response.body;
        expect(body[1].id).to.be.eq(2);
        expect(body[1].email).to.eq('Shanna@melissa.tv');
        expect(body[1].address.street).to.eq('Victor Plains');
        expect(body[1].company.name).to.eq('Deckow-Crist');
      }
    );
  });

  it('Request - GET album with id =4', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/albums').then(
      (response) => {
        const body = response.body;
        expect(body[3].userId).to.be.eq(1);
        expect(body[3].id).to.eq(4);
        expect(body[3].title).to.eq('non esse culpa molestiae omnis sed optio');
      }
    );
  });

  it('Request - GET post with id =1', () => {
    cy.request(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    ).then((response) => {
      const body = response.body;
      expect(body[0].id).to.be.eq(1);
      expect(body[0].postId).to.eq(1);
      expect(body[0].name).to.eq('id labore ex et quam laborum');
      expect(body[0].email).to.eq('Eliseo@gardner.biz');
    });
  });

  it('Request - POST', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
      .as('postResponse')
      .its('body.id')
      .should('eq', 101);

    cy.get('@postResponse').its('body.title').should('eq', newPost.title);
    cy.get('@postResponse').its('body.body').should('eq', newPost.body);
  });
});
