import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { get_countries, filterContinent, orderByName } from '../actions/index'

export default function FilterByAscDesc({ setFilter, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleOrdChange(e) {
    e.preventDefault()
    if (e.target.value !== 'all') {
      dispatch((orderByName(e.target.value)))
      setCurrentPage(1)
      setFilter(e.target.value)
    } else {
      dispatch(get_countries())
      setCurrentPage(1)
      setFilter(e.target.value)
    }
  }

  useEffect(() => {
    dispatch(filterContinent)
  }, [dispatch])

  return (
    <div>
      <div >
        <select onChange={e => handleOrdChange(e)}>
          <option hidden> Ordenado Alfabetico</option>
          <option value='all' key='all'> Alfabeticamente</option>
          <option value='ascendente' key='ascendente'> A - Z </option>
          <option value='descendente' key='descendente'> Z - A </option>
        </select>
      </div>
    </div>
  )
}
