
import React, { Fragment,useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Evita que al hacer enter en un formulario se refresqué la pantalla
        e.preventDefault();
        //Para validar que no se inserte algo vacío
        if( inputValue.trim().length>2 ){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}