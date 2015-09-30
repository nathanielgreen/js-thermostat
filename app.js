console.log("You are working")

var thermostat = new Thermostat();


var showTempVar = function() {
  document.getElementById("temp").innerHTML = thermostat.temperature;
}

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
