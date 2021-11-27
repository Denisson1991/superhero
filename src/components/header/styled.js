import styled from 'styled-components'

export const ContainerInput = styled.div `
    margin: 0 auto;
    font-family: Roboto;
    text-align: center;
    width: 90vw;
    display: flex;
    position: absolute;     
    justify-content: space-around;  
    
    
    

    @media (min-width: 600px) {        
        margin: 15px 37px 8px 558px;      

    };

    @media (min-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: center; 
        position: absolute;
        margin: 0 auto;
        
    
        

    };
`
export const ContainerInput2 = styled.input `
    font-size: 17px;
    font-family: Roboto;
    height: 35px;
    width: 70vw;
    border-radius: 10px;
    background-color: white;  


`
