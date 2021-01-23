import styled from "styled-components"

const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-family: ${props => props.theme.secondaryFont};
  }

  .projects {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 95vh;
    align-items: center;
    text-align: center;
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    margin: 1rem;
    border-radius: 10px;
    padding: 0 5rem;
    overflow: scroll;
    margin-top: 70px;

    .home {
      width: 100%;
      text-align: center;
      color: ${props =>
        props.theme.type === "light"
          ? props.theme.primaryColor
          : props.theme.text};
      font-size: 2rem;
      margin: 3rem 0;
    }

    .projects-list {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      flex-direction: column;

      @media (max-width: 1000px) {
        width: 80%;
      }

      @media (max-width: 800px) {
        width: 90%;
      }

      @media (max-width: 700px) {
        width: 100%;
      }

      .project {
        background-color: white;
        margin: 2rem 0;
        padding: 2rem 0;
        min-height: 200px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
        border-radius: 10px;

        h3 {
          width: 100%;
          text-align: center;
          color: ${props => props.theme.primaryColor};
          font-family: "Concert One", cursive;
        }

        p {
          font-size: 1.6rem;
          margin: 2rem 0;
          color: black;
          font-family: ${props => props.theme.secondaryFont};
          padding: 0 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          margin: 1rem auto;

          span {
            background-color: ${props => props.theme.secondaryColor};
            padding: 1rem;
            margin: 1rem;
            font-size: 1.3rem;
            border-radius: 5px;
            color: white;
            font-family: ${props => props.theme.secondaryFont};

            @media (max-width: 650px) {
              font-size: 1.5rem;
            }

            @media (max-width: 400px) {
              font-size: 1.3rem;
            }
          }
        }

        .project-links {
          display: flex;
          justify-content: center;

          a {
            color: ${props => props.theme.secondaryColor};
            transition: all 0.3s ease-in-out;

            &:hover {
              transform: scale(1.09);
              color: black;
            }
            i {
              padding: 0 2rem;
            }
          }
        }
      }
    }
  }
`
const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .success {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 95vh;
    align-items: center;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;

    margin: 1rem;
    border-radius: 10px;
    padding: 0 5rem;

    @media (max-width: 1030px) {
      padding: 0 2rem;
    }

    @media (max-width: 875px) {
      flex-direction: column;
    }
    .success-image {
      display: flex;
      justify-content: center;
      width: 50%;
      img {
        width: 450px;
        height: 450px;

        @media (max-width: 875px) {
          width: 350px;
          height: 350px;
        }

        @media (max-width: 450px) {
          width: 300px;
          height: 300px;
        }

        @media (max-width: 350px) {
          width: 250px;
          height: 250px;
        }

        @media (max-width: 250px) {
          width: 150px;
          height: 150px;
        }
      }
    }

    .success-content {
      display: flex;
      justify-content: center;
      width: 50%;

      .success-content-detail {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 3rem;
          font-family: ${props => props.theme.secondaryFont};

          @media (max-width: 380px) {
            font-size: 2.5rem;
          }
        }
        a {
          font-size: 2.5rem;
          text-align: center;
          padding: 2rem 0;
          text-decoration: none;
          font-family: ${props => props.theme.secondaryFont};
          color: ${props => props.theme.primaryColor};
          @media (max-width: 300px) {
            font-size: 2rem;
          }
        }
      }

      @media (max-width: 875px) {
        margin: 3rem 0;
      }
    }
  }
`

const StyledHireMe = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  .hire {
    width: 100%;
    margin: 2rem;
    padding: 2rem 0;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
    min-height: 70vh;

    h3 {
      width: 100%;
      text-align: center;
      color: white;
      font-family: "Concert One", cursive;

      @media (max-width: 750px) {
        width: 100%;
        text-align: center;
      }
    }

    iframe {
      width: 800px;
      height: 400px;

      @media (max-width: 900px) {
        width: 60%;
      }

      @media (max-width: 800px) {
        width: 70%;
      }

      @media (max-width: 700px) {
        width: 80%;
      }

      @media (max-width: 500px) {
        width: 95%;
        height: 300px;
        margin-bottom: 2rem;
      }

      @media (max-width: 450px) {
        height: 250px;
      }
    }
  }
`

export { Success, StyledHireMe, Projects }
