import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { APIWeatherProps } from '../../typings';
import BestWeatherApp from '../../pages';

describe('main page BWA', () => {
  const mockData: APIWeatherProps = {
    dataToday: {
      cod: '200',
      name: 'Vienna',
      main: {
        temp: 3.14,
        temp_min: -0.74,
        temp_max: 5.75,
        humidity: 82,
        feels_like: 0.95,
      },
      wind: {
        speed: 2.24,
        deg: 360,
        gust: 2.24,
      },
      dt: 1677908373,
      weather: [
        {
          icon: '02d',
          description: 'Clouds',
        },
      ],
      rain: {
        '1h': 0,
      },
    },
    dataForecast: {
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
      ],
      message: 0,
    },
  };

  test('toggles dark mode when clicked', () => {
    const { getByTestId } = render(<BestWeatherApp {...mockData} />);
    const button = getByTestId('dark-mode-button');
    const main = getByTestId('main');
    // default
    expect(main.className).toContain('bg-[#15202b] text-white');
    // light mode
    fireEvent.click(button);
    expect(main.className).toContain('bg-white text-black');
    // dark mode
    fireEvent.click(button);
    expect(main.className).toContain('bg-[#15202b] text-white');
  });
  test('press left arrow key - forecast card', () => {
    const { getByTestId } = render(<BestWeatherApp {...mockData} />);
    const weatherCard = getByTestId('weather-card');
    const main = getByTestId('main');
    fireEvent.keyDown(main, { key: 'ArrowLeft', keyCode: 37 });
    fireEvent.keyUp(main, { key: 'ArrowLeft', keyCode: 37 });
    expect(weatherCard).toHaveTextContent('WEATHER TODAY');
  });
  test('press right arrow key - today card', () => {
    const { getByTestId } = render(<BestWeatherApp {...mockData} />);
    const weatherCard = getByTestId('weather-card');
    const main = getByTestId('main');
    fireEvent.keyDown(main, { key: 'ArrowLeft', keyCode: 39 });
    fireEvent.keyUp(main, { key: 'ArrowLeft', keyCode: 39 });
    expect(weatherCard).toHaveTextContent('WEATHER FORECAST');
  });
});
