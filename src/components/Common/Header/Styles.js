import styled from "styled-components"

const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-around;
  padding-bottom: 2rem;

  .content {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;

    .header-content {
      width: 50%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;

      @media (max-width: 800px) {
        width: 90%;
      }

      .header-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 3rem;

        h1 {
          margin: 1rem 0;
          font-family: "Concert One", cursive;
          font-size: 7rem;

          .name {
            color: ${props => props.theme.secondaryColor};
          }

          @media (max-width: 500px) {
            padding: 0 1rem;
            font-size: 4.5rem;
          }

          @media (max-width: 350px) {
            padding: 0 1rem;
            font-size: 4rem;
          }
        }

        .Typist {
          font-size: 4rem;
          font-family: "Meera Inimai", sans-serif;
          @media (max-width: 450px) {
            font-size: 3rem;
          }

          @media (max-width: 350px) {
            font-size: 2rem;
          }
          .Cursor {
            padding: 0 0.1rem;
          }
        }
        .header-actions {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          button {
            margin: 0 1rem;
          }
        }
      }
    }
  }
`

export default Header
