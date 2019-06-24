import React from 'react'
import renderer from 'react-test-renderer'

import Button from './../../Button'

describe('<Button />', () => {
  it('render correctly', () => {
    const button = renderer.create(<Button />).toJSON()

    expect(button).toMatchSnapshot()
  })
})
