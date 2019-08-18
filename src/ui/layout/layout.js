import React from "react"
import theme from "ui/theme/theme"
import Nav from "components/nav"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Cormorant:400i|Nunito:700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background:${({ theme }) => theme.colors.background};
        color:${({ theme }) => theme.colors.primary};
        font-family: 'Cormorant', serif;
        font-size: calc(12px + 0.35vw);
        line-height: calc(12px + 1.05vw);
        overflow-x:hidden;
    }
    h1, h2, h3, button{
        font-family: 'Nunito', sans-serif;
        margin: calc(12px + 1.05vw) 0;
    }
    h1 {
    font-size: 4em;
    line-height: calc(50px + 2.5vw);
    }

    h2 {
    font-size: 4em;
    line-height: calc(18px + 1vw); 
    }

    h3 {
    font-size: 1.471em;
    line-height: calc(18px + 0.7vw); 
    }
    p{
      font-size: 2.471em;
    line-height: calc(25px + 1.5vw); 
    }
    img{
      max-width:100%;
      z-index:0;
    }
    a{
      text-decoration:none;
      color:inherit;
    }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Nav />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
