describe('template spec', () => {
	beforeEach(() => {
		cy.visit('https://stg-web.nutri-asia.demo-application.net/');
	});

	it('test login', () => {
		/* 		cy.wait(30000); */
		cy.get('.chakra-text > [href="/login"]').click();
		cy.url().should('eq', 'https://stg-web.nutri-asia.demo-application.net/login');
		cy.get('#emailOrMobile').type('davidhaun@yopmail.com');
		cy.get('#password').type('Thuong140200!');
		cy.get('.css-10abj95').click();
		cy.wait(10000);
		cy.get('.css-3c2kae').should('exist');
	});
});
