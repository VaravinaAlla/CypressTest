describe('Auth', () => {
  let sid;
  before(() => {
    const userCreds = {
      email: 'testovich@gmail.com',
      password: 'C7Pu6V2e3.FNuy',
      remember: true,
    };
    cy.request(
      'POST',
      'https://qauto.forstudy.space/api/auth/signin',
      userCreds
    ).then((response) => {
      const headers = response.headers;
      const cookie = headers['set-cookie'][1];
      const cookieArray = cookie.split('\n');
      for (const cookie of cookieArray) {
        if (cookie.trim().startsWith('sid=')) {
          sid = cookie.trim().split('=')[1].split(';')[0];
          break;
        }
      }
    });
  });
});
