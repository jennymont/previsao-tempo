let chave = "6bba314059b31bdd69d386163f2cbc88"

import axios from 'axios';

const api = axios.create({
    baseURL: `http://api.weatherstack.com/current?access_key=${chave}&query= `
});

export default api;
