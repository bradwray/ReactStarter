import React, { useState } from "react";
import styled from "styled-components";

// This is a styled div we named container. Below it is just regular CSS.
const Container = styled.div`
  background: #ddd;
  border-radius: 3px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

// Here is a styled div we named Count
const Count = styled.div`
  color: #337067;
  font-size: 55px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

// And a styled button tag we named Button
const Button = styled.button`
  background: #337067;
  border-radius: 3px;
  color: white;
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

// This Counter function is a component that is exported from here and
// imported into index.js to be rendered inside the <App/> component.
export default function Counter() {
  // Next we make a changeable state variable named num.
  // the function setNum is how you change it. We start it out at 0;
  const [num, setNum] = useState(0);

  // The num variable and the setter are used within and
  // around the tags we made wrapped in curly brackets.
  return (
    <Container>
      <Count>{num}</Count>
      <Button onClick={() => setNum(num + 1)}>Press Me</Button>
    </Container>
  );
}
