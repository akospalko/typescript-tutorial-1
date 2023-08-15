// ----------Classes----------
export function Classes():void {
  /*
  NOTE:
  readonly - value cannot be changed after initializtion
  visibility modifiers - public, private, protected
  class constructor vs visibility modifiers
  super()
  class ClassName implements InterfaceName
  
  
  plan:
  - define basic class
    -with constructor
    -with visibility modifiers
    - test out readonly modifier 
  - implement class with interface 
  - extend class
  
  */
  
    // Normal js class with TS typing 
    // class Coder {
    //   name: string
    //   music: string
    //   experienceInYears: number
    //   language: string
      
    //   constructor(
    //     name:string,
    //     music:string,
    //     experienceInYears:number,
    //     language:string
    //   ) {
    //     this.name = name,
    //     this.music = music,
    //     this.experienceInYears = experienceInYears,
    //     this.language = language
    //   }
    // }
    // const coderOne = new Coder('Sam', 'KEDELA - ASTRAL', 1, 'JavaScript');
    // console.log(coderOne);
  
    // TS class definition with constructor params and access modifiers
    class Coder {
        secondLang!:string // create a property that we won't initialize immediately // ok - assert its later type (string) // for advanced usecase
        constructor(
          public readonly name:string, // readonly - cannot change property after it has been declared
          public music:string,
          private age:number,
          protected language:string = 'TypeScript'
        ) {
          // No need to assign properties (this.name = name), because it gets initialized using the parameter property shorthand }
        } 
        // getter method
        public getAge() {
          return `${this.name}'s age is `
        }
  
    }
    const coderOne = new Coder('Sam', 'KEDELA - ASTRAL', 1, 'JavaScript');
    console.log(coderOne, coderOne.getAge());
    coderOne.getAge();
    // console.log(coderOne.age); // error - private access 
    // console.log(coderOne.secondLang); // error - not initialized on class instantiation

    // Extend/derive class 
    class WebDev extends Coder {
      constructor(
        public computer: string,
        name:string, 
        music:string,
        age:number,
      ) {
        super(name, music, age); // call super to initialize extended classess value's 
        this.computer = computer;
      }
        public getLang() {
          return `I write ${this.language}`
        }
    }
    const Sarah = new WebDev('Mac', 'Sarah', 'SOLDMANE - Forever', 26);  
    console.log(Sarah.getLang()); // ok - can access (protected) base class default value (language = 'TypeScript') within derived class w/o initialization
    // console.log(Sarah.age) // error - private member is not availabile in derived class (we are currently in an instance: outside of both base and derived classes)
    // console.log(Sarah.language) // error - protected member is not available outside base and derived class. currently we are trying to access class instance
}


// ----------Class with interface----------
export const ClassWithInterface = ():void => {
  // Create interface
  interface Instrument {
    name: string,
    instrument: string,
    play: (action: string) => string
  }

  // Apply interface to a class
  class Guitarist implements Instrument {
    name: string
    instrument: string

    constructor(
      name: string, 
      instrument: string   
    ) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
      return `${this.name} ${action} the ${this.instrument}`
    }
  }
  // instantiate
  const Page = new Guitarist('Jimmy', 'guitar');
  console.log(Page.play('strums'))
}

// ----------Static members----------
export const StaticMembers = ():void  => {
  // # 1
  class Peeps {
    static count: number = 0 // keep count on the class not on an instance of a class, count does not apply to class instantiations but to the class itself
    static getCount(): number {
      return Peeps.count // !Note: access count directly using Peeps.count (call on a class) instead of this.count() (call on instantiated values)  
    }   
    
    public id: number
    constructor(public name: string) {
      this.name = name
      this.id = ++Peeps.count
    }
  }
  const pepe = new Peeps('pepe'); 
  const pepito = new Peeps('pepito'); 
  const littlePepe = new Peeps('littlePepe'); 
  console.log(pepe.id, pepito.id, littlePepe.id)

  // # 2
  class Employee {
    private static headcount: number = 0 // 

    constructor (
      private firstName: string,
      private lastName: string,
      private jobTitle: string
    ) {
      Employee.headcount++  // increment employee headcount by one when an instance is created
    }

    public static getHeadcount(): string { // get and return headcount prop's value
      return `Number of employees ${Employee.headcount}`
    } 
  }
  const dan = new Employee('dan', 'on', 'frontend web developer');
  const danielle = new Employee('danielle', 'on', 'backend web developer');

  console.log(Employee.getHeadcount()); // 2
}


// Access modifiers
// AM with default ts class
class Account1 {
  // set up members
  public username: string // public - member is accessible within/outside of class 
  private balance: number // private - member is only accessible within class
  protected lastTransactions: string[] // protected - member is accessible within class and derived/subclass

  constructor( 
    // constructor params
    username: string,
    balance: number,
    lastTransactions: string[]
  ) { 
    // initialize class members by assigning constructor params
    this.username = username,
    this.balance = balance,
    this.lastTransactions = lastTransactions
  }
}

// AM with constructor params applied
class Account2 {
  constructor( 
    public username: string, // public - 
    private balance: number,
    protected lastTransactions: string[]
  ) { }
}

//----------class getters and setters (keyword)----------
const getterAndSetters = (): void => {
    class Bands {
      private dataState: string[]
      constructor(dataState: string[]){
        this.dataState = []
      }
      // ts get and set keywords 
      public get data(): string[] {
        return this.dataState
      }

    public set data(value: string[]) {
      if(Array.isArray(value) && value.every(val => {
        return typeof val === 'string'
      })){
        this.dataState = value
        return
      } else throw new Error ('Param is not an array of strings')
    }
  }
  // const myBands = new Bands()
}

// ----------Constructor Params---------- 
export const ConstructorParams = ():void => {
  // Ts class and  constructor parameter propserties
  class Person {
    constructor(public name:string, private age:number) {
      // The "public name: string" and "private age: number" are parameter properties
    }
  }
  const person = new Person("Alice", 30);
  console.log(person.name); // Output: Alice
  // console.log(person.age); // cannot access private class members
}