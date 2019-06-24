'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var React=_interopDefault(require('react')),PropTypes=_interopDefault(require('prop-types')),styled=_interopDefault(require('styled-components'));const AlertContainer = styled.span`
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

const Button = () => React.createElement(ButtonContainer, null, "My Button");exports.Alert=Alert;exports.Button=Button;