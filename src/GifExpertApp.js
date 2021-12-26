import React,{useState} from 'react'

import { AnadirCategoria } from './components/AnadirCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias=['One punch','Samurai X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['One punch'])

    const handleAdd=()=>{
        setCategorias([...categorias,'HunterXHunter']);
        //setCategorias( cates=>[...categorias,'HunterXHunter']);
    }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AnadirCategoria setCategorias={setCategorias}></AnadirCategoria>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categorias.map(categoria=>
                     <GifGrid key={categoria} categoria={categoria}></GifGrid>
                )}
            </ol>
        </div>
    )
}
