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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.clear();

  const city = input.value.trim();
  getWeather(city)
    .then((data) => {
      const current = getCurrentWeather(data);
      const foreCast = getForecast(data);
      console.log(current);
      console.log(foreCast);

      renderCurrentWeather(current);
      renderForecast(foreCast);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
});
