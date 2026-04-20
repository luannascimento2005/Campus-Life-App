// Campus Life Hub MVP JavaScript
// This file handles basic interactivity for the MVP pages.

console.log("Campus Life Hub script loaded.");

// Weather button on the home page
const weatherBtn = document.querySelector("#weather-btn");
const weatherText = document.querySelector("#weather-text");

// Event buttons on the events page
const eventButtons = document.querySelectorAll(".event-btn");

// Simple button interaction for event cards
eventButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.textContent = "Saved!";
  });
});

// Basic API attempt using Open-Meteo
if (weatherBtn && weatherText) {
  weatherBtn.addEventListener("click", async function () {
    weatherText.textContent = "Loading weather...";

    try {
      const endpoint =
        "https://api.open-meteo.com/v1/forecast?latitude=34.36&longitude=-89.52&current=temperature_2m,weather_code";

      const response = await fetch(endpoint);
      const data = await response.json();

      console.log(data);

      const temperature = data.current.temperature_2m;
      weatherText.textContent = `Current campus temperature: ${temperature}°C`;
    } catch (error) {
      console.log("Weather API error:", error);
      weatherText.textContent = "Unable to load weather right now.";
    }
  });
}