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


function getLocalStorage () {
  var cities = localStorage.getItem("cities").split(",")
  console.log(cities);
  var exists = {};
  for (var i = 0; i<cities.length; i++ ) {
    if (!exists[cities[i]]) {
      var button = document.createElement("button");
      button.setAttribute("class", "previous-city-button")
    button.textContent = cities[i]
    previousCities.appendChild(button)
    exists[cities[i]] = true
    }
    
  }
};

getLocalStorage();

function getCityName() {

    console.log(cityName.value);
    
    var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName.value + "&limit=1&appid=1c39f5ca13c985d309cd5081d8f2b159";

    fetch(requestUrl)
    .then(function (response) {
    
      return response.json();
      
      
    }) .then(function (data) {
        console.log(data);

    var lat = (data[0].lat);
    var lon = (data[0].lon);
    console.log(lat);
    console.log(lon);
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=1c39f5ca13c985d309cd5081d8f2b159";
    
    fetch(requestUrl)
      .then(function (getWeatherData) {
      
        return getWeatherData.json();
        
        
      })
      .then(function (data) { 
        console.log(data);
        var currentunixTime = data.list[0].dt;
        console.log(currentunixTime);
        var dateFormat = dayjs.unix(currentunixTime).format('MMM D, YYYY, hh:mm a');
        console.log(dateFormat);
        var currentTemp = (data.list[0].main.temp);
        var currentHumidity = (data.list[0].main.humidity);
        var currentWind = (data.list[0].wind.speed);

        
      

        setCurrentWeather()
       function setCurrentWeather() {
        console.log(cityName.value);
        console.log(dateFormat);
        console.log(currentTemp);
        console.log(currentHumidity);
        console.log(currentWind);
        console.log(currentCity);

        var newCityName = cityName.value.charAt(0).toUpperCase() + cityName.value.slice(1)
        console.log(newCityName)
        currentCity.children[0].textContent = (newCityName + " " + dateFormat);
        var item1 = document.querySelector(".temp");
        var item2 = document.querySelector(".wind");
        var item3 = document.querySelector(".humidity");
      
       
        item1.textContent = ("Temp: " + currentTemp + " degrees Farenheit");
        item2.textContent = ("Wind: " + currentWind + " MPH ");
        item3.textContent = ("Humidity: " + currentHumidity + " % ");

        setLocalStorage(newCityName)

        } set5DayWeather()
        function set5DayWeather(){
        var day1UnixTime = data.list[8].dt;
        var day1DateFormat = dayjs.unix(day1UnixTime).format('MMM D, YYYY');
        var day2UnixTime = data.list[16].dt;
        var day2DateFormat = dayjs.unix(day2UnixTime).format('MMM D, YYYY');
        var day3UnixTime = data.list[24].dt;
        var day3DateFormat = dayjs.unix(day3UnixTime).format('MMM D, YYYY');
        var day4UnixTime = data.list[32].dt;
        var day4DateFormat = dayjs.unix(day4UnixTime).format('MMM D, YYYY');
        var day5UnixTime = data.list[39].dt;
        var day5DateFormat = dayjs.unix(day5UnixTime).format('MMM D, YYYY');
        var day1Temp = (data.list[1].main.temp);
        var day1tHumidity = (data.list[1].main.humidity);
        var day1Wind = (data.list[1].wind.speed);
        var day2Temp = (data.list[2].main.temp);
        var day2tHumidity = (data.list[2].main.humidity);
        var day2Wind = (data.list[2].wind.speed);
        var day3Temp = (data.list[3].main.temp);
        var day3tHumidity = (data.list[3].main.humidity);
        var day3Wind = (data.list[3].wind.speed);
        var day4Temp = (data.list[4].main.temp);
        var day4tHumidity = (data.list[4].main.humidity);
        var day4Wind = (data.list[4].wind.speed);
        var day5Temp = (data.list[5].main.temp);
        var day5tHumidity = (data.list[5].main.humidity);
        var day5Wind = (data.list[5].wind.speed);

        dayOne.children[0].textContent = (day1DateFormat);
       var item1 = document.querySelector("#day1-temp");
        console.log(item1);
        var item2 = document.querySelector("#day1-wind");
        var item3 = document.querySelector("#day1-humidity");
      
       
        item1.textContent = ("Temp: " + day1Temp + " degrees Farenheit");
        item2.textContent = ("Wind: " + day1Wind + " MPH ");
        item3.textContent = ("Humidity: " + day1tHumidity + " % ");

        dayTwo.children[0].textContent = (day2DateFormat);
        var item1 = document.querySelector("#day2-temp");
         console.log(item1);
         var item2 = document.querySelector("#day2-wind");
         var item3 = document.querySelector("#day2-humidity");
       
        
         item1.textContent = ("Temp: " + day2Temp + " degrees Farenheit");
         item2.textContent = ("Wind: " + day2Wind + " MPH ");
         item3.textContent = ("Humidity: " + day2tHumidity + " % ");

         dayThree.children[0].textContent = (day3DateFormat);
        var item1 = document.querySelector("#day3-temp");
         console.log(item1);
         var item2 = document.querySelector("#day3-wind");
         var item3 = document.querySelector("#day3-humidity");
       
        
         item1.textContent = ("Temp: " + day3Temp + " degrees Farenheit");
         item2.textContent = ("Wind: " + day3Wind + " MPH ");
         item3.textContent = ("Humidity: " + day3tHumidity + " % ");

         dayFour.children[0].textContent = (day4DateFormat);
        var item1 = document.querySelector("#day4-temp");
         console.log(item1);
         var item2 = document.querySelector("#day4-wind");
         var item3 = document.querySelector("#day4-humidity");
       
        
         item1.textContent = ("Temp: " + day4Temp + " degrees Farenheit");
         item2.textContent = ("Wind: " + day4Wind + " MPH ");
         item3.textContent = ("Humidity: " + day4tHumidity + " % ");

         dayFive.children[0].textContent = (day5DateFormat);
        var item1 = document.querySelector("#day5-temp");
         console.log(item1);
         var item2 = document.querySelector("#day5-wind");
         var item3 = document.querySelector("#day5-humidity");
       
        
         item1.textContent = ("Temp: " + day5Temp + " degrees Farenheit");
         item2.textContent = ("Wind: " + day5Wind + " MPH ");
         item3.textContent = ("Humidity: " + day5tHumidity + " % ");

        }

        function setLocalStorage(newCityName) {
          var previousCities = localStorage.getItem("cities")
          if (previousCities !== null) {
          var newCities = [previousCities, newCityName]
          localStorage.setItem("cities", newCities);
          } else {
            var newCities = [newCityName]
            localStorage.setItem("cities", newCities);
          }

        }
        
        //1680588000
        //1680598800
        //1680609600


        }
      );
  })}

  //getApi()
  
  button.addEventListener('click', getCityName);
  //button.addEventListener('click', getApi)