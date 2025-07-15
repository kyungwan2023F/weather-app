const content = document.getElementById("content");

export function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "Your Favorite Weather App";

  content.appendChild(title);
}
