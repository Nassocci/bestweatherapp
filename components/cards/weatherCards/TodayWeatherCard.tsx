// import getLocationData from '@/utils/getLocationData';
// import { GetServerSideProps } from 'next';
import { DataToday } from '@/typings';
import getWindDirection from '@/utils/getWindDirection';
import Image from 'next/image';
import React from 'react';

export default function TodayWeatherCard(props : DataToday) {
  const dataToday = props;
  const cityName:string = dataToday.name;
  const minTemperatureInCelsius: string = `${(dataToday.main.temp_min).toFixed(1).toString()} °C`;
  const maxTemperatureInCelsius: string = `${(dataToday.main.temp_max).toFixed(1).toString()} °C`;
  const feelsLike: string = `${(dataToday.main.feels_like).toFixed(1).toString()} °C`;
  const unixTimestamp: number = dataToday.dt;
  const date: Date = new Date(unixTimestamp * 1000);
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-EN', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const convertedTimestamp: string = formatter.format(date);
  const iconUrl:string = `https://openweathermap.org/img/wn/${dataToday.weather?.[0]?.icon}@2x.png`;
  let rain:string = '0.0 mm/h';
  if (dataToday?.rain) {
    rain = `${dataToday.rain['1h']} mm/h`;
  }
  // conversion m/s * 3.6 = km/h
  const windspeed:string | undefined = `${(dataToday.wind.speed * 3.6).toFixed(1)?.toString()} km/h`;
  const windgust:string | undefined = ((dataToday.wind.gust !== undefined)
    ? `${(dataToday.wind.gust * 3.6).toFixed(1).toString()} km/h`
    : '0.00 km/h');
  const winddirection:number | undefined = dataToday.wind.deg;
  const humidity = `${dataToday.main.humidity} %`;
  const description = dataToday.weather?.[0].description;
  const codToday = dataToday.cod.toString();
  let windCardinalDirections:string = '';
  if (winddirection) {
    windCardinalDirections = getWindDirection(winddirection);
  }
  const styles = {
    userDrag: 'none',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserDrag: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  };
  return (
    <div data-testid="today-weather" className="flex flex-row min-w-[100%] flex-wrap mx-auto my-2 select-none border-2 rounded-lg px-2 h-[30rem] sm:h-[15rem]">

      {codToday === '200' ? (
        <>
          <div className="flex flex-row w-[100%] sm:flex-col sm:w-[60%] max-h-[11rem] ">
            <div className="flex flex-row min-h-[11rem] w-[100%]">
              <div className="flex-col w-[58%] sm:w-[58%] px-1">
                <div className="flex flex-row text-4xl" data-testid="city-name">{cityName}</div>
                <div className="flex flex-row" data-testid="converted-timestamp">{convertedTimestamp}</div>
                <div className="flex flex-row max-w-5 max-h-15">
                  <Image
                    src={iconUrl}
                    alt="Weather Icon"
                    width={100}
                    height={100}
                    style={styles as React.CSSProperties}
                    data-testid="weather-icon"
                  />
                </div>
              </div>
              <div className="flex-col w-[42%] sm:w-[42%] px-1 mt-auto">
                <div className="flex flex-row text-4xl" data-testid="max-temp">
                  {maxTemperatureInCelsius}
                </div>
                <div className="flex flex-row text-xl" data-testid="min-temp">
                  {minTemperatureInCelsius}
                </div>
                <div className="flex flex-row" data-testid="description">
                  {description.split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </div>
                <div className="flex flex-row" data-testid="feels-like">
                  Feels Like:
                  {' '}
                  {feelsLike}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[100%] sm:flex-col w-[100%] sm:w-[40%] my-0 h-[11rem] sm:my-auto sm:max-h-[11rem] sm:h-auto">
            <div className="flex-row px-1 my-0 w-[100%]">
              <div className="flex flex-row" data-testid="precipitation">
                Precipitation:
                {' '}
                {rain}
              </div>
              <div className="flex flex-row" data-testid="windspeed">
                Wind:
                {' '}
                {windspeed}
                {' '}
                {windCardinalDirections}
              </div>
              <div className="flex flex-row" data-testid="windgust">
                Gust:
                {' '}
                {windgust}
                {' '}
              </div>
              <div className="flex flex-row" data-testid="humidity">
                Humidity:
                {' '}
                {humidity}
              </div>
            </div>
          </div>
        </>
      ) : (<div className="flex flex-row w-[100%] text-center">Something went wrong, please try again later</div>)}
      <h1 className="flex flex-row min-w-[100%] justify-center pt-1 text-center" data-testid="h1-WT">
        WEATHER FORECAST
        {' '}
        <br />
        SWIPE LEFT OR PRESS &#x2B05; ON YOUR KEYBOARD
      </h1>
    </div>

  );
}
