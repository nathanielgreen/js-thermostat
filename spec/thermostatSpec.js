describe('thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase its temperature', function() {
    thermostat.tempIncrease(3);
    expect(thermostat.temperature).toEqual(23);
  });

  it('can decrease its temeperature', function() {
    thermostat.tempDecrease(10);
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a minimum temeperature of 10 degrees', function() {
    thermostat.tempDecrease(100);
    expect(thermostat.temperature).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it('power saving mode can be toggled', function() {
    thermostat.powerSaveToggle();
    expect(thermostat.powerSave).toBe(false);
    thermostat.powerSaveToggle();
    expect(thermostat.powerSave).toBe(true);
  });

  it('has max temp 25 degrees if power saving mode is on', function() {
    thermostat.tempIncrease(100);
    expect(thermostat.temperature).toEqual(25);
  });

  it('has max temperature of 32 degrees if power saving is off', function() {
    thermostat.powerSaveToggle();
    thermostat.tempIncrease(1000);
    expect(thermostat.temperature).toEqual(32)
  });

  it('can be reset to 20 degrees by hitting the reset button', function() {
    thermostat.tempIncrease(5);
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(20)
  });

  it('colour displays green when temp is lower than 18', function() {
    thermostat.tempDecrease(10);
    expect(thermostat.displayColour).toEqual('green')
  });

  it('colour displays red when temp is higher than 24', function() {
    thermostat.tempIncrease(10);
    expect(thermostat.displayColour).toEqual('red')
  });

  it('colour displays yellow when temp is between 17 and 25', function() {
    thermostat.tempDecrease(1);
    thermostat.tempIncrease(3);
    expect(thermostat.displayColour).toEqual('yellow')
  });

});
