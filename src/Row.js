import React, {useEffect, useState } from 'react'
import axios from './axios'; // when we import it, we can call it whatver we want since it is exported as default

function Row({title, fetchUrl}) {
    // state is a property of a component that is used to store data
    const [movies, setMovies] = React.useState([]);
    // useEffect is a hook that is used to perform side effects in a component
    //hook is a function that is called after a component is rendered

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // this will be runinng as we want information for the row that we are seeing 
        // so we are going to fetch the data from the api
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            // everytime we use any variable that is pulled from the outside inside a useEffect we have to include it in the dependency array [fetchUrl] so that it will be re-runned when the variable changes
            return request;
        }

        console.table(movies); 
     
        fetchData(); 

        // if we leave the [] empty, it will run once, so if we add a variable, it will run every time that variable changes
    }, [fetchUrl]);
  return (
    <div className='row'>
        {/* title */}
        <h2>{title}</h2>



        <div className="row_posters">
        {/* several row posters  */}
        {movies.map(movie => (  // map is a method that is used to loop through an array
            //returnning an image
        <img className= "row_poster"
            
        key={movie.poster_path} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.name} />
        ))}
        
        </div>  
        {/* container -> poster */}

    </div>
  )
}

export default Row;