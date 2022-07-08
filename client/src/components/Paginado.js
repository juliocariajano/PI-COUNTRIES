// import React from 'react'
// import StyledPaginado from '../Style/StyledPaginado'



// export default function Paginado({ countryPage, getCountries, paginado }) {
//   const pageNumber = []
//   let aux;
//   if(getCountries-9>0){
//     aux =1;
//   }else{
//     aux=0
//   }
//   const pages = aux + Math.ceil((getCountries-9)/(10))
//   for (let i=0; i < pages; i++){
//     pageNumber.push(i+1)
//   }
//   if(!pageNumber[0]){
//     // pageNumber=[1]
//   }

//   // for (let i = 0; i <= (getCountries / countryPage); i++) {
//   //   pageNumber.push(i + 1)
//   // };
//   return (
//     <StyledPaginado>
//     <div >

//         <ul >
//           {pageNumber &&
//             pageNumber.map(number => (
//               <button className='button' key={number} onClick={() => paginado(number)}>{number}</button>
//             ))}
//         </ul>
//     </div>
//     </StyledPaginado>
//   )
// };



import React from 'react'
import StyledPaginado from '../Style/StyledPaginado'



export default function Paginado({ countryPage, getCountries, paginado }) {
  const pageNumber = []
  for (let i = 1; i <= (getCountries / countryPage); i++) {
    pageNumber.push(i + 0)
  };
  return (
    <StyledPaginado>
    <div >

        <ul >
          {pageNumber &&
            pageNumber.map(number => (
              <button className='button' key={number} onClick={() => paginado(number)}>{number}</button>
            ))}
        </ul>
    </div>
    </StyledPaginado>
  )
};
