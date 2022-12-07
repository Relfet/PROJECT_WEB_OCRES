import React, { useState } from "react";
import axios from 'axios';
import './Weather.css';

const Weather = () => {                // fonction qui permet d'appeler l'api et de récuperer les valeurs associées
    const [data,setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=87a37eedf23ca375b8a870493ac6ba85`
    
    const searchVille = (event) =>{
        if(event.key ==='Enter'){
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }
    }



    return(     // affichage des données après avoir appuyer sur entrer dans un input qui est la barre de texte 
        <div className="Weather">
            <div className="Search">
            <br/>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchVille}
          placeholder='Enter a city to have the weather'
          type="text"
          className="bar" />
      </div>
          <div className="Infos">
            <h1>{data.name}</h1>
            {data.main ? <h1>{(((data.main.temp)-32)/1.8).toFixed()}°C</h1> : null} 
            {data.weather ? <h1>{data.weather[0].main}</h1> : null}
            <br/>
          </div>
        </div>
    );

}

export default Weather;