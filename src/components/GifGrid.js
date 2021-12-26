import React,{useEffect,useState} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria}) => {
    /* const [images, setImages] = useState([])
    useEffect(()=>{
        getGifs(categoria)
            .then(imgs=>setImages(imgs))
    },[categoria]); */

    const {data:images,loading}=useFetchGifs(categoria);
    
    
    return (
        <>
            <div className='card-grid'>
                <h3>{categoria}</h3>
                    {
                        loading && <p>Trabajando...</p>
                    }            

                    {
                         images.map(img=>(
                            <GifGridItem key={img.id} {...img}></GifGridItem>
                        )) 
                    }
                
            </div>
        </>
        
    )
}
