const axios = require ('axios');
const { Country, Activity } = require('../db');


async function  getCountriesDb(req, res){
    try {
    {
    const apiInfoCountry = await axios.get("https://restcountries.com/v3/all");
    const apiInfoCountries = apiInfoCountry.data.map((e)=>{
        return {
            name: e.name.common,
            cca3: e.cca3,
            imagen: e.flags? e.flags[0]: 'No tiene Imagen',
            capital: e.capital? e.capital[0]: 'No tiene Capital',
            continent: e.continents[0],
            subregion: e.subregion?e.subregion : 'No tiene SubRegion',
            area: parseInt(e.area)? parseInt(e.area) : 0,
            population: parseInt(e.population)  
           };
  });
//console.log(apiInfoCountries);
apiInfoCountries.forEach(e =>{
     Country.findOrCreate({
        where:{
            name: e.name,
            cca3: e.cca3,
            imagen: e.imagen,
            capital: e.capital,
            continent: e.continent,
            subregion: e.subregion,
            area: e.area,
            population: e.population  
       }
    });
});
}
console.log('Se ha cargado la base de datos de paises');
}catch(error){
 console.log(error);
}
}
const getAllCountry = async () => {
     //await getCountriesDb()
     return await Country.findAll({
        include:{
            model:Activity,
            attributes:['name', 'difficulty','duration','season','createInDb'],
            through:{
            attributes:[]
            }
        }
     });

};


module.exports = {getCountriesDb, getAllCountry}



