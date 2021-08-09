import React from 'react'
import {ContainerInput, ContainerInput2} from './styled'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroes, setOnchange } from '../../redux/actions/heroActions';
import BASE_URL from '../../constants/url';
import axios from 'axios';


const Header = () => {
    const valueInput = useSelector((state) => state.onchange.onchange)
    const dispatch = useDispatch()
    
    const onchangeInput = (e) => {
        console.log(valueInput)
        dispatch(setOnchange(e.target.value))
    }    
    
    const onClickSearch = (event) => { 
        event.preventDefault()
        dispatch(setOnchange(""))               
        axios.get(`${BASE_URL}/search/${valueInput}`)
        .then((response) => {
            dispatch(setHeroes(response.data.results))
            
        })
        .catch((err) => { alert(err) 
        })         
    }

    return(
        
        <ContainerInput>        
            <form onSubmit={onClickSearch}>
                <ContainerInput2
                    type="text"
                    placeholder="Buscar Heroi" 
                    value={valueInput}
                    onChange={onchangeInput}                    
                />                  
            </form>    
            <Button
                variant="contained"
                color="secondary"
                size="medium"  
                onClick={onClickSearch}
            >Buscar</Button>
            
        </ContainerInput>

    )
}

export default Header;