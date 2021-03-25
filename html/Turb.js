class Turb {
 constructor(
      // definining parameters:  
    manufacturer,
    bladeType,
    curveRatio,
    colourType,
    width,
    height,
    phaseSequence1,
    phaseSequence2,
    motorSwitchEnergization
){
    //Defining properties:
    this.manufacturer = manufacturer;
    this.bladeType = bladeType;
    this.curveRatio = curveRatio;
    this.colourType = colourType;
    this.width = width;
    this.height = height;
    this.bladeType = bladeType;
    this.motorType = {
        phaseSequence1,
        phaseSequence2,
    };
    this.motorSwitchEnergization = motorSwitchEnergization;
}
    // adding methods
    turbineSwitchMode(switchStatus) {
        this.motorSwitchEnergization = switchStatus;
      }
      newManufacturer(newInput) {
        this.manufacturer = newInput;
      }
      newHeight(inputHeight) {
        this.height = inputHeight;
      }
      
};

export default Turb;


