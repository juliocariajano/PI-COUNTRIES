import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { get_countries, createActivity } from '../actions/index'
import StyledCreate, { StyledRange } from "../Style/StyledCreateActivity";
import NavBar from './NavBar'

function validateCreateActivity(input) {
    const error = {};
    if (!input.name || isNaN(input.name)=== false) { error.name = "Se requiere un nombre de actividad"; }
    if (!input.difficulty) { error.difficulty = "Dificultad debe ser del rango del 1 al 5" }
    if (!input.duration) { error.duration = "Duracion debe ser completado" }
    if (!input.season) { error.season = "Debe elegir una Temporada" }
    if (!input.countries.length) { error.countries = "Debe elegir al menos un pais" }
    console.log(error)
    return error;
}
export default function ActivitiesCreate() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const allCountries = useSelector((state) => state.allCountry);
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })
    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
        })
    }
    useEffect(() => {
        dispatch(get_countries());
    }, [dispatch]);
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
        setError(validateCreateActivity({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
    function handleCheck(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelect(e) {
        e.preventDefault()
        if (!input.countries.includes(e.target.value) && e.target.value !== 'country')
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]                                                                 //Concateno el valor del input
            })
    };

    
    function handleSubmit(el) {
        el.preventDefault();
        console.log(input)
        setError(validateCreateActivity(input))
        const alerts = validateCreateActivity(input)
        if (Object.values(alerts).length !== 0) { alert('Se requieren todos los campos') }
        else {
            dispatch(createActivity(input))
            alert('Actividad creada exitosamente!')
            setInput({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []
            })
            history('/home')
        }
    };

    return (
        
        <StyledCreate>
              <NavBar />         
            <form onSubmit={(e) => handleSubmit(e)}>            
            <h2>CREAR UNA ACTIVIDAD</h2>
            <div className="inputs">
                    <div>
                            <h4>Nombre:</h4>
                            <input placeholder='Ej:(Surf...)' 
                            type="text" 
                            value={input.name} 
                            name="name" 
                            onChange={(e) => handleChange(e)} />
                            {error.name && (
                                <p className="error">{error.name}</p>
                            )}
                        </div>
    <div className="barrasContainer">
        <div>
            <label>Dificultad: </label>
            <label>
              <StyledRange
                name="difficulty"             
                type="range"
                value={input.difficulty}
                min={"1"}
                max={"5"}
                onChange={(e) => handleChange(e)}/>
                {input.difficulty}
                {error.difficulty && (
                        <p className="error">{error.difficulty}</p>
                    )}
            </label>
               
            </div>
        <div>
            <label>Duracion: </label>
            <label>
              <StyledRange
                name="duration"             
                type="range"
                value={input.duration}
                min={1}
                max={200}
                onChange={(e) => handleChange(e)}/>
                {input.duration}
                {error.duration && (
                        <p className="error">{error.duration}</p>
                    )} 
            </label>                    
        </div>
        <div>
                    <label>Temporada:</label>
                    <label><input type="radio" value="Verano" name="check" onChange={(e) => handleCheck(e)} />Verano</label>
                    <label><input type="radio" value="Otoño" name="check" onChange={(e) => handleCheck(e)} />Otoño</label>
                    <label><input type="radio" value="Invierno" name="check" onChange={(e) => handleCheck(e)} />Invierno</label>
                    <label><input type="radio" value="Primavera" name="check" onChange={(e) => handleCheck(e)} />Primavera</label>
                    {error.season && (
                        <p>{error.season}</p>
                    )}
        </div>
        <div className="types">
            
        </div>
        <div>
        <label>Elegir un Pais:</label>

            <select 
            // value={input.countryPrimary}
            onChange={e => handleSelect(e)}>
                        <option hidden>Seleccionar uno o varios Paises</option>
                        {/* <option > Seleccione Pais</option> */}
                        <div></div>
                        {!input.countries.length && (
                            <p>{error.countries}</p>)}
                        {allCountries.map((act) => (
                            <option value={act.name}>{act.name}</option>
                        ))}
                        {/* {error.countries && (
                            <p>{error.countries}</p>)} */}
                       
                </select>
            </div>
            
            {input.countries.map(e =>
          <div >
             <spam className="deleteCountry" onClick={()=> handleDelete(e)}>{e} </spam>
            </div>
            )}     
            </div>       
        </div>
<button
        className="finalButton" 
        type='submit'
     
        >Crear actividad</button> </form>        

<Link to='/home'><button className='submit-activity' >Home</button></Link>


        </StyledCreate>
        

    )
}