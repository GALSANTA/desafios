import React  from 'react';
import { api } from '../../services/api';
import './style.css';

function City(props) {

    const [data, setDia] = React.useState();

    React.useEffect(() => {
        navigator.geolocation.watchPosition(dayChange, (e) => { console.log(e); });
    },[]);

    async function dayChange({ coords }) {

        const { hour, sunrise, sunset } = await api(coords);
        
        if (hour >= parseInt(sunrise[0]) && hour < parseInt(sunset[0]) + 12) {
            document.title = "DIA - segundo a api";
            setDia('dia');
        } else {
            document.title = "NOITE - segundo a api";
            setDia('noite');
        }
    }

    return (
        <div className={`cidade ${data}`}>
            <div className="container row">
                { props.children }
            </div>
        </div>
    );
}

export default City;