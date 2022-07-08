import axios from 'axios';

export function get_countries()
{
    return async function(dispatch)
    {
        const json = await axios.get('http://localhost:3001/countries/')             
        return dispatch(
        {
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}
    
export function filterPopulation (payload) {
    return {
        type: 'FILTER_POPULATION',
        payload
    }
};
export function onSearchByName(name)
{
    return async function(dispatch){
    try{
        var json = await axios.get('http://localhost:3001/countries?name=' + name)            
        return dispatch(
        {
            type: 'SEARCHBYNAME',
            payload: json.data
        })
    }
    catch(error){
        if(error.response) alert(error.response.data)
        window.location.href ='http://localhost:3000/home'
    
    }
}};
export function deleteAct(name)
{
    return async function(dispatch){
    try{
        var json = await axios.delete('http://localhost:3001/delete?name=' + name)             
        return dispatch(
        {
            type: 'DELETE',
            payload: json.data
        })
        
    }
    catch(error){
        if(error.response) alert(error.response.data)
        window.location.href ='http://localhost:3000/home'
    
    }
}};
export function filterContinent (payload)
{
    return {
            type:'FILTER_CONTINENT',
            payload
        }
}
export function orderByName(payload)
{
    return (
        {
            type: 'ORDER_BY_NAME',
            payload
        })
}
export function detailCountry(cca3)
{
    return async function (dispatch)
    {
        try {
                const detCountry = await axios.get('http://localhost:3001/countries/' + cca3)
                return dispatch(
                {
                    type: 'DETAIL_COUNTRY',
                    payload: detCountry.data
                })
        
            } 
                catch (error) {console.error(error)
            
            }
    }
}
export function setDetailCountry()
{
    return {
                type: 'SET_DETAIL_COUNTRY'
            }
}
export function createActivity(payload){
    return async function(dispatch){
        const newactivity = axios.post('http://localhost:3001/activity', payload)
       console.log(newactivity)
        return newactivity
    }
};
export function getActivities(){
    return async function(dispatch){
       const getAct = await axios.get('http://localhost:3001/activity',{})
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: getAct.data
        })
    }
};
export function filterAct(payload){
        return{
            type: 'FILTER_ACTIVITY',
            payload
        }
};