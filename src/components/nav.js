import React, { useState } from "react"
import styled from "styled-components"
import be from "img/behance.svg"
import fb from "img/facebook.svg"
import tw from "img/twitter.svg"
import posed, { PoseGroup } from "react-pose"
const Nav = () => {
  const [visible, setVisible] = useState(false)

  return (
    <StyledNav>
      <MenuToggle onClick={() => setVisible(!visible)}>
        <Toggle />
      </MenuToggle>
      <SocialMedia>
        <img src={be} alt="behance" />
        <img src={fb} alt="facebook" />
        <img src={tw} alt="twitter" />
      </SocialMedia>
      <ExpandingNav
        key="expandingNav"
        pose={visible ? ["enter", "rotate"] : "exit"}
      >
        <Link>Link</Link>
        <Link>Link</Link>
        <Link>Link</Link>
        <MenuToggle onClick={() => setVisible(!visible)}>
          <ClosingToggle />
        </MenuToggle>
      </ExpandingNav>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  position: fixed;
  top: 1em;
  left: 0;
  right: 0;
  z-index: 10;

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
const ClosingToggle = styled(Toggle)`
  background-color: transparent;
  ::after {
    top: 0;
    transform: rotate(45deg);
  }
  ::before {
    top: 0;
    transform: rotate(-45deg);
  }
`

const StyledExpandingNav = styled.nav`
  position: absolute;
  top: 150%;
  left: 0;
  right: 0;
  margin: 0 auto;

  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 65vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 50vw;
  }
`

const ExpandingNav = posed(StyledExpandingNav)({
  enter: {
    opacity: 1,
    x: 0,
    delayChildren: 300,
    staggerChildren: 100,
  },
  exit: { opacity: 0, x: 100, rotateY: "180deg" },
  rotate: { rotateY: "0deg", delay: 300 },
})

const PosedLink = posed.h3({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const Link = styled(PosedLink)`
  color: ${({ theme }) => theme.colors.red};
  font-size: 35px;
`
