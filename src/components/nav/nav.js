import React from "react"
import styled from "styled-components"

const Nav = () => {
  return (
    <NavBar>
      <h2>Logo</h2>
      <h3>Hamburger</h3>
    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3em;
  width: 100%;

  padding: 0 3em;

  background: transparent;
`
