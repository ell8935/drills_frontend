import styled from "styled-components";

const LoginFormStyled = styled.div`
  margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2rem;

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .noUnderLine {
    text-decoration: none;
  }
`;

export default LoginFormStyled;
