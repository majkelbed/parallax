import React, { useState, useRef } from "react"
import {
  MenuToggle,
  Toggle,
  StyledExpandingNav,
  ClosingToggle,
  Link as StyledLink,
} from "./menu-presentation"
import {
  useTransition,
  useChain,
  useSpring,
  useTrail,
  config,
  animated,
} from "react-spring"
const Menu = () => {
  //  STATE
  const [visible, setVisible] = useState(false)
  const links = ["Home", "About", "Contact"]
  // REACT SPRING
  const transitionRef = useRef(null)
  const transitions = useTransition(visible, null, {
    ref: transitionRef,
    config: config.default,
    from: {
      opacity: 0,
      transform: "translate(-100%,0)",
    },
    enter: { opacity: 1, transform: "translate(0,0)" },
    leave: {
      opacity: 0.8,
      transform: "translate(-100%,0%)",
    },
  })

  const trailRef = useRef(null)
  const trail = useTransition(visible ? links : [], link => link, {
    ref: trailRef,
    unique: true,
    config: config.gentle,

    from: {
      opacity: 0,
      transform: "translate3d(-25%,0%,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0%) " },
    leave: {
      opacity: 0,
      transform: "translate3d(-25%,0%,0)",
    },
    trail: 100,
  })
  useChain(
    visible ? [transitionRef, trailRef] : [trailRef, transitionRef],
    visible ? [0, 0.5] : [0, 0.8]
  )
  return (
    <>
      <MenuToggle onClick={() => setVisible(!visible)}>
        <Toggle />
      </MenuToggle>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <AnimatedExpandingNav key={key} style={props}>
              {trail.map(({ item, key, props }) => (
                <Link key={key} style={props}>
                  {item}
                </Link>
              ))}
              <MenuToggle onClick={() => setVisible(!visible)}>
                <ClosingToggle />
              </MenuToggle>
            </AnimatedExpandingNav>
          )
      )}
    </>
  )
}

export default Menu

const AnimatedExpandingNav = animated(StyledExpandingNav)
const Link = animated(StyledLink)
