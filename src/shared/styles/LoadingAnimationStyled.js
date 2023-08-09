import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingAnimationStyled = styled.div`
  display: flex;
  flex: 1;
  .loader {
    align-self: center;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-top-color: #333;
    animation: ${spin} 1s linear infinite;
  }
`;

export default LoadingAnimationStyled;
