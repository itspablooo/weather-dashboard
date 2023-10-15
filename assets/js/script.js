
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
    // console.log(data);
    // pass data to a new function to render 5 day forecast 
    renderFiveDayForecast(data);
    // set variables for data that will be displayed. 
    var cityName = data.city.name;
    var currentCondition = data.list[2].weather[0].icon;
    var currentDate = data.list[2].dt_txt;
    var currentTemp = data.list[2].main.temp;
    var currentWind = data.list[2].wind.speed;
    var currentHumidity = data.list[2].main.humidity;

    document.getElementById("cityDisplay").textContent = cityName + " " + currentDate;
    document.getElementById("tempCurrent").textContent = "Temp: " + currentTemp + " °F";
    document.getElementById("windCurrent").textContent = "Wind: " + currentWind + " MPH";
    document.getElementById("humidityCurrent").textContent = "Humidity: " + currentHumidity + " %";
  })   
}


function renderFiveDayForecast(data) {
console.log(data);
// create a for loop that will loop all items in array "list". Then only select those with time === 12 to show each day instead of hour. 
  for (var i = 0; i < data.list.length; i++) {
    // console.log(data.list[i].dt_txt.slice(11, 13));
    var time = data.list[i].dt_txt.slice(11, 13);
    if (time === "12") {
      //  pass the data to another function 
      renderCard(data.list[i]);
    }
  }
}

function renderCard(dataObject) {
  console.log(dataObject)
  // create an element for div and p tags to display data 
  var rowTwo = document.querySelector(".row2");
  var card = document.createElement("div");
  var date = document.createElement("p");
  var temp = document.createElement("p");
  var wind = document.createElement("p");
  var humidity = document.createElement("p");
  // set the text content to the p tags to be displayed in the browser 
  date.textContent = dataObject.dt_txt;
  temp.textContent = "Temp: " + dataObject.main.temp + " °F";
  wind.textContent = "Wind: " + dataObject.wind.speed + " MPH";
  humidity.textContent = "Humidity: " + dataObject.main.humidity + "%";
  // append the p tags within the div 
  card.append(date);
  card.append(temp);
  card.append(wind);
  card.append(humidity);
  // append the div's (card) into the row2 div 
  rowTwo.append(card);
}
// call function on click 
searchBtn.addEventListener('click', weatherForecast);
