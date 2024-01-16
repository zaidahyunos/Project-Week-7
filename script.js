function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  temperatureElement.innerHTML = response.data.temperature.current;
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
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
