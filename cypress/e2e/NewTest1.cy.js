describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('submit with content', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('#firstname').type(name);
			cy.get('#lastname').type(lastname);
			cy.get('#email').type(email);
			cy.get('[value="French"]').click();
			cy.get('#subscribed').click();
			// click button submit
			cy.get('button').click();
		});
	});

	it('validate content', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('button').click();
			cy.get('[data-testid="firstname-error"]').should('exist');
			cy.get('[data-testid="lastname-error"]').should('exist');
			cy.get('[data-testid="email-error"]').should('exist');
			cy.get('#firstname').type(name);
			cy.get('[data-testid="firstname-error"]').should('not.exist');
			cy.get('#lastname').type(lastname);
			cy.get('[data-testid="lastname-error"]').should('not.exist');
			cy.get('#email').type(email);
			cy.get('[data-testid="email-error"]').should('not.exist');
			cy.get('button').click();

			// expect(t).to.contain('Firstname');
			// cy.get('#firstname').type(name);
			// cy.get('button').click();
		});
	});

	it('check type email', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('#firstname').type(name);
			cy.get('[data-testid="firstname-error"]').should('not.exist');
			cy.get('#lastname').type(lastname);
			cy.get('[data-testid="lastname-error"]').should('not.exist');
			cy.get('#email').type('123456789');
			cy.get('button').click();
			cy.get('[data-testid="email-error"]').should('exist');
			cy.get('[data-testid="email-error"]').contains('E-mail format invalid');
		});
	});

	it('check data submit', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('#firstname').type(name);
			cy.get('#lastname').type(lastname);
			cy.get('#email').type(email);
			cy.get('#subscribed').click();
			cy.get('button').click();
			cy.get('.data-firstname').contains(name);
			cy.get('.data-lastname').contains(lastname);
			cy.get('.data-email').contains(email);
			cy.get('.data-subscribed').contains('true');
		});
	});

	it('check multi select', () => {
		cy.fixture('example').then((data) => {
			const name = data.name;
			const email = data.email;
			const lastname = data.lastname;

			cy.get('#firstname').type(name);
			cy.get('#lastname').type(lastname);
			cy.get('#email').type(email);
			cy.get('[value="French"]').click();
			cy.get('[value="English"]').click();
			cy.get('[value="German"]').click();
			cy.get('[value="Spanish"]').click();
			cy.get('[value="English"]').click();
			cy.get('button').click();
			cy.get('.data-firstname').contains(name);
			cy.get('.data-languages').contains('German');
		});
	});
});
