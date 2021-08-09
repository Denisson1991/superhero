import React from 'react'
import useRequestData from '../../services/useRequestData';
import BASE_URL from '../../constants/url';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/actions/heroActions';
import {    
    CardContainer,
    CardImg,
    Tittle,    
} from "./styled"
import { useHistory } from 'react-router-dom';
import Detalhes from '../../pages/detailPage/Detalhes';

const CardHero = () => {       
    const dispatch = useDispatch()
    useRequestData(`${BASE_URL}/search/ab`)

    const heroes = useSelector((state) => state.allHeroes.heroes)
    const modalVisibily = useSelector((state) => state.changeModal.modal)    

    const modal = (id) => {
        dispatch(setModal(id))          
    }
    
    return (

        <>{modalVisibily? <Detalhes />: null }
            {heroes ? heroes.map((hero) => {

                return <CardContainer onClick={() => modal(hero.id)} id={hero.id}>
                            
                            <CardImg alt='Imagem do Heroi' src={hero.image.url}></CardImg>
                            <Tittle>{hero.name}</Tittle>                           

                        </CardContainer>
                    }): alert("Não encontrado! Verifique o nome digitado e tente novamente.")}
        </>
    );
};

export default CardHero;