import React, { useState } from 'react';
import { onSearchByName, deleteAct } from '../actions/index';
import { useDispatch } from 'react-redux';
import StyledForm from '../Style/StyledOnSearchNames'


export default function OnSearchName({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInput(c) {
        c.preventDefault()
        setName(c.target.value)

    };
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(onSearchByName(name))
        setName('')
        setCurrentPage(1)
    }

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
