import React, { useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import Img from "../../../img/city.jpg"
import SectionTemplate from "components/sectionTemplate/sectionTemplate"
const Mission = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
  })

  const fadeIn = useSpring({ opacity: inView ? 1 : 0 })
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })

  return (
    <animated.div>
      <SectionTemplate src={Img} text="Our mission">
        <P
          style={{
            transform: radians.interpolate(r => `rotate(${Math.sin(r)}deg)`),
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          illum aperiam at nostrum voluptate officiis unde quibusdam voluptas
          atque accusantium!
        </P>
      </SectionTemplate>
    </animated.div>
  )
}

export default Mission

const par = styled.p`
  justify-self: center;
  align-self: center;
  padding: 2em;
`
const P = animated(par)
