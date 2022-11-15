const cityName = 'Fairbanks';
const unit = 'imperial';
const apiKey = '9793da0695f52ad5fa242291a35211d8';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;

// select HTML elements in the document
const section = document.querySelector('section');

const displayResults = (weatherData) => {
    const currentTemp = document.querySelector('#current-temp');
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    weatherData.weather.forEach(weather => {
        const iconsrc = `https://openweathermap.org/img/w/${weather?.icon}.png`;
        const desc = weather.description;
        
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        
        
        if (weatherData.weather.length === 1) {
            figure.setAttribute('class', 'only-weather-event');
        }

        img.setAttribute('src', iconsrc);
        img.setAttribute('alt', capitalize(desc));
        figcaption.textContent = capitalize(desc);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        section.appendChild(figure);
    });
};

const createBasicStructure = () => {
    const title = document.createElement('h1');
    const weatherDescription = document.createElement('p');
    const weatherEventTitle = document.createElement('h2');

    title.textContent = 'OpenWeatherMap.org API Test';
    weatherDescription.innerHTML = 'The current temperature in Fairbanks, Alaska is <span id="current-temp"></span> &deg;F';
    weatherEventTitle.textContent = 'Current Condition Icon(s)';

    section.appendChild(title);
    section.appendChild(weatherDescription);
    section.appendChild(weatherEventTitle);
};

const capitalize = (word) => {
    return word.split(' ')
               .map(
                    (word, i) => word.charAt(0).toUpperCase() + word.slice(1)
                )
               .join(' ');
};


const apiFetch = async () => {
    try {
        createBasicStructure();
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



apiFetch();