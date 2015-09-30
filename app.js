console.log("app is working")

var thermostat = new Thermostat();



var showTempVar = function() {
  $("#temp").text(thermostat.temperature + "ºC");
}

var changeColourVar = function() {
  $("#tempNotice").text(thermostat.displayColour);
  if (thermostat.displayColour == 'Low Temp') {
    $('#tempNotice').removeClass('Yellow Red');
    $('#tempNotice').addClass('Green');
  } else if (thermostat.displayColour == 'Mid Temp') {
    $('#tempNotice').removeClass('Green Red');
    $('#tempNotice').addClass('Yellow')
  } else if (thermostat.displayColour == 'High Temp') {
    $('#tempNotice').removeClass('Green Yellow');
    $('#tempNotice').addClass('Red')
  }
}

showTempVar();
changeColourVar();

$('#tempUp').click(function() {
  thermostat.tempIncrease(1);
  showTempVar();
  changeColourVar();
});

$('#tempDown').click(function() {
  thermostat.tempDecrease(1);
  showTempVar();
  changeColourVar();
});

$('#resetTemp').click(function() {
  thermostat.resetButton();
  showTempVar();
  changeColourVar();
});

$('#powerSave').change(function() {
  thermostat.powerSaveToggle();
  showTempVar();
  changeColourVar();
});

Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});

Weather.getForecast("Kansas City", function(forecast) {
  console.log("forecast high: " + forecast.high());
  console.log("forecast low: " + forecast.low());
});
