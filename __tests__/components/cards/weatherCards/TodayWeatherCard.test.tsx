import React from 'react';
import { render } from '@testing-library/react';
import { DataToday } from '@/typings';
import TodayWeatherCard from '../../../../components/cards/weatherCards/TodayWeatherCard';

describe('TodayWeatherCard BWA', () => {
  const mockDataToday:DataToday = {
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
  };
  test('renders today weather card correctly', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const h1test = getByTestId('h1-WT');
    expect(h1test).toHaveTextContent('WEATHER FORECAST');
  });
  test('converts timestamp correctly', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const convertedTimestamp = getByTestId('converted-timestamp');
    expect(convertedTimestamp).toHaveTextContent('Saturday, Mar 04, 2023');
  });
  test('converts ° to cardinal direction correctly', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const windspeed = getByTestId('windspeed');
    expect(windspeed).toHaveTextContent(/Wind:\s\d+\.\d+\s+km\/h\s+N/);
  });
  test('converts windspeed m/s to km/h correctly', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const windspeed = getByTestId('windspeed');
    expect(windspeed).toHaveTextContent(/Wind:\s+8.1\s+km\/h\s+[A-Z+]/);
  });
  test('converts windgust m/s to km/h correctly', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const gust = getByTestId('windgust');
    expect(gust).toHaveTextContent('Gust: 8.1 km/h');
  });
  test('correct city name', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const cityName = getByTestId('city-name');
    expect(cityName).toHaveTextContent('Vienna');
  });
  test('correct image src', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const weatherIcon = getByTestId('weather-icon');
    expect(weatherIcon).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fopenweathermap.org%2Fimg%2Fwn%2F02d%402x.png&w=256&q=75');
  });
  test('correct precipitation', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const precipitation = getByTestId('precipitation');
    expect(precipitation).toHaveTextContent('Precipitation: 0 mm/h');
  });
  test('correct humidity', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const humidity = getByTestId('humidity');
    expect(humidity).toHaveTextContent('Humidity: 82 %');
  });
  test('correct maxTemp', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const maxTemp = getByTestId('max-temp');
    expect(maxTemp).toHaveTextContent('5.8 °C');
  });
  test('correct minTemp', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const minTemp = getByTestId('min-temp');
    expect(minTemp).toHaveTextContent('-0.7 °C');
  });
  test('correct weather description', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const description = getByTestId('description');
    expect(description).toHaveTextContent('Clouds');
  });
  test('correct feels like', () => {
    const { getByTestId } = render(<TodayWeatherCard {...mockDataToday} />);
    const feelsLike = getByTestId('feels-like');
    expect(feelsLike).toHaveTextContent('Feels Like: 0.9 °C');
  });
});
