import "./styles/style.css";
import { getWeather, getCurrentWeather, getForecast } from "./api/weather.js";
import {
  createForm,
  renderCurrentWeather,
  renderForecast,
} from "./dom/render.js";

createForm();

const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.clear();

  const city = input.value.trim();
  try {
    const data = await getWeather(city);
    const current = getCurrentWeather(data);
    const foreCast = getForecast(data);
    console.log(current);
    console.log(foreCast);

    await renderCurrentWeather(current);
    await renderForecast(foreCast);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
});
