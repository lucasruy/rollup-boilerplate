import React from 'react'
import renderer from 'react-test-renderer'

import Alert from './../../Alert'

describe('<Alert />', () => {
  it('render correctly', () => {
    const alert = renderer.create(<Alert />).toJSON()

    expect(alert).toMatchSnapshot()
  })
})
