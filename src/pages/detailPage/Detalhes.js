import React, { useState } from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';
import {    
    CardContainer,
    CardImg,
    Tittle,
    CardInfo,
    ContainerModal,    
    Button,
    Container1,
    Container2
} from "./styled"
import { setModal } from '../../redux/actions/heroActions';



const Detalhes = () => {
    const modalVisibily = useSelector((state) => state.changeModal.modal)
    const heroes = useSelector((state) => state.allHeroes.heroes)    
    const dispatch = useDispatch()


    const closeModal = () => {
        dispatch(setModal(null))
    } 

    const filtrado = heroes.filter((idHero) => {
        
        if((idHero.id) === modalVisibily) {
            
            return true
        }
        else{
            return false;
        } 
        
       
    })
    

    
    return <ContainerModal  onClick={closeModal} >
        
                {filtrado && filtrado.map((hero) => {
                
                return <CardContainer   id={hero.id}>

                            <CardImg alt='Imagem do Heroi' src={hero.image.url}></CardImg>

                            <Tittle >{hero.name} # {hero.id}</Tittle>
                            <Button><HighlightOffIcon onClick={closeModal} fontSize="large" /></Button>
                            <CardInfo>
                                <Container1>
                                    <p>Raça: {hero.appearance.race}</p>
                                    <p>Editor: {hero.biography.publisher}</p>
                                    <p>Gênero: {hero.biography.gender}</p>                                
                                    <p>Altura: {hero.appearance.height[1]}</p>
                                    <p>Peso: {hero.appearance.weight[1]}</p>
                                    <p>Codinomes: {hero.biography.aliases[0]} ou {hero.biography.aliases[1]}</p>                                
                                </Container1>

                                <Container2>
                                    <p >Inteligência:<progress max="100" value={hero.powerstats.intelligence}></progress> {hero.powerstats.intelligence} </p>
                                    <p >Força:<progress max="100" value={hero.powerstats.strength}></progress> {hero.powerstats.strength} </p>
                                    <p >Velocidade:<progress max="100" value={hero.powerstats.speed}></progress> {hero.powerstats.speed} </p>
                                    <p >Resistência:<progress max="100" value={hero.powerstats.durability}></progress> {hero.powerstats.durability} </p>
                                    <p >Poder:<progress max="100" value={hero.powerstats.power}></progress> {hero.powerstats.power} </p>
                                    <p >Combate:<progress max="100" value={hero.powerstats.combat}></progress> {hero.powerstats.combat} </p>                                
                                </Container2>

                                
                            </CardInfo>

                        </CardContainer>
                    })}

                
            </ContainerModal>
}
export default Detalhes;