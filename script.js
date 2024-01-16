function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperatureUpdate = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperatureUpdate);

  //let iconElement = document.querySelector("#temperature-icon");
  //iconElement.innerHTML = response.data.condition.icon_url;
}

function searchCity(city) {
  //make api call and update the interface
  let apiKey = "a8c4f4faa8db0498d2codf9b3t8812a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Kuala Lumpur");
