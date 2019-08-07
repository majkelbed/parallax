import React from "react"
import styled from "styled-components"

const Subtitle = ({ children }) => {
  return <Title>{children}</Title>
}

export default Subtitle

const Title = styled.h2`
  position: absolute;
  top: 10%;
  left: 0;

  font-size: 8vw;
  line-height: 12vw;
`
