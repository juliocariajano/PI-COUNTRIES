import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getActivities, filterAct } from '../actions/index'

export default function FilterByActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const allActivity = useSelector((state) => state.stateActivity)

  function handleChange(e) {
    dispatch(filterAct(e.target.value))
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
      <div >
        <select onChange={e => handleChange(e)}>
          <option hidden > ACTVIDADES </option>
          {allActivity.map((filter) => (
            <option key={filter.name}>{filter.name} </option>
          ))}
        </select>
      </div>
    </div>
  )
}
