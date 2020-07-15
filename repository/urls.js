const GhibliClientConfig = require("./ghibliClientConfig");
const urls = {
    films: `${GhibliClientConfig.url}/films`,
    oneFilm: (id) => `${GhibliClientConfig.url}/films/${id}`,
    people: `${GhibliClientConfig.url}/people`,
    onePerson: (id) => `${GhibliClientConfig.url}/people/${id}`,
    locations: `${GhibliClientConfig.url}/locations`,
    oneLocation: (id) => `${GhibliClientConfig.url}/locations/${id}`,
    species: `${GhibliClientConfig.url}/species`,
    oneSpecies: (id) => `${GhibliClientConfig.url}/species/${id}`,
    vehicules: `${GhibliClientConfig.url}/vehicules`,
    oneVehicule: (id) => `${GhibliClientConfig.url}/vehicules/${id}`,
  };
  module.exports =urls;