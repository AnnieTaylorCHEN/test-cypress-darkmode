describe('test Light version', () => {
	it('should load light mode', () => {
		cy.visit('/');
		cy.get('body')
			.should('have.css', 'background-color', 'rgb(250, 250, 250)')
            .and('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get('.bg').should('have.css', 'background', 'rgba(0, 0, 0, 0) url("http://localhost:3000/dog.jpg") no-repeat scroll 50% 50% / auto padding-box border-box')
	});
});
