export async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&key=FVAZZZCELHADSYHLG3DZJ5X3N&contentType=json`,
    {
      method: "GET",
      mode: "cors",
    },
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export function getCurrentWeather(data) {
  const currentConditions = data.currentConditions;

  return {
    conditions: currentConditions.conditions,
    dateTime: currentConditions.datetime,
    feelsLike: currentConditions.feelslike,
    humidity: currentConditions.humidity,
    icon: currentConditions.icon,
    precipitation: currentConditions.precip,
    temp: currentConditions.temp,
  };
}

export function getForecast(data) {
  const foreCast = data.days.map((day) => ({
    conditions: day.conditions,
    dateTime: day.datetime,
    feelsLike: day.feelslike,
    humidity: day.humidity,
    icon: day.icon,
    precipitation: day.precip,
    temp: day.temp,
  }));

  return foreCast;
}
