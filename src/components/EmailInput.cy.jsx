import React from 'react'
import EmailInput from './EmailInput'


describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EmailInput />)
    cy.get('[data-testid="btn-submit"]').click()
    cy.get('[data-testid="email-error"]').should('exist').contains('E-mail is required')
    cy.get('[data-testid="control-email"]').type('abc')
    cy.get('[data-testid="btn-submit"]').click()
    cy.get('[data-testid="email-error"]').should('exist').contains('E-mail format invalid')
    cy.get('[data-testid="control-email"]')
      .clear()
      .type('abc@gmail.com')
    cy.get('[data-testid="btn-submit"]').click()
    cy.get('.data-email').should('exist').contains('abc@gmail.com')
  })
})