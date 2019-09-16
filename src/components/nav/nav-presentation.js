import styled from "styled-components"

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

export { StyledNav }
