import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import BASE_URL from "../constants/url"
import { setHeroes } from "../redux/actions/heroActions"






const useRequestData = (url) => {
    const dispatch = useDispatch()
    useEffect(() => {
        
        
        axios.get(url)
        .then((response) => {
            dispatch(setHeroes(response.data.results))
        })
        .catch((err) => { console.log(err) 
        })
        


    }, [url])


}

   


export default useRequestData;