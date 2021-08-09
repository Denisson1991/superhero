import React from 'react'
import { useSelector } from 'react-redux'
import CardHero from '../../components/cardHero/CardHero'
import {ScreenContainer, Back} from "../homePage/styled"
import LinearProgress from '@material-ui/core/LinearProgress';




const Home = () => {   
    
    return (                  
        <ScreenContainer>                        
            <CardHero/>     
        </ScreenContainer>
       
    )
}

export default Home;