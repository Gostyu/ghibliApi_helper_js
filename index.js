// const fetch = require("node-fetch");

// const url ="https://ghibliapi.herokuapp.com";

const gb =require("./repository/ghibliClient");

const films = gb.getAllFilms().then(data=>data);

const oneFilm = gb.getAllFilms(id);
