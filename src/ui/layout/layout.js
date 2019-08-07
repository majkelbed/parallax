import React from "react"
import theme from "ui/theme/theme"
import Nav from "components/nav/nav"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Cormorant|Nunito:700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background:${({ theme }) => theme.colors.white};
        color:${({ theme }) => theme.colors.primary};
        font-family: 'Cormorant', serif;
        font-size: calc(12px + 0.35vw);
        line-height: calc(12px + 1.05vw);
    }
    h1, h2, h3{
        font-family: 'Nunito', sans-serif;
        margin: calc(12px + 1.05vw) 0;
    }
    h1 {
    font-size: 1.912em;
    line-height: calc(18px + 1.8vw);
    }

    h2 {
    font-size: 1.616em;
    line-height: calc(18px + 1vw); 
    }

    h3 {
    font-size: 1.471em;
    line-height: calc(18px + 0.7vw); 
    }
    p{
      font-size: 2.471em;
    line-height: calc(18px + 1.4vw); 
    color:${({ theme }) => theme.colors.graphite}
    }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Nav />
        <Wraper>{children}</Wraper>
      </>
    </ThemeProvider>
  )
}

export default Layout

const Wraper = styled.div`
  display: grid;
  grid-gap: 4em;

  overflow-x: hidden;
`
