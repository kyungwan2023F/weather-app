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
  cardHeader.textContent = `Current Weather - ${currentData.address}`;

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

function renderDate(currentData, container) {
  const rawDate = currentData.dateTimeEpoch;
  const dateObj = new Date(rawDate * 1000);

  const date = document.createElement("p");
  date.id = "sub";

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
  date.textContent = formattedDate.replace(
    day.toString(),
    `${day}${getOrdinalSuffix(day)}`,
  );

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
