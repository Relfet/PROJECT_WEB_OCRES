import React, { useState } from "react";
import axios from 'axios';
import './Yoda.css';

const Yoda = () => {     // fonction qui permet d'appeler l'api et de récuperer les valeurs associées
    const [data,setData] = useState({})
    const [phrase, setPhrase] = useState('')

    const url = `https://api.funtranslations.com/translate/yoda.json?text=${phrase}`
    
    const traduit = (event) =>{
        if(event.key ==='Enter'){
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }
    }



    return(         // affichage des données après avoir appuyer sur entrer dans un input qui est la barre de texte 
        <div className="Traduit">
            <div className="Search">
            <br/>
        <input
          value={phrase}
          onChange={event => setPhrase(event.target.value)}
          onKeyPress={traduit}
          placeholder='Speak to be like Yoda'
          type="text"
          className="bar" />
      </div>
          <div className="Traduction">
            {data.contents ? <h2>{(data.contents.translated)}</h2> : null} 
            <br/>
          </div>
        </div>
    );

}

export default Yoda;