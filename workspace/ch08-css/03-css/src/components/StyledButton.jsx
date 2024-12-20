import PropTypes from 'prop-types';
import styled from 'styled-components';
Button.propTypes = {
  children: PropTypes.string.isRequired,
};

const BasicButtonStyle = styled.button`
  background-color: ${(props) => props.bg || '#4caf50'}; /* Green background */
  border: none; /* Remove borders */
  color: ${(props) => props.color || 'white'}; /* White text */
  padding: 6px 18px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline-block */
  font-size: ${(props) => props.size || '16px'}; /* Font size */
  margin: 4px 2px; /* Margin */
  cursor: pointer; /* Cursor pointer */
  border-radius: 6px; /* Border radius */
`;

export function Button({ children, ...rest }) {
  return (
    <BasicButtonStyle type="button" {...rest}>
      {children}
    </BasicButtonStyle>
  );
}
