// API key 
var apiKey = "1c39f5ca13c985d309cd5081d8f2b159";
var button = document.querySelector('.btn')
var cityName = document.querySelector("#search-input-sidenav")

function getCityName() {
    console.log(cityName.value)
    var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName.value + "&limit=1&appid=1c39f5ca13c985d309cd5081d8f2b159";

    fetch(requestUrl)
    .then(function (response) {
    
      return response.json();
      
      
    }) .then(function (data) {
        console.log(data)

    var lat = (data[0].lat)
    var lon = (data[0].lon)
    console.log(lat)
    console.log(lon)
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=1c39f5ca13c985d309cd5081d8f2b159";
    
    fetch(requestUrl)
      .then(function (response) {
      
        return response.json();
        
        
      })
      .then(function (data) { 
        console.log(data)
        var currentunixTime = data.list[0].dt
        console.log(currentunixTime)
        var dateFormat = dayjs.unix(currentunixTime).format('MMM D, YYYY, hh:mm a')
        console.log(dateFormat)
        currentTemp = (data.list[0].main.temp)
        currentHumidity = (data.list[0].main.humidity)
        currentWind = (data.list[0].wind.speed)
        console.log(currentTemp)
        console.log(currentHumidity)
        console.log(currentWind)

        }
      );
  })}

  //getApi()
  
  button.addEventListener('click', getCityName);
  //button.addEventListener('click', getApi)