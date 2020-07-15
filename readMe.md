# Ghibli js helper 

It's an helper in javascript(node) for the ghibli api (https://ghibliapi.herokuapp.com/) .

After cloning the project, you must execute this command:
```
npm install
```
Then, you can do that :
```
const ghibliClient=require("./repository/GhibliClient");

```

## Use cases :
 - if you want to get all the (films|locations|people|species|vehicules) :
    ```
    ghibliClient.getFilms().then(films=>films);
    ```
- if you want to get a film|vehicule :
    ```
    ghibliClient.getFilm(filmID).then(film=>film);
    ```
- if you want to get a person :
    ```
    ghibliClient.getPerson(personID).then(person=>person);
    ```
- if you want to get a location :
    ```
    ghibliClient.getLocation(locationID).then(person=>person);
    ```
- if you want to get a species :
    ```
    ghibliClient.getOneSpecies(filmID).then(films=>films);
    ```


