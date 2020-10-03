

var apiKey = "13a5ee9994f8c30a308c57716c7f8149";
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=13a5ee9994f8c30a308c57716c7f8149";


$.ajax({
    url:queryURL ,
    method: "GET"
}).then(function(response) {
    console.log(response.main.temp);
  });



function getCurrentweather(cityName){
    
};






