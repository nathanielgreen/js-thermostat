describe('thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase its temperature', function() {
    thermostat.tempIncrease(3);
    expect(thermostat.temperature).toEqual(23)
  });

  it('can decrease its temeperature', function() {
    thermostat.tempDecrease(10);
    expect(thermostat.temperature).toEqual(10)
  });

  it('has a minimum temeperature of 10 degrees', function() {
    thermostat.tempDecrease(100)
    expect(thermostat.temperature).toEqual(10)
    // expect(thermostat.tempDecrease(100)).toThrow(new Error("The minimum temperature is 10"))
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSave).toBe(true)
  });

  it('has max temp 25 degrees if power saving mode is on', function() {
    thermostat.tempIncrease(100)
    expect(thermostat.temperature).toEqual(25)
  });

});
