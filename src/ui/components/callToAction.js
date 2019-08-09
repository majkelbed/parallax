import React from "react"
import styled from "styled-components"

const CallToAction = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default CallToAction

const StyledButton = styled.button`
  width: 100%;
  max-width: 15em;

  padding: 0.6em 1em;

  font-weight: bold;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.backgroundViolet};

  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 100px;
`
