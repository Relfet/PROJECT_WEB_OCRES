import React from 'react';
import './Clock.css';



const Clock = () => {      // fonction qui vas permettre de récuperer l'heure et de l'afficher

    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
        let interval = setInterval(() => setTime(new Date()), 100)   // actualise toutes les 0.1s pour être plus precis sur l'heure
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='Clock'>
            <h1>Time :<br/>{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;