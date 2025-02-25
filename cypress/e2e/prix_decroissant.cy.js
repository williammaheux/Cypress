describe('Trier les articles du plus cher au moins cher', () => {
    it('Devrait trier les articles par prix décroissant', () => {
        // Visiter le site Saucedemo
        cy.visit('https://www.saucedemo.com/');

        // Se connecter
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // Sélectionner le tri par prix décroissant
        cy.get('.product_sort_container').select('hilo');

        // Vérifier que les articles sont triés par prix décroissant
        let prices = [];
        cy.get('.inventory_item_price').each(($el) => {
            prices.push(parseFloat($el.text().replace('$', '')));
        }).then(() => {
            const sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices);
        });
    });
});

export default prix_decroissant;