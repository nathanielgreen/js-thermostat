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

showTempVar();


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

var myjson;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk", function(json){
    myjson = json;

function showWeather(){
    document.getElementById("showWeather").innerHTML = "The temperature in London is: " + JSON.stringify(myjson.main.temp - 273.15) + "ºC";
};

showWeather();


});
