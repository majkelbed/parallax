import React from "react"
import styled from "styled-components"
import be from "img/behance.svg"
import fb from "img/facebook.svg"
import tw from "img/twitter.svg"

const Nav = () => {
  return (
    <StyledNav>
      <MenuToggle>
        <Toggle />
      </MenuToggle>
      <SocialMedia>
        <img src={be} alt="behance" />
        <img src={fb} alt="facebook" />
        <img src={tw} alt="twitter" />
      </SocialMedia>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  position: fixed;
  top: 1em;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 1em;
  padding: 0.3em 0.7em;

  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.nav};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    background: none;
  }
`
const SocialMedia = styled.div`
  display: flex;
  height: 100%;
  img {
    display: block;

    height: 100%;
    width: 40px;

    margin: 0 0.5em;
  }
`

const MenuToggle = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 3em;
  width: 3em;

  margin: 0;

  border: none;
  background: none;
`
const Toggle = styled.span`
  display: block;
  width: 2em;
  height: 0.3em;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 100px;

  ::after,
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 2em;
    height: 0.3em;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 100px;
  }

  ::after {
    top: 0.7em;
  }

  ::before {
    top: 2em;
  }
`
