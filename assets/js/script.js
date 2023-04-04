// API key 
var apiKey = "1c39f5ca13c985d309cd5081d8f2b159";
var button = document.querySelector('.btn')


function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1c39f5ca13c985d309cd5081d8f2b159";
  
    fetch(requestUrl)
      .then(function (response) {
      
        return response.json();
        console.log(response)
        
      })
      .then(function (data) {
        console.log(data)
        console.log('Github Repo Issues \n----------');
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].url);
          console.log(data[i].user.login);
        }
      });
  }
  //getApi()
  
  button.addEventListener('click', getApi);