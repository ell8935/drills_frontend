import styled from "styled-components";

const ExpertiseGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  overflow-y: auto; /* vertical scrollbar */
  height: 500px;
`;

export default ExpertiseGridStyled;
