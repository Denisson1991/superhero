import styled from "styled-components"

export const ScreenContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw; 
  position: absolute;
  top: 65px;

  
  @media (min-width: 500px) {    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
    column-gap: 35px;    
    position: absolute;
    top: 65px;
  };

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  };

  @media (min-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  };
`



