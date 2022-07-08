import React, { useState } from 'react';
import { onSearchByName, deleteAct } from '../actions/index';
import { useDispatch } from 'react-redux';
import StyledForm from '../Style/StyledOnSearchNames'

function validateOnSearch(name) {
    const error = {};
    if (!name || isNaN(name)=== false) { error.name = "error"; }
    return error;
}

export default function OnSearchName({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [error, setError] = useState({});


    function handleInput(c) {
        c.preventDefault()
        setName(c.target.value)

    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validateOnSearch(name))
        const errores = validateOnSearch(name)
        if(Object.values(errores).length !== 0) {alert('Se requiere de un nombre')}
        else {
        dispatch(onSearchByName(name))
    }}

    // const handleSubmit = (e) => {

    //     e.preventDefault()
    //     setError(validateOnSearch(name))

    //     console.log(error)
    //     if(error.length){
    //         alert ('Error')
    //     } else{
    //         dispatch(onSearchByName(name))
    //         setName('')
    //         setCurrentPage(1)
    //     }
    // }
    return (
        <StyledForm> 
            <input
                value={name}
                type='text'
                placeholder='Name: (ex: Ecuador...)'
                onChange={(e) => handleInput(e)} />
            <button className='submit' type='submit' onClick={(e) => handleSubmit(e)}>
                SEARCH </button>
        </StyledForm>

    )
};
