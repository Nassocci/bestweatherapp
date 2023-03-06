# BestWeatherApp Project Documentation

## Overview

This project is a small, responsive weather web app based on the free API from OpenWeatherMap. The app is optimized for mobile devices and consists of a weather-widget displaying the current weather information. The widget is swipeable to display the forecasts for the next twenty-four hours.

### Requirements
#### Must-have

* Use a react based technology
* Implement a SSR based solution
* Provide the solution in a git repo (gitlab, github, bitbucket)
* Display everything in metric units
* Display the location
* Display the min temperature
* Display the max temperature
* Display the “feels like“ temperature
* Display the date and time when the weather infos were tracked
* Display the belonging weather icon
* The widget should be swipeable to get to the forecasts (either per day or per hour)
#### Nice-to-have

* Display the amount of rain in the last few hours
* Display the windspeed in km/h
* Display the wind gust
* Display the humidity in %

The application meets all of the aforementioned requirements, including a small button that allows users to toggle between dark mode and light mode.


### Technologies

* [Next.js](https://beta.nextjs.org/docs)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [Tailwind](https://tailwindcss.com/docs/installation)
* [ESLint](https://eslint.org/docs/latest/) with [Airbnb configuration](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
* [Jest](https://jestjs.io/docs/getting-started)

## Getting Started

### Installation
To install the project dependencies, run:
```bash
npm install
```
### Development Server
To start the development server, run:
```bash
npm run dev
```
### Production Build
To build the production version of the project, run:
```bash
npm run build
```
### Production Server
To start the production server, run:
```bash
npm start
```
### Testing
To run tests, run:
```bash
npm test
```

## Folder Structure
The project has been structured with the following folder organization:
```bash
├── __tests__
│   ├── components
│       └── cards
│           └── weatherCards
│               ├── ForecastWeatherCard.test.tsx
│               └── TodayWeatherCard.test.tsx
│   ├── pages
│       └── index.test.tsx
├── components/
│   └── cards
│       └── weatherCards
│           ├── ForecastWeatherCard.tsx
│           └── TodayWeatherCard.tsx
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── _document.tsx
├── public/
│   └── Images/
│       ├── 404.png
│       ├── dark-mode.png
│       ├── light-mode.png
│       └── favicon.ico
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── utils/
│   ├── getWeatherDataForForecast.tsx
│   ├── getWeatherDataForToday.tsx
│   └── getWindDirection.tsx
├── .env
├── .gitignore
├── .eslintrc.json
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── typings.d.ts
```

## Pages
### Homepage
#### Location
```bash
/pages/index.tsx
```
This file contains the main page of the BestWeatherApp, which is responsible for rendering the weather data cards and handling user interactions such as swiping and toggling the dark mode.

#### Components
* TodayWeatherCard: responsible for displaying the current weather data.
* ForeCastWeatherCard: responsible for displaying the weather data forecast.

#### Libraries
* [use-gesture](https://use-gesture.netlify.app/docs/)
* [Next Image](https://nextjs.org/docs/api-reference/next/image)

#### Functions
* getWeatherDataForToday: a function that fetches the current weather data from the OpenWeatherMap API
* getWeatherDataForForecast: a function that fetches the weather forecast data from the OpenWeatherMap API

#### State and Effects
* isSwipingRight: a boolean that tracks whether the user is swiping right or left or pressing right or left arrow key
* isDarkModeEnabled: a boolean that tracks whether the dark mode is enabled or not

#### Props
* dataToday: an object containing the current weather data
* dataForecast: an object containing the weather forecast data

#### Server-Side Rendering
* A function that fetches the user's location and passes it to the getWeatherDataForToday and getWeatherDataForForecast functions to retrieve the weather data.

#### DOM Elements
The BestWeatherApp component renders the following DOM elements:

* A header containing the title and a toggle button that switches between light and dark mode
* A container that wraps the weather card components
    * A weather card component that displays the current weather data
    * A weather card component that display the forecast wether data


## Components
### TodayWeatherCard
#### Location
```bash
/components/cards/weatherCards/TodayWeatherCard.tsx
```
This file contains the TodayWeatherCard component, which is responsible for displaying weather information for a specified location. 

#### Components
The TodayWeatherCard component is a reusable React component that can be used to display weather information for a given location.

#### Libraries
* [Next Image](https://nextjs.org/docs/api-reference/next/image)

#### Functions
* getWindDirection: a function that converts the wind degree value to a cardinal direction

#### Props
* cod: A string representing the HTTP response status code
* name: A string representing the name of the location
* main: An object containing the temperature, humidity, and other weather information
* wind: An object containing the wind speed, wind direction, and wind gust
* dt: A Unix timestamp representing the time of the weather report
* weather: An array containing the weather conditions of the location
* rain: An object containing the precipitation amount

#### DOM Elements
The TodayWeatherCard component renders the following DOM elements:

* One card containing:
    * A h1 element with the text "WEATHER FORECAST SWIPE LEFT OR PRESS ⬅ ON YOUR KEYBOARD"
    * A div element with the converted timestamp of the weather report
    * A div element with the Wind speed in km/h and cardinal direction
    * A div element with the Wind gust in km/h
    * A div element with the City name
    * A div element with the Precipitation amount
    * A div element with the Humidity percentage
    * A div element with the Maximum temperature
    * A div element with the Minimum temperature
    * A div element with the Weather description
    * A div element with the Feels like temperature
    * An Image element  with the Weather icon
* In case of an error:
    * A div element with the text "Something went wrong, please try again later"

### ForeCastWeatherCard
#### Location
```bash
/components/cards/weatherCards/ForeCastWeatherCard.tsx
```
This file contains the ForeCastWeatherCard component which displays a 24-hour weather forecast for a given location.

#### Components
The ForeCastWeatherCard component is a reusable React component that can be used to display weather information for a given location.

#### Libraries
* [Next Image](https://nextjs.org/docs/api-reference/next/image)

#### Props
* cod: A string representing the HTTP response status code.
* list: An array containing the weather conditions of the location for the next 24 hours

#### DOM Elements
The ForeCastWeatherCard component renders the following DOM elements:

* One card containing:
    * Seven forecast cards, each containing:
        * A h1 element with the text "WEATHER TODAY SWIPE RIGHT OR PRESS ➡ ON YOUR KEYBOARD"
        * A div element with the converted timestamp of the weather report
        * A div element displaying the temperature in Celsius
        * An Image element displaying the weather icon
* In case of an error:
    * A div element with the text "Something went wrong, please try again later"

## Utils
### getWeatherDataForToday
#### Location
```bash
/utils/getWeatherDataForToday.tsx
```
This module exports a single function getWeatherDataForToday which is responsible for fetching the weather data for a given location using the OpenWeatherMap API.
#### Props
* lat: A string of the location for which weather data is being fetched
* lon: A string of the location for which weather data is being fetched
* apiKey: A string of the API key used to authenticate the request to the OpenWeatherMap API
### getWeatherDataForForecast
#### Location
```bash
/utils/getWeatherDataForForecast.tsx
```
This module exports a single function getWeatherDataForForecast which is responsible for fetching the weather data for a given location using the OpenWeatherMap API.
#### Props
* lat: A string of the location for which weather data is being fetched
* lon: A string of the location for which weather data is being fetched
* apiKey: A string of the API key used to authenticate the request to the OpenWeatherMap API
### getWindDirection
#### Location
```bash
/utils/getWindDirection.tsx
```
This module contains a single function that is exported called getWindDirection. The function's purpose is to convert wind direction from a number in degrees to its corresponding cardinal direction, and then return the result as a string.

## Tests
The test are done with jest and react testing library.
### Homepage
#### Location
```bash
/__tests__/pages/index.test.tsx
```
#### Testcases
* A test case that checks if clicking the dark mode button toggles the background color and text color of the main element.
* A test case that simulates pressing the left arrow key on the weather card and checks if the text content of the card changes to "WEATHER TODAY".
* A test case that simulates pressing the right arrow key on the weather card and checks if the text content of the card changes to "WEATHER FORECAST".

### TodayWeatherCard
#### Location
```bash
/__tests__/components/TodayWeatherCard.test.tsx
```
#### Testcases
* A test case that checks if the weather card is rendered correctly by verifying the text content of the card to be "WEATHER FORECAST"
* A test case that checks if the timestamp is converted correctly to a readable date format
* A test case that checks if the wind degree is converted correctly a to cardinal direction
* A test case that checks if the windspeed is converted correctly from m/s to km/h
* A test case that checks if the windgust is converted correctly from m/s to km/h
* A test case that checks if the correct city name is displayed
* A test case that checks if the correct weather icon is displayed
* A test case that checks if the correct precipitation amount is displayed
* A test case that checks if the correct humidity amount is displayed
* A test case that checks if the correct maximum temperature is displayed
* A test case that checks if the correct minimum temperature is displayed
* A test case that checks if the correct weather description is displayed
* A test case that checks if the correct feels like temperature is displayed

### ForeCastWeatherCard
#### Location
```bash
/__tests__/components/ForeCastWeatherCard.test.tsx
```

#### Testcases
* A test case that checks if the weather card is rendered correctly by verifying the text content of the card to be "WEATHER TODAY"
* A test case that checks if the first card renders correctly with the given data.
* A test case that checks if the second card renders correctly with the given data.
* A test case that checks if the third card renders correctly with the given data.
* A test case that checks if the fourth card renders correctly with the given data.
* A test case that checks if the fifth card renders correctly with the given data.
* A test case that checks if the sixth card renders correctly with the given data.
* A test case that checks if the seventh card renders correctly with the given data.