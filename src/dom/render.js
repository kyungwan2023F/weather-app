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
