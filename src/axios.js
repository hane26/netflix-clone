import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", // every single time we call axios, we need to add this baseURL, 
});



// when we call an instace, it will be added to the baseURL 
// when we import it, we can call it whatver we want since it is exported as default
export default instance;