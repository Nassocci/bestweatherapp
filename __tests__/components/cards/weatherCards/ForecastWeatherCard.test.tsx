import React from 'react';
import { render } from '@testing-library/react';
import { DataForecast } from '@/typings';
import ForeCastWeatherCard from '../../../../components/cards/weatherCards/ForeCastWeatherCard';

describe('ForeCastWeatherCard BWA', () => {
  const mockDataForecast:DataForecast = {
    city: {
      coord: {
        lat: 48.2082,
        lon: 16.3738,
      },
      country: 'AT',
      id: 2761333,
      name: 'Vienna',
      population: 0,
      sunrise: 1677907864,
      sunset: 1677948115,
      timezone: 3600,
    },
    cnt: 40,
    cod: '200',
    list: [
      // 0
      {
        clouds: {
          all: 11,
        },
        dt: 1677920400,
        dt_txt: '2023-03-04 09:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 1
      {
        clouds: {
          all: 11,
        },
        dt: 1677931200,
        dt_txt: '2023-03-04 12:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 2
      {
        clouds: {
          all: 11,
        },
        dt: 1677942000,
        dt_txt: '2023-03-04 16:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 3
      {
        clouds: {
          all: 11,
        },
        dt: 1677952800,
        dt_txt: '2023-03-04 19:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 4
      {
        clouds: {
          all: 11,
        },
        dt: 1677963600,
        dt_txt: '2023-03-04 22:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 5
      {
        clouds: {
          all: 11,
        },
        dt: 1677974400,
        dt_txt: '2023-03-05 01:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
      // 6
      {
        clouds: {
          all: 11,
        },
        dt: 1677985200,
        dt_txt: '2023-03-05 04:00:00',
        main: {
          feels_like: 3.9,
          grnd_level: 995,
          humidity: 74,
          pressure: 1018,
          sea_level: 1018,
          temp: 7.14,
          temp_kf: -0.51,
          temp_max: 7.65,
          temp_min: 7.14,
        },
        pop: 0,
        sys: {
          pop: 'd',
        },
        visibility: 10000,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            icon: '02d',
            description: 'few clouds',
          },
        ],
        wind: {
          speed: 5.27,
          deg: 294,
          gust: 10.77,
        },
        rain: {
          '3h': '0.0',
        },
      },
    ],
    message: 0,
  };
  test('renders forecast weather card correctly', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const h1test = getByTestId('h1-WF');
    expect(h1test).toHaveTextContent('WEATHER TODAY');
  });
  test('render  first card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const firstDate = getByTestId('unix-timestamp-0');
    expect(firstDate).toHaveTextContent('Sat 10:00');
    const firstWeatherIcon = getByTestId('weather-icon-0');
    expect(firstWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const firstForeCastTemp = getByTestId('forecast-temp-0');
    expect(firstForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  second card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const secondDate = getByTestId('unix-timestamp-1');
    expect(secondDate).toHaveTextContent('Sat 13:00');
    const secondWeatherIcon = getByTestId('weather-icon-1');
    expect(secondWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const secondForeCastTemp = getByTestId('forecast-temp-1');
    expect(secondForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  third card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const thirdDate = getByTestId('unix-timestamp-2');
    expect(thirdDate).toHaveTextContent('Sat 16:00');
    const thirdWeatherIcon = getByTestId('weather-icon-2');
    expect(thirdWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const thirdForeCastTemp = getByTestId('forecast-temp-2');
    expect(thirdForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  fourth card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const fourthDate = getByTestId('unix-timestamp-3');
    expect(fourthDate).toHaveTextContent('Sat 19:00');
    const fourthWeatherIcon = getByTestId('weather-icon-3');
    expect(fourthWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const fourthForeCastTemp = getByTestId('forecast-temp-3');
    expect(fourthForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  fifth card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const fifthDate = getByTestId('unix-timestamp-4');
    expect(fifthDate).toHaveTextContent('Sat 22:00');
    const fifthWeatherIcon = getByTestId('weather-icon-4');
    expect(fifthWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const fifthForeCastTemp = getByTestId('forecast-temp-4');
    expect(fifthForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  sixth card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const sixthDate = getByTestId('unix-timestamp-5');
    expect(sixthDate).toHaveTextContent('Sun 01:00');
    const sixthWeatherIcon = getByTestId('weather-icon-5');
    expect(sixthWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const sixthForeCastTemp = getByTestId('forecast-temp-5');
    expect(sixthForeCastTemp).toHaveTextContent('7.1°');
  });
  test('render  seventh card', () => {
    const { getByTestId } = render(<ForeCastWeatherCard {...mockDataForecast} />);
    const seventhDate = getByTestId('unix-timestamp-6');
    expect(seventhDate).toHaveTextContent('Sun 04:00');
    const seventhWeatherIcon = getByTestId('weather-icon-6');
    expect(seventhWeatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=128&q=75');
    const seventhForeCastTemp = getByTestId('forecast-temp-6');
    expect(seventhForeCastTemp).toHaveTextContent('7.1°');
  });
});
