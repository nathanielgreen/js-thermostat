function Thermostat() {
  this.temperature = 20
  this.powerSave = true
};

Thermostat.prototype.tempIncrease = function(num) {
  this.temperature += num;
  if (this.powerSave == false) {
    if (this.temperature > 32) {
        this.temperature = 32;
    }
  } else if (this.powerSave == true) {
    if (this.temperature > 25) {
        this.temperature = 25;
    }
  }
};

Thermostat.prototype.tempDecrease = function(num) {
  this.temperature -= num;
  if (this.temperature < 10) {
      this.temperature = 10;
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20
};
