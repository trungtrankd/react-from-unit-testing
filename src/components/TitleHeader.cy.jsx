import React from 'react'
import TitleHeader from './TitleHeader'

describe('<TitleHeader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TitleHeader />)
  })
})