import styled from "styled-components"

export const ScreenContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw; 
  position: absolute;
  top: 65px;

  @media (min-width: 700px) {
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 10px;
    column-gap: 35px;    
    position: absolute;
    top: 65px;

};
`



