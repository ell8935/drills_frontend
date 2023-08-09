import styled from "styled-components";

const ExpertiseStyled = styled.div`
  .toggleable {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    width: 150px;
    height: 150px;
    user-select: none;
  }

  img {
    width: 40px;
    height: 40px;
    grid-template-columns: 1fr;
    justify-self: center;
    align-self: center;
  }

  .expertiseTitle {
    text-align: center;
  }

  .vmark {
    position: absolute;
    top: 0;
    right: 0;
    color: #2a6bda;
    align-self: end;
    justify-self: end;
  }
  .circle {
    position: absolute;
    top: 0;
    right: 0;
    color: gray;
    align-self: end;
    justify-self: end;
  }

  .active {
    filter: sepia(99%) saturate(500%) hue-rotate(180deg);
  }

  p {
    color: #333;
    font-size: 1.5rem;
  }
`;

export default ExpertiseStyled;
