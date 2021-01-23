import styled from "styled-components"

const ContactDetail = styled.div`
  margin: 0 auto;

  a {
    padding: 0 1rem;
    color: ${props => props.color || props.theme.primaryColor};

    i {
      transition: all 0.3s ease-in-out;

      @media (max-width: 800px) {
        margin: 1rem 0;
        font-size: 4.5rem;
      }

      @media (max-width: 500px) {
        font-size: 4rem;
      }

      @media (max-width: 365px) {
        font-size: 3.5rem;
      }
      &:hover {
        transform: scale(1.1);
        color: ${props => props.theme.text};
      }
    }
  }
`

export default ContactDetail
