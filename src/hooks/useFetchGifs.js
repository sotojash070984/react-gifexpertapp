import React, { useEffect } from 'react'
import { useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
    const [estado, setEstado] = useState({
        data:[],
        loading:true
    });
    

    useEffect(()=>{
        getGifs(categoria)
            .then(imgs=>{
               setEstado({
                   data:imgs,
                   loading:false
               });
            })
    },[categoria]);

    return estado;
}
