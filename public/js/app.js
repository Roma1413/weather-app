const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');
const temperature = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');

const newsContainer = document.querySelector('.news-articles');
const newsTitle = document.querySelector('.news-title');

const currentDate = new Date();
const options = {month: 'long'}
const month = currentDate.toLocaleString("en-US", options);
dateElement.textContent = currentDate.getDate() + ", " + month + " " + currentDate.getFullYear();


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = search.value;
    locationElement.textContent = "Loading...";
    temperature.textContent = "";
    weatherCondition.textContent = "";
    newsContainer.innerHTML = "";
    newsTitle.textContent = "";
    showData(city);
});

function showData(city){
    fetch(`/search?address=${city}`)
    .then(res => res.json())
    .then(data => {
        if(data.error){
            locationElement.textContent = data.error;
            return;
        }

        // Display weather
        const weather = data.weather;
        weatherIcon.className = "wi wi-day-sunny";
        temperature.textContent = Math.round(weather.main.temp - 273.15) + "°C";
        weatherCondition.textContent = weather.weather[0].main;
        locationElement.textContent = weather.name + ", " + weather.sys.country;

        // Display news
        const articles = data.news;
        if(!articles || articles.length === 0){
            newsTitle.textContent = `No news found for ${city}`;
            return;
        }

        newsTitle.textContent = `News about ${city}`;
        newsContainer.innerHTML = "";

        articles.forEach(article => {
            const div = document.createElement('div');
            div.classList.add('article');
            div.innerHTML = `
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                ${article.description ? `<p>${article.description}</p>` : ""}
                <div class="source">${article.source} — ${new Date(article.publishedAt).toLocaleDateString()}</div>
            `;
            newsContainer.appendChild(div);
        });

    })
    .catch(err => {
        locationElement.textContent = "Unable to fetch data";
        console.error(err);
    });
}
