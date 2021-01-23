import styled from "styled-components"

const Contact = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  .contact {
    width: 100%;
    margin: 2rem;
    padding: 2rem 0;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;

    h3 {
      width: 100%;
      text-align: center;
      color: white;
    }

    .contact-form {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 900px) {
        width: 70%;
      }

      @media (max-width: 750px) {
        width: 90%;
      }
    }

    .contact-form-image {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 750px) {
        display: none;
      }

      img {
        width: 300px;
        height: 300px;
        filter: ${props =>
          props.theme.type === "dark" ? "grayscale(100%)" : ""};

        &:hover {
          filter: grayscale(0);
        }
        @media (max-width: 900px) {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
`

export default Contact
