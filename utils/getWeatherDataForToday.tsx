export default function getWeatherDataForToday(
  lat: string,
  lon: string,
  apiKey: string | undefined,
):
  Promise<any> {
  // default gets the location via lat/lon
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  // you can set here a specific city for testing
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Graz&units=standard&appid=${apiKey}`;
  return fetch(url).then((res) => res.json());
}
