const content = document.getElementById("content");

export function createForm() {
  const form = document.createElement("form");
  form.id = "weather-form";

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.name = "city";
  input.id = "city-input";
  input.placeholder = "Enter city";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Get Weather";

  form.appendChild(input);
  form.appendChild(submitBtn);

  content.appendChild(form);
}

export async function renderCurrentWeather(currentData) {
  let currentDiv = document.getElementById("current-weather-card");
  if (!currentDiv) {
    currentDiv = document.createElement("div");
    currentDiv.id = "current-weather-card";
  } else {
    currentDiv.innerHTML = "";
  }

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("card-header");

  const cardHeader = document.createElement("h2");
  const capitalized = currentData.address
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  cardHeader.textContent = `Current Weather - ${capitalized}`;

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");

  const iconContainer = document.createElement("div");
  iconContainer.className = "icon-container";

  // Wait for icon to load before continuing
  const iconModule = await getWeatherIcon(currentData.icon);
  appendSVGAsImage(iconModule, iconContainer);
  bodyDiv.appendChild(iconContainer);

  const tempertureDiv = document.createElement("div");
  tempertureDiv.innerHTML = `
    <div class="temperature-container">
      <div class="main-temp">
        <span class="temp-number">${currentData.temp}</span>
        <span class="temp-unit">°</span>
        <span class="temp-scale">F</span>
      </div>
      <div class="feels-like">
        Feels Like* ${currentData.feelsLike}°
      </div>
    </div>
  `;
  bodyDiv.appendChild(tempertureDiv);

  const additionalDetailsDiv = document.createElement("div");
  additionalDetailsDiv.classList.add("addtional-details");
  const otherWeatherData = [
    { label: "Conditions", value: `${currentData.conditions}` },
    { label: "Humidity", value: `${currentData.humidity}%` },
    {
      label: "Precipitation",
      value: currentData.precipitation
        ? `${currentData.precipitation}`
        : "No Precipitation",
    },
  ];

  otherWeatherData.forEach((data) => {
    const bodyItem = document.createElement("div");
    bodyItem.className = "body-item";
    bodyItem.innerHTML = `
      <p class="label">${data.label}: </p>
      <p class="value">${data.value}</p>
    `;

    additionalDetailsDiv.appendChild(bodyItem);
  });

  headerDiv.appendChild(cardHeader);
  renderDate(currentData, headerDiv);
  currentDiv.appendChild(headerDiv);
  currentDiv.appendChild(bodyDiv);
  currentDiv.appendChild(additionalDetailsDiv);
  content.appendChild(currentDiv);
}

export async function renderForecast(foreCast) {
  let foreCastDiv = document.getElementById("forecast-weather-card");
  if (!foreCastDiv) {
    foreCastDiv = document.createElement("div");
    foreCastDiv.id = "forecast-weather-card";
  } else {
    foreCastDiv.innerHTML = "";
  }

  const processedForecast = foreCast.map(
    ({
      conditions,
      dateTimeEpoch,
      feelsLike,
      humidity,
      icon,
      precipitation,
      temp,
    }) => {
      return {
        date: dateTransformer(dateTimeEpoch),
        conditions: conditions,
        icon: icon,
        temperature: temp,
        feelsLike: feelsLike,
        humidity: humidity,
        precipitation: precipitation,
      };
    },
  );

  const foreCastHeader = document.createElement("h2");
  foreCastHeader.id = "forecast-header";
  foreCastHeader.textContent = "14-Day Weather Forecast";

  foreCastDiv.appendChild(foreCastHeader);

  const foreCastBody = document.createElement("div");
  foreCastBody.id = "forecast-body";

  let isFirst = true;

  for (const day of processedForecast) {
    if (isFirst) {
      isFirst = false;
      continue;
    }
    const foreCastItem = document.createElement("div");
    foreCastItem.classList.add("forecast-item");

    // Date
    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = day.date;

    // Icon container
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    const iconModule = await getWeatherIcon(day.icon);
    appendSVGAsImage(iconModule, iconContainer);

    // Temperature section
    const tempSection = document.createElement("div");
    tempSection.classList.add("forecast-temp");

    const temperature = document.createElement("div");
    temperature.classList.add("temperature");
    temperature.textContent = `${day.temperature}°`;

    const feelsLike = document.createElement("div");
    feelsLike.classList.add("feels-like");
    feelsLike.textContent = `${day.feelsLike}°`;

    tempSection.appendChild(temperature);
    tempSection.appendChild(feelsLike);

    // Description section
    const descSection = document.createElement("div");
    descSection.classList.add("forecast-description");

    const conditions = document.createElement("div");
    conditions.classList.add("conditions");
    conditions.textContent = day.conditions;

    const nightConditions = document.createElement("div");
    nightConditions.classList.add("night-conditions");
    nightConditions.textContent = `Night: ${day.conditions}`; // or separate night data

    descSection.appendChild(conditions);
    descSection.appendChild(nightConditions);

    // Precipitation
    const precipitation = document.createElement("div");
    precipitation.classList.add("precipitation");
    precipitation.innerHTML = `💧 ${day.precipitation || "0%"}`;

    // Append everything
    foreCastItem.appendChild(date);
    foreCastItem.appendChild(iconContainer);
    foreCastItem.appendChild(tempSection);
    foreCastItem.appendChild(descSection);
    foreCastItem.appendChild(precipitation);

    foreCastBody.appendChild(foreCastItem);
  }

  foreCastDiv.appendChild(foreCastBody);
  content.appendChild(foreCastDiv);
}

function dateTransformer(dateTimeEpoch) {
  const dateObj = new Date(dateTimeEpoch * 1000);

  // Helper function for ordinal suffix
  function getOrdinalSuffix(n) {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const day = dateObj.getDate();
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  // Replace day with ordinal day
  return formattedDate.replace(
    day.toString(),
    `${day}${getOrdinalSuffix(day)}`,
  );
}

function renderDate(currentData, container) {
  const rawDate = currentData.dateTimeEpoch;

  const date = document.createElement("p");
  date.id = "sub";

  // Replace day with ordinal day
  date.textContent = dateTransformer(rawDate);

  container.appendChild(date);
}

async function getWeatherIcon(iconName) {
  console.log("Looking for icon:", iconName);
  try {
    const iconModule = await import(`../assets/icons/${iconName}.svg`);
    return iconModule.default;
  } catch (error) {
    console.error(`Icon ${iconName} not found`);
    const fallBack = await import("../assets/icons/clear-day.svg");
    return fallBack.default;
  }
}

function appendSVGAsImage(svgUrl, container) {
  const img = document.createElement("img");
  img.src = svgUrl;
  img.alt = "Weather icon";
  img.className = "weather-icon";

  container.appendChild(img);
}
