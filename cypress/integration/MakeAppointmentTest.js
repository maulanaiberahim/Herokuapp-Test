describe('Login Test', () => {
    it('Make Appointment - without input mandatory field', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com//', {timeout: 100000})
        cy.get('#menu-toggle').click()
        cy.get('a[href*="profile.php#login"]').contains('Login').click()
        cy.get('#txt-username').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').click()
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('h2').contains('Make Appointment')
        cy.wait
        cy.get('#txt_comment').click()
        cy.get('#txt_comment').type('ini adalah komen')
        cy.get('#btn-book-appointment').click()
        cy.get('.datepicker').should('be.visible')
        cy.get('h2').contains('Make Appointment')
        cy.wait
    });

    it('Make Appointment - Success', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com//', {timeout: 100000})
        cy.get('#menu-toggle').click()
        cy.get('a[href*="profile.php#login"]').contains('Login').click()
        cy.get('#txt-username').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').click()
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('h2').contains('Make Appointment')
        cy.wait
        cy.get('#txt_comment').click()
        cy.get('#txt_comment').type('ini adalah komen')
        cy.get('#txt_visit_date').click()
        cy.get('#txt_visit_date').type('05/03/2023')
        cy.get('#btn-book-appointment').click()
        cy.get('h2').contains('Appointment Confirmation')
    });

})