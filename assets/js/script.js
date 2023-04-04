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
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=1c39f5ca13c985d309cd5081d8f2b159";
    
    fetch(requestUrl)
      .then(function (response) {
      
        return response.json();
        
        
      })
      .then(function (data) {
        
        console.log(data)
        console.log('Github Repo Issues \n----------');
        
        }
      );
  })}

  //getApi()
  
  button.addEventListener('click', getCityName);
  //button.addEventListener('click', getApi)