export type APIWeatherProps = {
  dataToday:DataToday,
  dataForecast: DataForecast
};
export type DataToday = {
  cod: string,
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number | undefined;
    feels_like: number;
  };
  wind: {
    speed: number;
    deg: number | undefined;
    gust: number | undefined;
  };
  dt: number;
  weather:{
    icon: string;
    description: string;
  }[]
  rain:{
    '1h':number;
  }
};

export type DataForecast = {
  city:{
    coord: {
      lat: number,
      lon: number,
    }
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number,
  }
  cnt: number,
  cod: string,
  list:{
    clouds:{
      all: number,
    }
    dt: number,
    dt_txt: string,
    main:{
      feels_like: number,
      grnd_level: number,
      humidity: number,
      pressure: number,
      sea_level: number,
      temp: number,
      temp_kf: number,
      temp_max: number,
      temp_min: number,
    },
    pop: number,
    sys:{
      pop: string,
    },
    visibility: number,
    weather:{
      id: number,
      main: string,
      icon: string | undefined,
      description: string,
    }[],
    wind:{
      speed: number,
      deg: number,
      gust: number,
    },
    rain:{
      '3h': string,
    }
  }[],
  message: number,
};
