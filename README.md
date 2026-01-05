# Weather App 

A simple and beautiful weather application that shows you the current weather and related news for any city around the world.

## What It Does

- Enter any city name to get real-time weather information
- See temperature, weather conditions, and location details
- Get the latest news articles related to that city
- Beautiful, modern interface with smooth animations

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone or download this project
2. Open a terminal in the project folder
3. Install the dependencies:
   npm install
   

### Running the App

Start the server:
npm start


Then open your browser and visit:
http://localhost:3000

The server will automatically restart when you make changes to the code (thanks to nodemon).

## How to Use

1. Type a city name in the search box ("London", "New York", "Tokyo")
2. Click the "Search" button
3. View the weather information and related news articles below

## Project Structure
weather api
```
├── src/
│   └── app.js          # Main server file
├── public/
│   ├── css/
│   │   └── styles.css  # Styling
│   └── js/
│       └── app.js      # Frontend JavaScript
├── templates/
│   └── views/
│       └── index.hbs   # Main HTML template
└── utils/
    ├── weatherData.js  # Weather API integration
    └── news.js         # News API integration

```
## Technologies Used

Node.js - Backend runtime
Express - Web framework
Handlebars (hbs) - Template engine
OpenWeatherMap API - Weather data
NewsAPI - News articles





