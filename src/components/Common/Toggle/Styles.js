import styled from "styled-components"

const ToggleContainer = styled.button`
  background: ${({ theme }) =>
    theme.type === "light" ? theme.primaryColor : theme.tertiaryColor};
  border: none;
  /* border-radius:  30px; */
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline-color: ${({ theme }) =>
    theme.type === "light" ? theme.primaryColor : theme.tertiaryColor};

  &:focus {
    outline-color: ${({ theme }) =>
      theme.type === "light" ? theme.primaryColor : theme.tertiaryColor};
  }

  i {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    color: white;
    &:first-child {
      transform: ${({ theme }) =>
        theme.type === "light" ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.type === "light" ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`

export default ToggleContainer
