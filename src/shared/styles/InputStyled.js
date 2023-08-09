import styled from "styled-components";

const InputStyled = styled.div`
  height: 65px;
  position: relative;
  width: 100%;

  .container {
    width: 100%;
    position: relative;

    :not(:hover) {
      svg {
        color: ${({ errors, value, required }) =>
          errors && !value && required ? "#e80700" : "#ccc"};
      }
    }
  }

  input {
    color: black;
    padding: ${({ icon }) => `12px 0 12px ${icon ? 48 : 17}px`};
    width: 100%;
    font-size: 12px;
    border: 1px solid
      ${({ errors, value, required }) =>
        errors && !value && required ? "#e80700" : "#888"};
    border-radius: 10px;
    width: 100%;
    transition: border, color 0.2s ease-in-out;
    background: transparent;

    :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      box-shadow: 0 0 0px 1000px #222b36 inset;

      :focus {
        box-shadow: 0 0 0px 1000px #266798 inset;
      }
    }

    ::placeholder {
      color: #ccc;
    }

    :hover {
      border: 1px solid #ccc;
    }

    :focus {
      outline: 0;
      border: 1px solid #ccc;
      background: #266798;
    }
  }
`;

export default InputStyled;
