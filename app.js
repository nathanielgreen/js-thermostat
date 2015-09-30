document.getElementById("temp").innerHTML = thermostat.temperature;


document.getElementById("tempUp").addEventListener("click", function(){
  thermostat.tempIncrease(1);
  document.getElementById("temp").innerHTML = thermostat.temperature;
});



document.getElementById("tempDown").addEventListener("click", function(){
  thermostat.tempDecrease(1);
  document.getElementById("temp").innerHTML = thermostat.temperature;
});


document.getElementById("resetTemp").addEventListener("click", function(){
  thermostat.resetButton();
  document.getElementById("temp").innerHTML = thermostat.temperature;
});

document.getElementById("powerSave").addEventListener("change" , function(){
  thermostat.powerSaveToggle();
  document.getElementById("temp").innerHTML = thermostat.temperature;
});
