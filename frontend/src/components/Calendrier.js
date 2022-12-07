import React from 'react';
import './Calendrier.css';



const Calendrier = () => {   // fonction qui vas permettre de récuperer la date et de l'afficher
    
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        let interval = setInterval(() => setDate(new Date()), 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='Calendrier'>
            <h1>Date :<br/>{date.toDateString()}</h1>
        </div>
    );
};

export default Calendrier;
