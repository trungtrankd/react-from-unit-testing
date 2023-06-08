import React from 'react'
import Jumbotron from './Jumbotron'

describe('<Jumbotron />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Jumbotron />)
  })
})