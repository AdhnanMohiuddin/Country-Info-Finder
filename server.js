const express = require('express');
const axios = require('axios');
const cors = require('cors');  //Cross-origin resource sharing
const app = express();

app.use(express.json()); // raw json parsing
app.use(cors()); // Enable CORS for all routes

const API_URL = 'https://restcountries.com/v3.1/name/';

app.get('/country/:CountryName', async (req, res) => {
    const countryName = req.params.CountryName;

    try {
        const apiCall = await axios.get(`${API_URL}${countryName}?fullText=true`);
        res.json(apiCall.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 8889;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:8889/country`);
    console.log(`Website is running on : http://127.0.0.1:5501/index.html`);
});
