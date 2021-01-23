import styled from "styled-components"

const SkillsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .skills {
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    min-height: 50vh;
    padding: 2rem 0;

    .skills-header {
      text-align: center;
      width: 100%;
      padding-bottom: 2rem;

      h3 {
        font-family: ${props => props.theme.primaryFont};
      }
    }

    .skills-body {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      justify-content: space-evenly;
      flex-direction: row-reverse;

      @media (max-width: 850px) {
        flex-direction: column;
      }

      .skills-body-content {
        display: flex;
        flex-wrap: wrap;
        width: 45%;

        @media (max-width: 850px) {
          width: 95%;
        }
        .skills-body-content-header {
          display: flex;
          align-items: center;
          color: ${props => props.theme.primaryColor};
          margin: 2rem auto;
          i {
            padding: 0 2rem;
            color: ${props =>
              props.theme.type === "light"
                ? props.theme.primaryColor
                : props.theme.text};
          }
          h3 {
            margin: 1 2rem;
            font-family: ${props => props.theme.primaryFont};
            color: ${props => props.theme.text};
          }
        }

        .skills-body-content-details {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;

          span {
            color: ${props => props.theme.primaryColor};
            margin: 2rem auto;
            font-weight: 900;
          }
          h4 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            line-height: 3rem;
            font-family: ${props => props.theme.secondaryFont};
          }
        }
      }

      .skills-body-items {
        display: flex;
        flex-wrap: wrap;
        width: 45%;

        @media (max-width: 850px) {
          width: 95%;
        }
      }
    }
  }
`

const Skill = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 0 0.5rem;
  display: flex;
  flex-wrap: wrap;

  .skill-header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    i {
      padding: 0 2rem;
      color: ${props =>
        props.theme.type === "light"
          ? props.theme.primaryColor
          : props.theme.text};
    }

    h4 {
      font-family: ${props => props.theme.primaryFont};
      font-size: 2.5rem;

      @media (max-width: 400px) {
        font-size: 2.3rem;
      }
    }
  }

  .skill {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 850px) {
      justify-content: center;
    }

    p {
      padding: 1.3rem 1rem;
      font-family: ${props => props.theme.secondaryFont};
      background-color: ${props => props.theme.primaryColor};
      color: white;
      margin: 1rem;
      border-radius: 5px;
      text-align: center;
      display: flex;
      align-items: center;
      line-height: 0.5;
    }
  }
`

export { SkillsList, Skill }
