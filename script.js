function selectChange() {
  var opt = document.getElementById("city").options[
    document.getElementById("city").selectedIndex
  ].value;
  //   console.log(opt);
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
      const place = json.name;
      console.log(temperatur, place);
    });
}

getWeathr("seoul");
