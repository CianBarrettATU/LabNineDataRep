import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./movies";

function Read() {
    const [data, setData] = useState([]);

    //reloads movies by get request
    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data.movies);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    //calls reload on movies when changes are made
    useEffect(() => {
        Reload();
    }, []);

    //returns the new list of movies
    return (
        <div>
            <h2>Movie List</h2>
            <Movies myMovies={data} ReloadData={Reload} />
        </div>
    );
}

export default Read;