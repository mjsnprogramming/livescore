import axios from 'axios';
require('dotenv').config();
const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
    params: {Category: 'soccer', Timezone: '-7'},
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
}

axios.request(options).then((response) =>  {
    console.log(response.data);
}).catch((error) => {
    console.error(error);
});
