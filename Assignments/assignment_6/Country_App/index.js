document.addEventListener('DOMContentLoaded', function() {
    fetchCountries();
});

async function fetchCountries(sort = 'population', order = 'asc') {
    const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=${sort}&order=${order}`);
    const countries = await response.json();
    displayCountries(countries);
}

function displayCountries(countries) {
    const container = document.getElementById('countries-container');
    container.innerHTML = ''; // Clear existing country cards
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <h2>${country.name}</h2>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        `;
        container.appendChild(card);
    });
}

function sortCountries() {
    const sortOrder = document.getElementById('sort-order').value;
    fetchCountries('population', sortOrder);
}

// Add event listener to the sort button
document.getElementById('sort-button').addEventListener('click', sortCountries);