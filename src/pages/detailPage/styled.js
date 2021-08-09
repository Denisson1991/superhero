import styled from "styled-components"

export const Button = styled.div` 
    position: absolute;
    top: 3px;
    right: 10px;
    color: white;
    &: hover{
        cursor: pointer;
    };

    @media (min-width: 700px) {
        color: black;
    };
`

export const CardImg = styled.img`
    border-radius: 10px 10px 0px 0px;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    position: fixed;
    top: 0px;
    left: 0px;

    @media (min-width: 700px) {
        position: absolute;
        width: 40vw;
        height: 82vh;
        left: 0px;
        opacity: 0.8;
    };
`

export const CardContainer = styled.div`
    width: 100vw;
    height: 90vh;
    margin-top: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    position: relative;


    @media (min-width: 700px) {  
        margin-top: 50px;  
        width: 80vw;
        height: 82vh;
        background-color: #bdc3c7;
        animation: transicion 3s;

        @keyframes transicion{
            0%{
                transform: scale(1.2);
            }
            100%{
                transform: scale(1);
            }
        }


        
    }; 
`

export const Tittle = styled.p`
    font-size: 28px;
    font-family: Roboto;
    font-weight: 600;
    position: absolute;
    top: 10px;
    right: 15px;
    border-radius: 8px ;
    width: 90vw;
    text-align: center;
    background-color: red;

    @media (min-width: 700px) {    
        width: 25vw;
        position: absolute;
        right: 110px;
        top: 0px;
    }; 

`



export const CardInfo = styled.div`
    width: 90vw;
    height: 75vh;
    position: fixed;
    top: 90px;
    right: 15px;
    list-style: none;
    padding: 5px;


    @media (min-width: 700px) {    
        width: 38vw;
        position: absolute;    
        height: 65vh;
    
        >p {
            font-size: 40px;
            color: black;
        }
    }; 
`
export const Container2 = styled.div`
    >p {
        color: white;
    }

    @media (min-width: 700px) {    
        
        margin-top: 0px;
        >p {
            font-size: 16px;
            font-family: Roboto;
            font-weight: 600;
            color: black;
            
        }
    }; 
 
`

export const Container1 = styled.div`
    margin-bottom: 90px;
    >p {
        color: white;
        font-size: 15px;
        font-family: Roboto;
        font-weight: 600;
    }

    @media (min-width: 700px) {    
        
        margin-bottom: 5px;
        >p {
            font-size: 15px;
            font-family: Roboto;
            font-weight: 500;
            color: black;
            
        }
    }; 

`

export const ContainerModal = styled.div` 
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 10;
    background-color:  RGBA( 169, 169, 169, .5 );
    justify-content: center;
    align-self: center;

    @media (min-width: 700px) { 
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    right: 0px;
    top: 0px;
    z-index: 10;
    background-color:  RGBA( 169, 169, 169, .5 );
    display: flex;
    justify-content: center;
    align-self: center;
}
`
