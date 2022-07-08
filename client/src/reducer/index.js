const initialState = {
    allCountry:[],
    setCountry:[],
    stateActivity:[],
    stateDetailCountry:{}
};

function reducer (state=initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                allCountry: action.payload,
                setCountry:action.payload
            }  
            case 'DETAIL_COUNTRY':
                return {
                    ...state,
                    stateDetailCountry:action.payload
                }
            case 'SET_DETAIL_COUNTRY':
                return {
                    ...state,
                    stateDetailCountry:{}
                }  
            case 'SEARCHBYNAME':
                return{
                     ...state,
                     allCountry: action.payload                                               
                 } 
       
            case 'DELETE':
                return{
                    ...state,
                    stateActivity: action.payload                                               
                } 
            case 'POST_ACTIVITY':
                return {
                ...state,
            }    

           case 'FILTER_CONTINENT':
            const totContinent = state.setCountry
            const filterContinent = action.payload ==='all' ? totContinent : totContinent.filter(e=>e.continent === action.payload)
            
            return {
                    ...state,
                    allCountry: filterContinent
                }
            
            case 'ORDER_BY_NAME':
            const filterOrder = action.payload === "ascendente"? state.allCountry.sort((a,b)=> a.name.localeCompare(b.name)) : state.allCountry.sort((a,b)=>b.name.localeCompare(a.name));
            return {
                ...state,
                allCountry:filterOrder
            }
            case 'FILTER_POPULATION':
            let filterPopulation = action.payload === 'Menor population' ?
            state.allCountry.sort(function (a, b) {
                if (a.population > b.population) {
                    return 1;
                }
                if (b.population > a.population) {
                    return -1;
                }
                return 0;
            }) :
            state.allCountry.sort(function (a, b) {
                if (a.population > b.population) {
                    return -1;
                }
                if (b.population > a.population) {
                    return 1;
                }
                return 0;
            })
        return {
            ...state,
            allCountry: filterPopulation
        }
                       
            case 'GET_ACTIVITIES':
                return {
                ...state,
                stateActivity:action.payload 
                }
             case 'FILTER_ACTIVITY':
            const allCountrys =state.setCountry   
            const typeActivity = action.payload ==='all' ? allCountrys.filter(e=>e.stateActivity.length > 0)
            : allCountrys.filter(e=> e.activities && e.activities.map(el => el.name).includes(action.payload))
                console.log(typeActivity)
                
            return {
                ...state,
                allCountry:typeActivity 
                }
                
                default:
                    return{
                        ...state
                }
            
    }
}

export default reducer;