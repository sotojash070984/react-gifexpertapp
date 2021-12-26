import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AnadirCategoria = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias( cates=>[inputValue,...cates]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}

AnadirCategoria.propTypes={
    setCategorias:PropTypes.func.isRequired
}
