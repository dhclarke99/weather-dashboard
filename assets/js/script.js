// API key 
var apiKey = "1c39f5ca13c985d309cd5081d8f2b159";
var button = document.querySelector('.btn');
var cityName = document.querySelector("#city-name");
var currentCity = document.querySelector(".col-12");
var previousCities = document.querySelector(".local-storage");
var dayOne = document.querySelector("#day-1");
var dayTwo = document.querySelector("#day-2");
var dayThree = document.querySelector("#day-3");
var dayFour = document.querySelector("#day-4");
var dayFive = document.querySelector("#day-5");

button.addEventListener('click', getCityName);
getLocalStorage();

function getPreviousCityName(e) {
  var clickedButton = e.target.textContent;
  cityName.setAttribute("value", clickedButton);
  getCityName();
}

function getCityName() {
  var cityNameValue = cityName.value;

  fetchCityData(cityNameValue)
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      var weatherRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;

      fetchWeatherData(weatherRequestUrl)
        .then(function (data) {
          var currentWeatherData = data.list[0];
          var currentTemp = currentWeatherData.main.temp;
          var currentHumidity = currentWeatherData.main.humidity;
          var currentWind = currentWeatherData.wind.speed;
          var currentIcon = currentWeatherData.weather[0].icon;
          var iconRequestURL = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";

          setCurrentWeather(cityNameValue, currentTemp, currentHumidity, currentWind, iconRequestURL);
          setLocalStorage(cityNameValue);

          set5DayWeather(data.list);
        });
    });
}

function fetchCityData(cityName) {
  var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;

  return fetch(requestUrl)
    .then(function (response) {
      return response.json();
    });
}

function fetchWeatherData(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    });
}

function setCurrentWeather(cityName, temp, humidity, wind, iconURL) {
  var newCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  currentCity.children[0].textContent = newCityName + " " + dayjs().format("(MM/DD/YYYY)");
  document.querySelector("#current-img").setAttribute("src", iconURL);
  document.querySelector("#temp").textContent = "Temp: " + temp + "℉";
  document.querySelector("#wind").textContent = "Wind: " + wind + " MPH";
  document.querySelector("#humidity").textContent = "Humidity: " + humidity + " %";
}

function set5DayWeather(weatherList) {
  var days = [dayOne, dayTwo, dayThree, dayFour, dayFive];

  for (var i = 0; i < days.length; i++) {
    var dayWeatherData = weatherList[(i + 1) * 8 - 1];
    var unixTime = dayWeatherData.dt;
    var dateFormat = dayjs.unix(unixTime).format("MM/DD/YYYY");
    var temp = dayWeatherData.main.temp;
    var humidity = dayWeatherData.main.humidity;
    var wind = dayWeatherData.wind.speed;
    var icon = dayWeatherData.weather[0].icon;
    var iconRequestURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    days[i].children[0].textContent = dateFormat;
    days[i].querySelector("#day" + (i + 1) + "-temp").textContent = "Temp: " + temp + "℉";
    days[i].querySelector("#day" + (i + 1) + "-wind").textContent = "Wind: " + wind + " MPH";
    days[i].querySelector("#day" + (i + 1) + "-humidity").textContent = "Humidity: " + humidity + " %";
    days[i].querySelector("#day" + (i + 1) + "-img").setAttribute("src", iconRequestURL);
  }
}

function setLocalStorage(cityName) {
  var previousCities = localStorage.getItem("cities") || "";
  var newCities = [previousCities, cityName].filter(Boolean).join(",");
  localStorage.setItem("cities", newCities);
}

function getLocalStorage() {
  if (localStorage.length > 0) {
    var cities = localStorage.getItem("cities").split(",");
    var exists = {};

    for (var i = 0; i < cities.length; i++) {
      if (!exists[cities[i]]) {
        var previousCityButton = document.createElement("button");
        previousCityButton.setAttribute("class", "previous-city-button");
        previousCityButton.textContent = cities[i];
        previousCities.appendChild(previousCityButton);
        exists[cities[i]] = true;
        previousCityButton.addEventListener('click', getPreviousCityName);
      }
    }
  }
}
