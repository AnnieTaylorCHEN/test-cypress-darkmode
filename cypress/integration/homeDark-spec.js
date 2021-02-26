describe('test Dark version', () => {
	it('should load dark mode', () => {
		cy.visit('/', {
            onBeforeLoad(win) {
              // eslint-disable-next-line no-console
              console.log('onbeforeload worked');
              cy.stub(win, 'matchMedia')
                .withArgs('(prefers-color-scheme: dark)')
                .returns({
                  matches: true,
                })
                .as('dark-media-query');
            },
          });
		cy.get('body')
			.should('have.css', 'background-color', 'rgb(23, 23, 23)')
            .and('have.css', 'color', 'rgb(242, 242, 242)');
        cy.get('.bg').should('have.css', 'background', 'rgba(0, 0, 0, 0) url("http://localhost:3000/cat.jpg") repeat scroll 0% 0% / auto padding-box border-box')
	});
});