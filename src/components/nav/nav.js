import React from "react"
import Social from "@components/nav/social/social"
import { StyledNav } from "./nav-presentation"
import Menu from "@components/nav/menu/menu"
const Nav = () => {
  return (
    <StyledNav>
      <Menu />
      <Social />
    </StyledNav>
  )
}

export default Nav
