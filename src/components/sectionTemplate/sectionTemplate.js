import React, { useEffect, useCallback } from "react"
import Subtitle from "components/subtitle/subtitle"
import Grid from "components/grid/grid"
import Img from "components/img/img"

import { animated, useSpring, config } from "react-spring"

const SectionTemplate = ({ children, src, text }) => {
  const [{ scrollY }, set] = useSpring(() => ({
    scrollY: 0,
    config: config.gentle,
  }))

  const onScroll = useCallback(() => {
    set({ scrollY: (window.scrollY / window.innerHeight) * 22 })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <Grid>
      <Subtitle>
        <animated.h2
          style={{
            transform: scrollY.interpolate(y => `translateX(${y}vw)`),
          }}
        >
          {text}
        </animated.h2>
      </Subtitle>
      <Img src={src} />
      {children}
    </Grid>
  )
}

export default SectionTemplate
