var showTempVar = function() {
  document.getElementById("temp").innerHTML = thermostat.temperature;
}

showTempVar();

$('#tempUp').click(function() {
  thermostat.tempIncrease(1);
  showTempVar();
})
document.getElementById("tempUp").addEventListener("click", function(){
  thermostat.tempIncrease(1);
  showTempVar();
});

document.getElementById("tempDown").addEventListener("click", function(){
  thermostat.tempDecrease(1);
  showTempVar();
});


document.getElementById("resetTemp").addEventListener("click", function(){
  thermostat.resetButton();
  showTempVar();
});

document.getElementById("powerSave").addEventListener("change" , function(){
  thermostat.powerSaveToggle();
  showTempVar();
});
