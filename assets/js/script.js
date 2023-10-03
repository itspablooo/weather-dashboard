
  // global var for use when calling the function on click
  var searchBtn = document.getElementById("search-button");

  //function to ren api and display forecast data
function weatherForecast() {

  

  var apiKey = "2fe1d38381e4dd997b4e16839835b745"; 
  var searchInput = document.getElementById("city").value;
  var weather = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";

// fetch weather data from api 
  fetch(weather)
  .then(function (response) {
      return response.json();
  })
  .then(function(data) {
    console.log(data);
    // set variables for data that will be displayed. 
    var cityName = data.city.name;
    var currentCondition = data.list[2].weather[0].icon;
    var currentDate = data.list[2].dt_txt;
    var currentTemp = data.list[2].main.temp;
    var currentWind = data.list[2].wind.speed;
    var currentHumidity = data.list[2].main.humidity;




    document.getElementById("cityDisplay").append(cityName + currentDate);
    document.getElementById("tempCurrent").append(currentTemp + " °F");
    document.getElementById("windCurrent").append(currentWind + " MPH");
    document.getElementById("humidityCurrent").append(currentHumidity + " %")










  })

    

    
}

// call function on click 
searchBtn.addEventListener('click', weatherForecast);
