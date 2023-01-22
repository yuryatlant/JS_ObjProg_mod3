class Roditel {
    constructor () {
      this.isPlugged = false;
    }
    Podkluch () {
      console.log(`Устройство ${this.name} подключено`);
      this.isPlugged = true;
    }
    Vikluch () {
      console.log(`Устройство ${this.name} отключили`);
      this.isPlugged = false;
    }
  }
  
  class Lamp extends Roditel {
    constructor (name,brand,power,type) {
      super();
      this.name = name;
      this.brand = brand;
      this.power = power;
      this.type = type;
    }
  }
  class Comp extends Roditel {
      constructor (name,brand,power,type,functionality) {
        super();
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.type = type;
        this.functionality = functionality;
      }
  }
  
  const device1 = new Lamp ('IKOW','Xiami',15,'Torcher') 
  const device2 = new Comp('Pentium','IBM',200,'Personal','Game')
  console.log(device1)
  console.log(device2)
  device1.Podkluch();
  device2.Podkluch();