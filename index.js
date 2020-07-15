const gb =require("./repository/ghibliClient");

(async()=>{
    
const res = await gb.getFilms();
console.log(res);

})()