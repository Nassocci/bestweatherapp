import TodayWeatherCard from '@/components/cards/weatherCards/TodayWeatherCard';
import { APIWeatherProps } from '@/typings';
import getWeatherDataForForecast from '@/utils/getWeatherDataForForecast';
import getWeatherDataForToday from '@/utils/getWeatherDataForToday';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import ForeCastWeatherCard from '@/components/cards/weatherCards/ForeCastWeatherCard';
import Image from 'next/image';

export default function BestWeatherApp({ dataToday, dataForecast }: APIWeatherProps) {
  // swipe right/left
  const [isSwipingRight, setIsSwipingRight] = useState(true);
  const bind = useGesture({
    onDrag: ({ offset: [x] }) => {
      if (x > 20) {
        setIsSwipingRight(true);
      } else {
        setIsSwipingRight(false);
      }
    },
  });
  // keyboard right/left
  useEffect(() => {
    function handleKeyDown(e:any) {
      if (e.keyCode === 39) {
        setIsSwipingRight(true);
      } else if (e.keyCode === 37) {
        setIsSwipingRight(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // dark mode
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const handleToggleClick = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };
  return (
    <div data-testid="main" className={`${isDarkModeEnabled ? 'bg-[#15202b] text-white' : 'bg-white text-black'} min-w-screen min-h-screen pt-2`}>
      <div className="flex flex-col w-full py-2 text-lg sm:text-3xl text-center max-w-[90%] mx-auto relative">
        <button onClick={handleToggleClick} type="button" className="absolute right-2" data-testid="dark-mode-button">
          {isDarkModeEnabled ? (
            <Image
              src="/Images/light-mode.png"
              alt="Weather Icon"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/Images/dark-mode.png"
              alt="Weather Icon"
              width={30}
              height={30}
            />
          )}
        </button>
        <h1 className="flex flex-row w-[100%] justify-center">
          ⒷestⓌeatherⒶpp
        </h1>
        <div className="flex flex-col w-[100%] justify-center">
          Stay Ahead of the Storm, with BWA!
        </div>
      </div>
      <div
        {...bind()}
        className=" flex max-w-[90%] md:max-w-[700px] mx-auto hover:cursor-pointer active:cursor-grab select-none"
        data-testid="weather-card"
      >
        {isSwipingRight ? (
          <TodayWeatherCard {...dataToday} />
        ) : (
          <ForeCastWeatherCard {...dataForecast} />
        )}
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<APIWeatherProps> = async (context) => {
  // client ip from the req.header
  let ip:string | string[] | undefined = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
  if (ip?.includes('127.0.0.1') || ip?.includes('::1')) {
    ip = '185.164.4.45';
  }
  const res = await fetch(`https://ipapi.co/${ip}/latlong`);
  const [lat, lon] = (await res.text()).split(',');
  const apiKey: string | undefined = process.env.openweathermapAPIKey;
  // you can test and change to other citys if you want, the test url is commented out in the file
  // https://openweathermap.org/current#data V2.5
  const dataToday = await getWeatherDataForToday(lat, lon, apiKey);
  const dataForecast = await getWeatherDataForForecast(lat, lon, apiKey);
  return {
    props: {
      dataToday,
      dataForecast,
    },
  };
};
