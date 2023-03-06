import { DataForecast } from '@/typings';
import Image from 'next/image';
import React from 'react';

const styles = {
  userDrag: 'none',
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserDrag: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
};
export default function ForeCastWeatherCard(props:DataForecast) {
  const dataForecast = props;
  const { cod } = dataForecast;
  const twentyFourHourForeCastArray = [];
  const weatherList = dataForecast?.list;
  for (let i = 0; i < 7; i += 1) {
    let appendDict = {
      unixTimestamp: new Intl.DateTimeFormat('en-EN', {
        // day: '2-digit',
        // month: 'short',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(423705600 * 1000)),
      temp: '',
      temp_max: '',
      temp_min: '',
      iconUrl: '',
      rain: '',
    };
    if (weatherList?.[i] !== undefined) {
      appendDict = {
        unixTimestamp: new Intl.DateTimeFormat('en-EN', {
          // day: '2-digit',
          // month: 'short',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        }).format(new Date(weatherList[i].dt * 1000)),
        temp: (weatherList[i].main.temp).toFixed(1).toString(),
        temp_max: (weatherList[i].main.temp_max).toFixed(1).toString(),
        temp_min: (weatherList[i].main.temp_min).toFixed(1).toString(),
        iconUrl: `https://openweathermap.org/img/wn/${weatherList[i]?.weather[0].icon}@2x.png`,
        rain: weatherList?.[i]?.rain?.['3h'],
      };
    }
    twentyFourHourForeCastArray.push(appendDict);
  }
  return (
    <div
      data-testid="forecast-weather"
      className="flex flex-row min-w-[100%] flex-wrap hover:cursor-pointer active:cursor-grab select-none \
    mx-auto flex-wrap  border-2 rounded-lg px-2 h-[30rem] sm:h-[15rem] mt-2"
    >
      {cod === '200' ? (
        <>
          {twentyFourHourForeCastArray.map((forecast, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="flex flex-col mx-auto my-auto px-1 bg-gray-500 rounded-xl py-2" key={index}>
              <div className="flex-row min-w-[14%] mx-auto" data-testid={`unix-timestamp-${index}`}>{forecast.unixTimestamp}</div>
              <div className="flex-row min-w-[14%] max-h-[4rem] mx-auto select-none">
                <Image
                  src={forecast?.iconUrl ? forecast.iconUrl : '/Images/404.png'}
                  alt="Weather Icon"
                  width={50}
                  height={50}
                  className="select-none"
                  style={styles as React.CSSProperties}
                  data-testid={`weather-icon-${index}`}
                />
              </div>
              <div
                className="flex-row min-w-[14%] mx-auto"
                data-testid={`forecast-temp-${index}`}
              >
                {`${forecast.temp}°`}
              </div>
            </div>
          ))}
          {' '}
        </>
      ) : (<div className="flex flex-row w-[100%] text-center">Something went wrong, please try again later</div>)}
      <h1 className="flex flex-row min-w-[100%] justify-center pt-1 text-center mt-auto pb-1" data-testid="h1-WF">
        WEATHER TODAY
        {' '}
        <br />
        SWIPE RIGHT OR PRESS &#x27A1; ON YOUR KEYBOARD
      </h1>
    </div>
  );
}
