import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AlertContainer = styled.span`
  padding: 10px;
  text-align: center;
`

const Alert = ({ message }) => <AlertContainer>{message}</AlertContainer>

Alert.defaultProps = {
  message: 'This is default prop.'
}

Alert.propTypes = {
  message: PropTypes.string
}

export default Alert
