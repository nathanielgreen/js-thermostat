console.log("app is working")

var thermostat = new Thermostat();



var showTempVar = function() {
  $("#temp").text(thermostat.temperature + "ºC");
  if (thermostat.displayColour == 'Low Temp') {
    $('#temp').removeClass('Yellow Red');
    $('#temp').addClass('Green');
  } else if (thermostat.displayColour == 'Mid Temp') {
    $('#temp').removeClass('Green Red');
    $('#temp').addClass('Yellow')
  } else if (thermostat.displayColour == 'High Temp') {
    $('#temp').removeClass('Green Yellow');
    $('#temp').addClass('Red')
  }
}

showTempVar();
// var changeColourVar = function() {
//   $("#temp").text(thermostat.temperature);
//   if (thermostat.displayColour == 'Low Temp') {
//     $('#temp').removeClass('Yellow Red');
//     $('#temp').addClass('Green');
//   } else if (thermostat.displayColour == 'Mid Temp') {
//     $('#temp').removeClass('Green Red');
//     $('#temp').addClass('Yellow')
//   } else if (thermostat.displayColour == 'High Temp') {
//     $('#temp').removeClass('Green Yellow');
//     $('#temp').addClass('Red')
//   }
// }



$('#tempUp').click(function() {
  thermostat.tempIncrease(1);
  showTempVar();
});

$('#tempDown').click(function() {
  thermostat.tempDecrease(1);
  showTempVar();
});

$('#resetTemp').click(function() {
  thermostat.resetButton();
  showTempVar();
});

$('#powerSave').change(function() {
  thermostat.powerSaveToggle();
  showTempVar();
});

var chosenCity = window.location.search.substring(11)

var connectedLink = "http://api.openweathermap.org/data/2.5/weather?q=" + chosenCity;
console.log(window.location)
console.log(window.location.search)
console.log(window.location.search.substring(2))

console.log(window.location.search.substring(11))
console.log(connectedLink)

var myjson;
$.getJSON(connectedLink, function(json){
    myjson = json;

  function showWeather(){
      document.getElementById("showWeather").innerHTML = "The temperature in " + chosenCity + " is: " + JSON.stringify(Math.round(myjson.main.temp) - 273) + "ºC";
  };

  showWeather();

});
