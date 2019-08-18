import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import Layout from "ui/layout/layout"
import girl from "img/sitting.svg"
import boy from "img/standing.svg"
import CallToAction from "ui/components/callToAction"
import { useSpring, animated, config } from "react-spring"
import { useInView } from "react-intersection-observer"
import { useGesture } from "react-with-gesture"

export default () => {
  const [{ scrollY }, setY] = useSpring(() => ({
    scrollY: 0,
    config: config.molasses,
  }))

  const [{ xy }, setXY] = useSpring(() => ({
    xy: [0, 0],
  }))

  const bind = useGesture(({ down, delta, velocity, event }) => {
    event.preventDefault()
    velocity = 1
    setXY({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tensions: 500 * velocity, friction: 50 },
    })
  })

  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  const [{ opacity, x }, setProps] = useSpring(() => ({
    opacity: 0,
    x: 200,
    config: config.gentle,
  }))

  function onScroll() {
    setY({ scrollY: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    setProps(inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 })
  }, [inView])

  return (
    <Layout>
      <Section
        gridArea={`"title1""par1""girl"`}
        gridAreaTablet={`"title1 title1""par1 girl"`}
        gridAreaLaptop={`"title1 title1""par1 girl"`}
      >
        <Area area="title1">
          <h1>Apple pie jelly beans</h1>
        </Area>
        <Area
          area="par1"
          css={css`
            align-self: flex-start;
          `}
        >
          <p>
            Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder
            cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah
            carrot cake.
          </p>
        </Area>

        <Area area="girl">
          <animated.img
            src={girl}
            alt="girl"
            {...bind()}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              cursor: "all-scroll",
            }}
          />
        </Area>
      </Section>

      <Section
        gridArea={`"title2""par2"`}
        gridAreaTablet={`"par2 title2"`}
        gridAreaLaptop={`"par2 title2"`}
        ref={ref}
        css={css`
          align-items: center;
          background: ${({ theme }) => theme.colors.backgroundBlue};
        `}
      >
        <Area
          area="title2"
          style={{
            opacity: opacity,
            transform: x.interpolate(x => `translate(${x}px,0)`),
          }}
        >
          <h2
            css={css`
              color: ${({ theme }) => theme.colors.secondary};
              @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                text-align: center;
              }
            `}
          >
            Jelly beans
          </h2>
        </Area>
        <Area area="par2">
          <p>
            Cupcake marshmallow topping cheesecake muffin. Halvah croissant
            candy canes bonbon candy. Apple pie jelly beans topping carrot cake
            danish tart cake cheesecake. Muffin danish chocolate soufflé pastry
            icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops
            tootsie roll marshmallow halvah carrot cake.
          </p>
        </Area>
      </Section>
      <Section
        gridArea={`"boy""par3""cta"`}
        gridAreaTablet={`"boy par3""boy cta"`}
        gridAreaLaptop={`"boy par3""boy cta"`}
        css={css`
          align-items: center;
        `}
      >
        <Area
          area="boy"
          css={css`
            margin-bottom: 7em;
            @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              margin-bottom: 0;
            }
          `}
          style={{
            transform: scrollY.interpolate(
              y => `translateY(${0.1 * y - 100}px)`
            ),
          }}
        >
          <img src={boy} alt="" />
        </Area>
        <Area
          area="par3"
          css={css`
            align-self: flex-end;
          `}
        >
          <p>
            Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder
            cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah
            carrot cake.
          </p>
        </Area>
        <Area
          area="cta"
          css={css`
            align-self: flex-start;
          `}
        >
          <CallToAction>cheesecake muffin</CallToAction>
        </Area>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  display: grid;
  grid-gap: 0 4em;

  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 4em 1em;

  grid-template-areas: ${({ gridArea }) => gridArea};

  @media (orientation: landscape),
    (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ${({ gridAreaTablet }) => gridAreaTablet};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 5em;
    grid-template-areas: ${({ gridAreaLaptop }) => gridAreaLaptop};
  }
`

const Area = styled(animated.div)`
  grid-area: ${({ area }) => `${area}`};
`
