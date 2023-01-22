function roditel () {
    this.isPlugged = false;
    this.Podkluch = function () {
    console.log(`Устройство ${this.name} подключено`);
      this.isPlugged = true;
    }
}
  
roditel.prototype.Vikluch = function () {
    console.log(`Устройство ${this.name} отключили`);
    this.isPlugged = false;
}
  
  
function Lamp (name,brand,power,type) {
    this.name = name
    this.brand = brand
    this.power = power
    this.type = type
}
  
Lamp.prototype = new roditel()
  
function Comp (name,brand,power,type,functionality) {
    this.name = name
    this.brand = brand
    this.power = power
    this.type = type
    this.functionality = functionality
}
  
Comp.prototype = new roditel()
  
const pribor1 = new Lamp('IKOW','Xiami',15,'Torcher') 
const pribor2 = new Comp('Pentium','IBM',200,'Personal','Game') 
const pribor3 = new roditel('Ps','IBM',200,'Personal','Game')
  
pribor1.Podkluch();
pribor2.Vikluch();
pribor3.Vikluch();

console.log(pribor1)
console.log(pribor2)
console.log(pribor3)