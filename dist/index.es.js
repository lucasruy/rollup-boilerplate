import React from'react';import PropTypes from'prop-types';import styled from'styled-components';const AlertContainer = styled.span`
  padding: 10px;
  text-align: center;
`;

const Alert = ({
  message
}) => React.createElement(AlertContainer, null, message);

Alert.defaultProps = {
  message: 'This is default prop.'
};
Alert.propTypes = {
  message: PropTypes.string
};const ButtonContainer = styled.button`
  background-color: #ff1200;
  color: #f8f8f8;
`;

const Button = () => React.createElement(ButtonContainer, null, "My Button");export{Alert,Button};