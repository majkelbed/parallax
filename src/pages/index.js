import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import Layout from "ui/layout/layout"
import girl from "img/sitting.svg"
import boy from "img/standing.svg"
import CallToAction from "ui/components/callToAction"
import { useSpring, animated, config, interpolate } from "react-spring"

export default () => {
  const [{ scrollY }, setY] = useSpring(() => ({
    scrollY: 0,
    config: config.gentle,
  }))

  function onScroll() {
    setY({ scrollY: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    // return window.removeEventListener("scroll", onScroll)
  }, [])

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

        <Area
          area="girl"
          style={{
            transform: scrollY.interpolate(y => `translateY(${0.1 * y}px)`),
          }}
        >
          <img src={girl} alt="girl" />
        </Area>
      </Section>

      <Section
        gridArea={`"title2""par2"`}
        gridAreaTablet={`"par2 title2"`}
        gridAreaLaptop={`"par2 title2"`}
        css={css`
          align-items: center;
          background: ${({ theme }) => theme.colors.backgroundBlue};
        `}
      >
        <Area area="title2">
          <h2
            css={css`
              color: ${({ theme }) => theme.colors.secondary};
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
