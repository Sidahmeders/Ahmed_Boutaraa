import styled from "styled-components"

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 50;
  background-color: ${props =>
    props.theme.type === "light"
      ? props.theme.tertiaryColor
      : props.theme.tertiaryColor};
  opacity: 1;
  border-bottom: 0.1px solid #8c8c8c;
  /* margin-bottom: 10rem; */
  padding: 1rem 2rem;

  img {
    width: 75px;
    height: auto;
    cursor: pointer;
  }

  .logo {
    color: teal; 
    font-size: 22px;
    font-family: Ubuntu;
  }

    p {
      color: #2d8180;
      font-size: 19px;
      font-family: monospace
    }
}
`

export default Navigation
