describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('submit with em pty content', () => {
		cy.get('button').click();
	});
	it('submit with content', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('#firstname').type(name);
			cy.get('#lastname').type(lastname);
			cy.get('#email').type(email);
			cy.get('#languages').select('German');
			cy.get('#subscribed').click();
			cy.get('button').click();
		});
	});
});
