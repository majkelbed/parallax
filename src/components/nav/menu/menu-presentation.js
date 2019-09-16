import styled from "styled-components"

export const MenuToggle = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 3em;
  width: 3em;

  margin: 0;

  border: none;
  background: none;
`

export const Toggle = styled.span`
  display: block;
  width: 2em;
  height: 0.3em;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 100px;

  ::after,
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 2em;
    height: 0.3em;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 100px;
  }

  ::after {
    top: 0.7em;
  }

  ::before {
    top: 2em;
  }
`
export const ClosingToggle = styled(Toggle)`
  background-color: transparent;
  ::after {
    top: 0;
    transform: rotate(45deg);
  }
  ::before {
    top: 0;
    transform: rotate(-45deg);
  }
`

export const StyledExpandingNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  max-width: 650px;
  height: 100vh;
  padding: 3em;
  transform: scale(1.1);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray};
`

export const Link = styled.h3`
  color: ${({ theme }) => theme.colors.red};
  font-size: 65px;
`
