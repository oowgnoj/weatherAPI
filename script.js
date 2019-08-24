function selectChange() {
  var opt = document.getElementById("city").options[
    document.getElementById("city").selectedIndex
  ].value;
  var icons = document.querySelector(".fa-sun");
  var iconss = document.querySelector(".fa-cloud-showers-heavy");
  var iconsss = document.querySelector(".fa-snowflake");
  var iconssss = document.querySelector(".fa-cloud-sun");

  icons.style.display = "none";
  iconss.style.display = "none";
  iconsss.style.display = "none";
  iconssss.style.display = "none";
  getWeathr(opt);
}

const API_KEY = "1a159477d8d8169aedfbe3c51575dc17";
function getWeathr(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperatur = json.main.temp;
      const humidity = json.main.humidity;
      const weathers = json.weather[0].id;
      const change = "" + weathers;
      changeText(".temp", temperatur);
      changeText(".humm", humidity);
      geticon(change[0]);
    });
}

function changeText(classname, text) {
  var elem = document.querySelector(classname);
  elem.innerText = text;
}

function geticon(weather) {
  console.log(weather);
  if (weather === "8") {
    var icon = document.querySelector(".fa-sun");
    icon.style.display = "block";
  } else if (weather === "2" || weather === "3" || weather === "5") {
    var icon = document.querySelector(".fa-cloud-showers-heavy");
    icon.style.display = "block";
  } else if (weather === "6") {
    var icon = document.querySelector(".fa-snowflake");
    icon.style.display = "block";
  } else if (weather === "7") {
    var icon = document.querySelector(".fa-cloud-sun");
    icon.style.display = "block";
  } else {
    var icon = document.querySelector(".fa-cloud-sun");
    icon.style.display = "block";
  }
}

getWeathr("seoul");
