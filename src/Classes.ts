// ----------BasicClass----------
export function BasicClass():void {
  /*
  NOTE:
  readonly - value cannot be changed after initializtion
  class constructor vs visibility modifiers
  super()
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

// ----------Access modifiers----------
export const AccessModifiers = (): void => {
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


// AM with constructor params applied
class Account2 {
  constructor( 
    public username: string, // public - 
    private balance: number,
    protected lastTransactions: string[]
  ) { }
}

//----------Class getters and setters (keyword)----------
  export const GetterAndSetters = (): void => {
  // #1
  class Bands {
    private dataState: string[]
    constructor(){
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
  const myBands = new Bands();
  myBands.data=['Johhny Cash', 'Kris Kristofferson'] // !NOTE - data is used both as a getter and a setter. Here it is used a setter as we try to assign new value to it
  console.log(myBands.data); // !Note: ts automatically recognizes that it is a getter: 1. we are not assigning anything (=)  

  // #2
  class Person {
    // constructor
    constructor(
      public nickName: string,
      private firstName: string,
      private lastName: string,
      private age: number
    ){ }
    // getters
    public get getNickname(): string | never {
      if(typeof this.nickName== 'undefined' || !this.nickName) {
        throw new Error('nickname is unavailable')
      }
      return `user nickname: ${this.nickName}`
    }
    public get getFirstName(): string | never {
      if(typeof this.firstName === 'undefined' || !this.firstName) {
        throw new Error('first name is unavailable')
      }
      return `user first name: ${this.firstName}`
    }
    public get getLastName(): string | never {
      if(typeof this.lastName === 'undefined' || !this.lastName) {
        throw new Error('last name is unavailable')
      }
      return `user last name: ${this.lastName}`
    }
    public get getAge(): number | never {
      if(typeof this.age !== 'number' || !this.age) {
        throw new Error('age is unavailable')
      }
      return this.age
    }
    // setters
    public set setNickname(newNickname: string) {
      if(!newNickname) {
        throw new Error('Provide a new nickname!') 
      }
      this.nickName = newNickname
    }
    public set setFirstName(newFirstName: string) {
      if(!newFirstName) {
        throw new Error('Provid a new first name!')
      }
      this.firstName = newFirstName
    }
    public set setLastName(newLastName: string) {
      if(!newLastName) {
        throw new Error('Provide a new last name')
      }
      this.lastName = newLastName
    }    
    public set setAge(newAge: number) {
      if(typeof newAge !== 'number'){
        throw new Error('Provide a valid age value (must be number)!')
      }
      this.age = newAge
    }
  }
  
  const alexander = new Person('alex', 'Alexander', 'Thompson', 36);
  console.log(alexander);
  console.log(alexander.nickName) // ok - access nickname w/o getter as it has a public accessor
  console.log(alexander.getNickname); // calling getter // !NOTE: we dont call getNickname like a function 
  // console.log(alexander.setNickname = ''); // error - provide a new nickname msg
  console.log(alexander.setNickname = 'Al'); // ok
  console.log(alexander.getNickname);
  console.log(alexander.setFirstName = 'Sam');
  console.log(alexander.getFirstName);
  console.log(alexander.setLastName = 'Springfield');
  console.log(alexander.getLastName);
  console.log(alexander.setAge = 30);
  console.log(alexander.getAge);
  
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