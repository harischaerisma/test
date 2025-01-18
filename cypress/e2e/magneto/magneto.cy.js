describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('#firstname').type ('haris')
      cy.get('#lastname').type ('chaerisma')
      cy.get('#email_address').type ('haris.chaerismaaa@gmail.com')
      cy.get('#password').type ('Ubiungu12345678')
      cy.get('#password-confirmation').type ('Ubiungu12345678')
      cy.get('button').contains('Create an Account').click()
    })

      
  })