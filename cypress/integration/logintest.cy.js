describe('Login Test', () => {
    before(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com//', {timeout: 100000})
        cy.get('#menu-toggle').click()
        cy.get('a[href*="profile.php#login"]').contains('Login').click()
        cy.wait
    });

    it('Login with invalid data', () => {
        cy.get('#txt-username').click()
        cy.get('#txt-username').type('maulana')
        cy.get('#txt-password').click()
        cy.get('#txt-password').type('iberahim')
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('be.visible')
    });
    
    it('Login with valid data', () => {
        cy.get('#txt-username').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').click()
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('h2').contains('Make Appointment')
    });

})