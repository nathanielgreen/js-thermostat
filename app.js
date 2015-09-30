console.log("app is working")

var thermostat = new Thermostat();


var showTempVar = function() {
  $("#temp").text(thermostat.temperature + "ºC");
}

var changeColourVar = function() {
  $("#tempNotice").text(thermostat.displayColour);
  if (thermostat.displayColour == 'Low Temp') {
    $('#tempNotice').addClass('Green');
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
