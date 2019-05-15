import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '.'

describe('Footer', () => {
  it('renders correctly the component', () => {
    const tree = () => renderer.create(<Footer />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
