import React, { useState } from 'react';
import { onSearchByName, get_countries } from '../actions/index';
import { useDispatch } from 'react-redux';
import StyledForm1 from '../Style/StyledOnSearchName'


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
        setCurrentPage(1)

    }


    return (

        <StyledForm1> 

            <input
                type='text'
                placeholder='Name: (ex: Ecuador...)'
                onChange={(e) => handleInput(e)} />


            <button className='submit' type='submit' onClick={(e) => handleSubmit(e)}>
                SEARCH </button>
        </StyledForm1>

    )
};
