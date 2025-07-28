async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "410a965af09232cea6be2f43502aef26"; // <-- Replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
