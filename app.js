document.getElementById("tempUp").addEventListener("click", function(){
  thermostat.tempIncrease(1);
});

document.getElementById("tempDown").addEventListener("click", function(){
  thermostat.tempDecrease(1);
});

document.getElementById("showTemp").addEventListener("click", function(){
  console.log(thermostat.temperature);
});
