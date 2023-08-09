import styled from "styled-components";

const AuthScreenWrapperStyled = styled.div`
  display: flex;
  height: 100vh;

  .rightBox {
    display: flex;
    flex: 4;
    flex-direction: column;
    border-radius: 50px 0 0 50px;
    background-color: white;
    align-items: center;

    .header {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin-top: 10px;
      .LoginRegisterButton {
        margin-left: 10px;
      }
    }

    .child {
      display: flex;
      flex: 1;
      width: 100%;
    }
  }

  .leftBox {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 5rem;

    .copyRight {
      position: absolute;
      top: 94%;
      left: 0;
      direction: row;
      align-items: center;
    }
  }
`;

export default AuthScreenWrapperStyled;
