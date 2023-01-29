import axios from 'axios'
const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/leagues/v2/get-table',
    params: {Category: 'soccer', Ccd: 'england', Scd: 'premier-league'},
    headers: {
        'X-RapidAPI-Key': 'd312c97a59mshbaa91a52c41a23cp1cc66ejsn51d278a6b9e6',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
}

axios.request(options).then(response => {
	console.log(response.data);
}).catch(error => {
	console.error(error);
});
