import axios from "axios";
import  Axios  from "axios";

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
}

getWeather();

