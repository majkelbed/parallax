import React from "react"
import styled from "styled-components"
import green from "../../../img/green.jpg"
//import purple from "../../../img/purple.jpg"

const Hero = () => {
  return (
    <Grid>
      <Title>It is important</Title>
      <HeroImg src={green} />
    </Grid>
  )
}

export default Hero

const Grid = styled.div`
  position: relative;

  display: grid;

  width: 100%;
  height: 100vh;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(310px, 1fr));
  }
`

const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13vw;
  line-height: 15vw;
`

const Img = styled.div`
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
  background-position: center;
`
const HeroImg = styled(Img)`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-column: 2;
  }
`
//Photo by Sandro Katalina on Unsplash Photo by Annie Spratt on Unsplash Photo by Muhd Asyraaf on Unsplash
