
const request = require('request');

const newsmap = {
    BASE_URL: "https://newsapi.org/v2/everything",
    SECRET_Key: "4bd6d527983b4839949895d666557738",
}

const newsData = (city, callback) => {
    const url =
        newsmap.BASE_URL +
        "?q=" + encodeURIComponent(city) +
        "&language=en" +
        "&sortBy=publishedAt" +
        "&apiKey=" + newsmap.SECRET_Key;
    console.log(url);

    request({url,
        json: true,
        headers: {
            "User-Agent": "Ramazan-NewsApp"
        }
    }, (error, data) => {
        if (error){
            callback(true, "Unable to fetch data.")
            return;
        } else{
            const articles = data.body.articles.map(article => ({
                title: article.title,
                url: article.url,
                description: article.description,
                source: article.source.name,
                publishedAt: article.publishedAt
            }));

            callback(false, { articles });
            console.log(articles);
        }
    })};

module.exports = newsData;