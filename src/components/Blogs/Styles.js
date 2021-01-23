import styled from "styled-components"

const BlogsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;

  .blog {
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    min-height: 50vh;
    padding: 2rem 0;

    .blog-header {
      text-align: center;
      width: 100%;
      padding-bottom: 2rem;
      color: ${props => props.theme.text};
      h3 {
        font-family: ${props => props.theme.primaryFont};
        color: white;
      }
    }
  }
`

const Blog = styled.div`
  width: 30%;
  margin: 1rem auto;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
  }
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    transform: scale(1.01);

    @media (max-width: 570px) {
      transform: scale(1);
      background-color: inherit;

      .blog-content {
        background-color: inherit;
        color: inherit;
      }
    }

    .blog-content {
      background-color: ${props => props.theme.primaryColor};
      border: 2px solid white;
      color: white;

      p {
        color: white;
      }
    }
  }

  @media (max-width: 950px) {
    width: 45%;
  }

  @media (max-width: 570px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }

  .blog-content {
    border: 1px solid black;
    margin: 2rem 0;
    padding: 2rem;
    background-color: white;
    color: black;

    h3 {
      padding-bottom: 1rem;
      font-size: 2rem;
      font-weight: 900;
      font-family: ${props => props.theme.secondaryFont};
    }

    p {
      padding: 0.5rem 0;
      color: #8c8c8c;
      font-family: ${props => props.theme.primaryFont};
    }
  }
`

export { BlogsList, Blog }
