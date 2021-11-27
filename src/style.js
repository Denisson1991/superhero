import styled from 'styled-components'

export const Back = styled.img `
    position: fixed;
    top: 0px;    
    height: 100%;
    object-fit: cover;    
    animation: transicion 15s;

    @keyframes transicion{
        0%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1);
        }
    }
  

    @media (min-width: 700px) {
        
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;    
        animation: transicion 15s;

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
export const Root = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw

  @media (min-width: 700px) {    
    overflow: hidden;    
    position: relative;
    justify-content: center;   

    };
  
`