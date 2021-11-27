import styled from "styled-components"

export const CardImg = styled.img `
  border-radius: 10px 10px 0px 0px;
  width: 90vw;
  height: 45vh;
  

  @media (min-width: 700px) {
      
      width: 100%;
      
      

  };
`

export const CardContainer = styled.div `
  width: 90vw;
  margin-top: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;

  @media (min-width: 700px) {    
      width: 100%;
      &: hover{
        cursor: pointer;  
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.1);
        
      };
      
  }; 
`
export const Tittle = styled.p`
  font-size: 25px;
  font-family: Roboto;
  text-align: center;
  font-weight: 500;
  margin-top: 15px;
  
  @media (min-width: 700px) {    
    margin-bottom: 5px;
    margin-top: 5px;
  }; 
`



