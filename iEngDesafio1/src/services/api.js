import axios from 'axios';

export async function api(coords) {
    
    const { latitude, longitude } = coords;
    let dados = await axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`);
    let sunrise = dados.data.results.sunrise.split(" ")[0];
    let sunset = dados.data.results.sunset.split(" ")[0];
    let hour = new Date().getHours();

    return {sunrise, sunset, hour};
}
