// API key 
var apiKey = "1c39f5ca13c985d309cd5081d8f2b159";
var button = document.querySelector('.btn');
var cityName = document.querySelector("#search-input-sidenav");
var currentCity = document.querySelector(".col-12");
var dayOne = document.querySelector("#day-1");
var dayTwo = document.querySelector("#day-2");
var dayThree = document.querySelector("#day-3");
var dayFour = document.querySelector("#day-4");
var dayFive = document.querySelector("#day-5");

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
        currentCity.children[0].textContent = (cityName.value + " " + dateFormat);
        var item1 = document.querySelector(".temp");
        var item2 = document.querySelector(".wind");
        var item3 = document.querySelector(".humidity");
      
       
        item1.textContent = ("Temp: " + currentTemp + " degrees Farenheit");
        item2.textContent = ("Wind: " + currentWind + " MPH ");
        item3.textContent = ("Humidity: " + currentHumidity + " % ");



        } set5DayWeather()
        function set5DayWeather(){
        var day1UnixTime = data.list[8].dt;
        var day1DateFormat = dayjs.unix(day1UnixTime).format('MMM D, YYYY, hh:mm a');
        var day2UnixTime = data.list[16].dt;
        var dat2DateFormat = dayjs.unix(day2UnixTime).format('MMM D, YYYY, hh:mm a');
        var day3UnixTime = data.list[24].dt;
        var dat3DateFormat = dayjs.unix(day3UnixTime).format('MMM D, YYYY, hh:mm a');
        var day4UnixTime = data.list[32].dt;
        var dat4DateFormat = dayjs.unix(day4UnixTime).format('MMM D, YYYY, hh:mm a');
        var day5UnixTime = data.list[39].dt;
        var dat5DateFormat = dayjs.unix(day5UnixTime).format('MMM D, YYYY, hh:mm a');
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

        dayOne.children[0].textContent = (cityName.value + " " + day1DateFormat);
       var item1 = document.querySelector("#day1-temp");
        console.log(item1);
        var item2 = document.querySelector("#day1-wind");
        var item3 = document.querySelector("#day1-humidity");
      
       
        item1.textContent = ("Temp: " + day1Temp + " degrees Farenheit");
        item2.textContent = ("Wind: " + day1Wind + " MPH ");
        item3.textContent = ("Humidity: " + day1tHumidity + " % ");

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