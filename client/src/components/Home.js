import React from 'react';
import { Link } from 'react-router-dom';
import { get_countries, filterContinent, orderByName, filterPopulation, filterAct } from '../actions/index'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginado from './Paginado';
import FilterByAscDesc from './FilterByAscDesc';
import { Continent } from './Continent';
import Card from './Card';
// import OnSearchName from './OnSearchName';
import FilterByActivity from './FilterByActivity';
import { StyledHome, StyledCards } from '../Style/StyledHome';
import { StyledFilter } from "../Style/StyledFilter.js";
import StyledDetails from "../Style/StyleDetail";
import OnSearchNames from './OnSearchNames';
import StyledNav from "../Style/StyledNavBar";
import NavBar from './NavBar';

export default function Home() {
  const dispatch = useDispatch();
  const getCountries = useSelector((state) => state.allCountry)
  const [currentPage, setCurrentPage] = useState(1)//estados local para paginado
  const [countryPage, setCountryPage] = useState(10)
  const indexOfLastCountry = currentPage * countryPage; //constante la el numero de paises de la ultimma pagina
  const indexFirsCountry = indexOfLastCountry - countryPage; // constante del indice del primer pais
  const currentCountry = getCountries.slice(indexFirsCountry, indexOfLastCountry) //constante para pais actual la cual llama a todos los paises y divide solo el indice del primer personaje y el indice el ultimo personaje
  //const currentCountry = get_countries.slice(indexFirsCountry, indexLastCountry);    //Divido el array entre 0 y 10
  const [filter, setFilter] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(get_countries())
    dispatch(filterContinent())
  }, [dispatch]);
  function handleClick(e) {
    e.preventDefault();
    dispatch(get_countries());
  }
  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(filterPopulation(e.target.value))
    setCurrentPage(1);
    setFilter(`Ordenado ${e.target.value}`)
  };

  return (
    <>
  <NavBar></NavBar>
  <StyledHome>
  <StyledFilter >
  <h3>FILTERS</h3>
    <div className="filters">
  <select onChange={e => handleSortPopulation(e)}>
          <option value='Mayor population'>Mayor poblacion</option>
          <option value='Menor population'>Menor poblacion</option>
        </select>
        <Continent setCurrentPage={setCurrentPage}></Continent>
        <FilterByActivity
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}></FilterByActivity>
        <FilterByAscDesc
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}></FilterByAscDesc>
         
         </div>
         <Link to='/activity' className="link"> Crear Activity </Link>
         <hr />
         <button onClick={e => { handleClick(e) }}>Reset</button>

  </StyledFilter>
  {/* <OnSearchName setCurrentPage={setCurrentPage} /> */}
  
    <div className= "box" >
        <Paginado
          countryPage={countryPage}
          getCountries={getCountries.length}
          paginado={paginado}
        />   
        <StyledCards>
        
        {
          currentCountry?.map(el => {
            return (
                  <Card                    
                    id={el.id}
                    cca3={el.cca3}
                    imagen={el.imagen}
                    name={el.name}
                    continent={el.continent}
                    subregion={el.subregion}
                  />
            );
          })
          
          
          };
                    </StyledCards>

      </div>
      <OnSearchNames setCurrentPage={setCurrentPage} />
    </StyledHome>
    
</>
  )
}




//   const getCountries = useSelector((state) => state.allCountry)
//   const [currentPage, setCurrentPage] = useState(1)//estados local para paginado
//   const [countryPage, setCountryPage] = useState(9)
//   const indexOfLastCountry = currentPage===1? 9: currentPage * countryPage-1; //constante la el numero de paises de la ultimma pagina
//   const indexFirsCountry = indexOfLastCountry===1? 0: indexOfLastCountry - countryPage; // constante del indice del primer pais
//   const currentCountry = getCountries.slice(indexFirsCountry, indexOfLastCountry) //constante para pais actual la cual llama a todos los paises y divide solo el indice del primer personaje y el indice el ultimo personaje
//   //const currentCountry = get_countries.slice(indexFirsCountry, indexLastCountry);    //Divido el array entre 0 y 10
//   const [filter, setFilter] = useState('');

//   const paginado = (pageNumber) => {
//     //setCurrentPage(pageNumber)
//     if(pageNumber ===1){
//       setCountryPage(9)
//     }else{
//       setCountryPage(10)
//     }
//     return setCurrentPage(pageNumber)
//   };

//   useEffect(() => {
//     dispatch(get_countries())
//     dispatch(filterContinent())
//   }, [dispatch]);
//   function handleClick(e) {
//     e.preventDefault();
//     dispatch(get_countries());
//   }
//   function handleSortPopulation(e) {
//     e.preventDefault();
//     dispatch(filterPopulation(e.target.value))
//     setCurrentPage(1);
//     setFilter(`Ordenado ${e.target.value}`)
//   };

//   return (
//     <>
//     <NavBar></NavBar>
    
    

//     <StyledHome>

//   <StyledFilter >
//   <h3>FILTERS</h3>
//     <div className="filters">
//   <select onChange={e => handleSortPopulation(e)}>
//           <option value='Mayor population'>Mayor poblacion</option>
//           <option value='Menor population'>Menor poblacion</option>
//         </select>
//         <Continent setCurrentPage={setCurrentPage}></Continent>
//         <FilterByActivity
//           setFilter={setFilter}
//           setCurrentPage={setCurrentPage}></FilterByActivity>
//         <FilterByAscDesc
//           setFilter={setFilter}
//           setCurrentPage={setCurrentPage}></FilterByAscDesc>
         
//          </div>
//          <Link to='/activity' className="link"> Crear Activity </Link>
//          <hr />
//          <button onClick={e => { handleClick(e) }}>Reset</button>

//   </StyledFilter>
//   {/* <OnSearchName setCurrentPage={setCurrentPage} /> */}
  
//     <div className= "box" >
//         <Paginado
//           countryPage={countryPage}
//           getCountries={getCountries.length}
//           paginado={paginado}
//         />   
//         <StyledCards>
        
//         {
//           currentCountry?.map(el => {
//             return (
//                   <Card                    
//                     id={el.id}
//                     cca3={el.cca3}
//                     imagen={el.imagen}
//                     name={el.name}
//                     continent={el.continent}
//                     subregion={el.subregion}
//                   />
//             );
//           })
          
          
//           };
//                     </StyledCards>

//       </div>
//       <OnSearchNames setCurrentPage={setCurrentPage} />
//     </StyledHome>
    
// </>
//   )
// }
