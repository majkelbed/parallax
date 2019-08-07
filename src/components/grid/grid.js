import styled from "styled-components"

const Grid = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;

  width: 100%;
  min-height: 100vh;

  padding: 0 3em;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(360px, 1fr));
  }
`
export default Grid
