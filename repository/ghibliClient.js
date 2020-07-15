const fetch = require("node-fetch");

const GhibliClientConfig = {
  url: "https://ghibliapi.herokuapp.com",
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
};
const urls = {
  films: `${GhibliClientConfig.url}/films`,
  oneFilm: (id) => `${GhibliClientConfig.url}/films/${id}`,
  allPeople: `${GhibliClientConfig.url}/people`,
  onePerson: (id) => `${GhibliClientConfig.url}/people/${id}`,
  locations: `${GhibliClientConfig.url}/locations`,
  oneLocation: (id) => `${GhibliClientConfig.url}/locations/${id}`,
  species: `${GhibliClientConfig.url}/species`,
  oneSpecies: (id) => `${GhibliClientConfig.url}/species/${id}`,
  vehicules: `${GhibliClientConfig.url}/vehicules`,
  oneVehicule: (id) => `${GhibliClientConfig.url}/vehicules/${id}`,
};
const ghibliClient = {
  getFilms: async function () {
    try {
      const fetchAllFilms = await fetch(urls.films, {
        method: GhibliClientConfig.method,
        headers: GhibliClientConfig.headers,
      });
      // console.log(resgitponse);
      return await fetchAllFilms.json();
    } catch (err) {
      console.error(`Error => ${err}`);
    }
  },
  getFilm: async function (id) {
    try {
      const fetchOneFilm = await fetch(urls.oneFilm(id), {
        method: GhibliClientConfig.method,
        headers: GhibliClientConfig.headers,
      });
    } catch (err) {
      console.error(`Error => ${err}`);
    }
    return await fetchOneFilm.json();
  },
  getLocations: async () => {
    try {
    } catch (err) {}
  },
  getOneLocation: async () => {
    try {
    } catch (err) {}
  },
  getPeople: async () => {
    try {
    } catch (err) {}
  },
  getOnePerson: async (id) => {
    return null;
  },
  getSpecies: async () => {
    try {
    } catch (err) {}
  },
  getOneSpecies: async () => {
    try {
    } catch (err) {}
  },
  getVehicules: async () => {
    try {
    } catch (err) {}
  },
  getOneVehicule: async () => {
    try {
    } catch (err) {}
  },
};
module.exports = ghibliClient;
