import styled from "styled-components"

const Button = styled.button`
  padding: 1rem;

  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "Ubuntu", cursive;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: white;
    transform: scale(1.03);
  }
`

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0 2rem 0;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-family: "Ubuntu", cursive;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  outline: none;
  margin: 1rem 0;
  font-family: "Ubuntu", cursive;
`

const Form = styled.form`
  padding: 2rem;
  color: white;
  font-size: 2rem;

  label {
    font-family: ${props => props.theme.secondaryFont};
  }
  button {
    margin: 1rem auto;
    display: flex;
    min-width: 15%;
    justify-content: center;
  }
`

const DownArrow = styled.div`
  .downArrow {
    position: absolute;
    bottom: 0%;
    left: 50%;
    cursor: pointer;
    display: ${props => (props.theme.type === "light" ? "flex" : "none")};
  }
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }
  @-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
`

export { Button, Input, Form, TextArea, DownArrow }
