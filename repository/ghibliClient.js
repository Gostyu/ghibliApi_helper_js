const fetch=require("node-fetch");

const GhibliClientConfig = ({
    url: "https://ghibliapi.herokuapp.com",
    method:"GET",
    headers:{
        "Content-type":"application/json",
    }
});
const urls = {
    allFilms : `${GhibliClientConfig.url}/films`,
};
const ghibliClient = {
    getAllFilms :
     async function(){
        const fetchAllFilms = await fetch(urls.allFilms,
        {
            method:GhibliClientConfig.method,
            headers : GhibliClientConfig.headers,
        });
       // console.log(resgitponse);
        return await fetchAllFilms.json();
    },
    getFilm : async function(id){
        const fetchAllFilms = await fetch(`${GhibliClientConfig.url}/films`,
        {
            method:GhibliClientConfig.method,
            headers : GhibliClientConfig.headers,
        });
    }
}
module.exports = ghibliClient;