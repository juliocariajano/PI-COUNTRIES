import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { filter_Population, get_countries } from '../actions/index'

export default function FilterByPopulation({ setFilter, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleFilterPopuChange(e) {
    e.preventDefault()
    if (e.target.value !== 'all') {
      dispatch(filter_Population(e.target.value))
      setCurrentPage(1)
      setFilter(e.target.value)
    } else {
      dispatch(get_countries())
    }
    setCurrentPage(1)
    setFilter(e.target.value)
  }

  return (
    <div>
      <select onChange={e => handleFilterPopuChange(e)}>
        <option value='all' key='all'> Poblacion </option>
        <option value='Min' key='max'> Mínima - Maxima</option>
        <option value='max' key='min'> Maxima - Mínima</option>
      </select>

    </div>
  )
};
