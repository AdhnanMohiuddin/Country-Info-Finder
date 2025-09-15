async function getCountryInfo() {
    const countryInput = document.getElementById('countryInput').value;

    try {
        const response = await axios.get(`http://localhost:8889/country/${countryInput}`);
        const apiDetails = response.data[0];

        // Displaying API details in the HTML
        displayApiDetails(apiDetails);

        const a = apiDetails.capital[0];
        console.log(a);

    } catch (error) {
        console.error('Error fetching country information:', error);
    }
}

function displayApiDetails(apiDetails) {
    const countryName = document.getElementById('countryName');
    const currencyName = document.getElementById('currencyName');
    const capitalName = document.getElementById('capitalName');
    const flagImg = document.getElementById('FlagImage');
    const population = document.getElementById('population')


    countryName.textContent = `Country Name: ${apiDetails.name.common}`;

    const currencyCode = Object.keys(apiDetails.currencies)[0]; 
    const currname = apiDetails.currencies[currencyCode].name;
    currencyName.textContent = `Currency Name: ${currname}`;
    capitalName.textContent = `Capital Name: ${apiDetails.capital[0]}`;
    population.textContent = `population: ${apiDetails.population}`;


    const img_src = apiDetails.flags.png;
    flagImg.src=img_src;
}
