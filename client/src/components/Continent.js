import React from 'react'
import { useSelector } from 'react-redux'
import { get_countries, filterContinent } from '../actions/index'
import { useDispatch } from 'react-redux'

export function Continent({ setCurrentPage }) {
  const dispatch = useDispatch();
  let all_Countries = useSelector((state) => state.setCountry);
  let all_Continents = all_Countries.map(e => e.continent);
  let allContinent = new Set(all_Continents);
  let continent = [];
  continent = [...allContinent]
  
  function handleChange(c) {
    c.preventDefault()
    dispatch(filterContinent(c.target.value))
    setCurrentPage(1)
  }
  return (
    <nav>
      <select onChange={c => handleChange(c)}>
        <option value='all'>Continentes</option>
        {
          continent.map(e =>
            <option key={e.toString()} value={e}>{e}</option>)
        }

      </select>

    </nav>
  )
}
