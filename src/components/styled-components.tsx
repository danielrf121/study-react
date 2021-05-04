import React, { useState } from 'react';
import styled from 'styled-components';

import Title from '../styles/style';

// Styles proprio do component
const TextTest = styled.span<{valueTest: number}>`
  font-size: 1em;
  text-align: left;
  display: block;

  ${props => props.valueTest > 10 && 'color: #27ae60' }; // estilo condicional
`;

const Button = styled.button<{variant: string}>`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  ${props => props.variant === 'primary' && 'background-color: #2980b9; color: #fff;' }; // estilo condicional
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function StyledComponents() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title>Styled components <b>works!</b></Title>
      <TextTest valueTest={count}>You clicked {count} times</TextTest>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
  
export default StyledComponents;