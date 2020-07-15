const fetch = require("node-fetch");
const urls = require("./urls");
const GhibliClientConfig = require("./ghibliClientConfig")
const myFetch = (url)=>{
 return fetch(url,{
    method: GhibliClientConfig.method,
    headers: GhibliClientConfig.headers,
  });
};

const ghibliClient = {
  getFilms: async function () {
    try {
      return await (await myFetch(urls.films)).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getFilm: async function (id) {
    try {
      return await (await myFetch(urls.oneFilm(id))).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
    return await fetchOneFilm.json();
  },
  getLocations: async () => {
    try {
      return await (await myFetch(urls.locations)).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getOneLocation: async (id) => {
    try {
      return await (await myFetch(urls.oneLocation(id))).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getPeople: async () => {
    try {
      return await (await myFetch(urls.people)).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getOnePerson: async (id) => {
    try{
      return await (await myFetch(urls.onePerson(id))).json();
    }catch(err){
      console.error(`Error => ${err}`);
    }
  },
  getSpecies: async () => {
    try {
      return await (await myFetch(urls.species)).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getOneSpecies: async (id) => {
    try {
      return await (await myFetch(urls.oneSpecies(id))).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getVehicules: async () => {
    try {
      return await (await myFetch(urls.vehicules)).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getOneVehicule: async (id) => {
    try {
      return await (await myFetch(urls.oneVehicule(id))).json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
};
module.exports = ghibliClient;
