function Thermostat() {
  this.temperature = 20
  this.powerSave = true
};

Thermostat.prototype.tempIncrease = function(num) {
  this.temperature += num;
  if (this.powerSave == true) {
    if (this.temperature > 25) {
        this.temperature = 25
    }
  }
};

Thermostat.prototype.tempDecrease = function(num) {
  this.temperature -= num;
  if (this.temperature < 10) {
      this.temperature = 10;
  }
};
