import styled from "styled-components"

const Img = styled.div`
  height: 100vh;
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
  background-position: center;
`
export default Img
