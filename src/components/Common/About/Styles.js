import styled from "styled-components"

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    /* margin: 1rem auto;
    width: 95%; */
  }

  .bg {
    margin: 1rem;
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    min-height: 60vh;
    padding: 2rem 0;
    align-items: center;
    justify-content: space-evenly;


  }

  .about-content {
    width: 45%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 750px) {
      width: 90%;
    }

    h3 {
      font-family: "Concert One", cursive;
      padding: 2rem 0;
      color: white;
      @media (max-width: 750px) {
        width: 100%;
        text-align: center;
      }
    }

    p {
      line-height: 3rem;
      color: white;
      font-size: 2rem;
      font-family: "Meera Inimai", sans-serif;
    }
  }
  .about-image {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    @media (max-width: 750px) {
      width: 90%;
    }

    img {
      -webkit-box-shadow: 10px 10px 2px 2px
        ${props =>
          props.theme.type === "light" ? "#a3a3a3" : props.theme.primaryColor};
      -moz-box-shadow: 10px 10px 2px 2px
        ${props =>
          props.theme.type === "light" ? "#a3a3a3" : props.theme.primaryColor};
      box-shadow: 10px 10px 2px 2px
        ${props =>
          props.theme.type === "light" ? "#a3a3a3" : props.theme.primaryColor};
      transition: all 0.3s ease-in-out;

      width: 400px;
      background-color: white;
      object-fit: cover;
      margin: 0 auto;
      border-radius: 10px;
      height: 400px;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);

      &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }

      @media (max-width: 910px) {
        width: 100%;
      }

      @media (max-width: 850px) {
        border-radius: 50%;
        width: 300px;
        height: 300px;
        -webkit-box-shadow: 0px 0px 5px 3px #a3a3a3;
        -moz-box-shadow: 0px 0px 5px 3px #a3a3a3;
        box-shadow: 0px 0px 5px 3px #a3a3a3;
      }

      @media (max-width: 400px) {
        width: 250px;
        height: 250px;
      }
    }
  }
`

export default About
