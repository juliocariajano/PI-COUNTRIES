import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailCountry, setDetailCountry } from '../actions/index'
import { Link, useParams } from 'react-router-dom';
import StyledDetails from "../Style/StyleDetail";
import NavBar from './NavBar';

export default function DetailCountry() {
  const { cca3 } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.stateDetailCountry);
  console.log(country)
  console.log(cca3)
  useEffect(() => {
    dispatch(detailCountry(cca3))
    return () => { dispatch(setDetailCountry()) }
  }, [dispatch, cca3])
  return (
    
    <StyledDetails>
          <NavBar></NavBar>

      
       {/* <div> */}
         
     
        
      <Link to='/home'>
            <button >Back</button>
          </Link>
        
        
        {/* <h1> Cca3:{country.length ? country[0].cca3 : 'Cargando'}</h1> */}
        {/* <div className = ""> */}
        <div className="mainIMG" >
        <img className="mainIMG"  src={country.length ? country[0].imagen : 'Cargando'} />
        </div>
        
        <h2 className='font1'>Pais :{country.length ? country[0].name : 'Cargando'}</h2>
        {/* </div> */}
        <h2 className='font1'>Continente: {country.length ? country[0].continent : "Cargando"}</h2>
        <h2 className='font1'> Capital : {country.length ? country[0].capital : "Cargando"}</h2>
        <h2 className='font1'> Subregion: {country.length ? country[0].subregion : "Cargando"}</h2>
        <h2 className='font1'>Area: {country.length ? country[0].area : "Cargando"}</h2>
        <h2 className='font1'>Poblacion: {country.length ? country[0].population : "Cargando"}</h2>
        <h2 className='font1'>ACTIVIDADES:
        {country.length && country[0].activities.length ? country[0].activities.map(e => 'Nombre: ' + e.name + ',' + 'dificultad: ' + e.difficulty + ',' + e.duration + ',' + 'Temporada: ' + e.season + '.'): "No hay actividades"}

        </h2>
        {/* </div> */}

     

    </StyledDetails>

  )
}
