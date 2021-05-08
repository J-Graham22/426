import axios from 'axios';
import React from 'react';

const WeatherComponent = () => {
    let content = getWeather();

    return (
        <div>harmless fun</div>
    )
}

async function getWeather() {
    const ip = await axios({
        method: 'get',
        url: 'http://bot.whatismyipaddress.com/'
    });

    let ipLocation: string = "http://ip-api.com/json/" + ip;

    const locationResult = await axios({
        method: 'get',
        url: ipLocation
    });

    console.log(locationResult);

    return locationResult;
}

export default WeatherComponent