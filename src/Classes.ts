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
  }
  
  
  // Access modifiers---------- 
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