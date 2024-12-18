Cypress.Commands.add('postPrevisao', (input) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}predict`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: true,
        body: {
            input: input,
        },
    });
});