// TS functions
export const Functions = ():void => {
  console.log('Practicing TS functions:');
  /* NOTE: 
  // function declaration - function f() {...}
  // function expression - const f = () => {...}
  */
 
  // ----------Function type expressions----------
  // func type expression as parameters  
  function greetTheGuest(msgF: (message: string) => void ) { // 
    msgF('Be welcome, dear guests!');
  }

  // ! importance of including type when declaring func expr param:
  // if you create a param named "string" and omit its type, it results in a param name "string" with inferred type any  
  // function greetTheGuest((string) => void)  {
  //   string();
  // }  
  
  // log message
  function sayMessage (message: string ): void {
    console.log(message);
  }
  
  // greet the guest 
  greetTheGuest(sayMessage);
  

  // Type alias as parameter
  type SayMessageT = (saysMsg: string) => void;
  function messengersMessage (msgF: SayMessageT, msg: string) {
    msgF(msg);
  }
  messengersMessage(sayMessage, 'I\'m the messenger and i have a message for you!');

  // ----------(function) Call signatures----------
  // 1. (parameter: type): returnType; - used in the context of object type definitions to describe call signatures
  type MathFunctionType1 = {
    (x: number, y: number): number,
    //...
  }
  const add: MathFunctionType1 = (x, y) => x + y;
 console.log( 'call signature:', add(10, 5))
  // 2. (parameter: type) => returnType - used to define standalone function types or arrow function types
  type MathFunctionType2 = (x: number, y: number) => number;
  const subtract: MathFunctionType2 = (x, y) => x - y;
  console.log( 'call signature:', subtract(10, 5));

  //----------Construct signatures---------- 
  // function type definitions with the new keyword (calling the constructor)
  type SomeObject = any;
  type SomeConstructor = {
    new (s: string): SomeObject; // construct signature
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }



  //----------Function return types---------
  // String
  const concatInitials = (a: string, b: string): string => {
    return a + b;
  }
  console.log(concatInitials('A.', 'P.'));
  // Number
  const sumNum = (a: number, b: number): number => {
    return a + b;
  }
  // Void
  const logMsg = (msg: any): void => {
    console.log(msg);
  }
  
  logMsg('HeloBelo')
  logMsg(sumNum(1,2))
  // logMsg(sumNum('1', 5)) // error - sumNum takes number params, string param is provided

  //----------Functions with optional parameters (?)---------- 
  // error caused by not handled optional parameter
  // const addMultiple = (a: number, b: number, c?: number): number => {
  //   return a + b - c; // error: c - is possibly undefined (because c value is optional and we might not pass any number in place of c)
  // }

  // utilize type guard to handle possible undefined value for c
  const addMultiple = (a: number, b: number, c?: number): number => { // use type guard to avoid error 
    if(typeof c !== 'undefined') {
      return a + b - c;
    }
    return a + b; // regardless, we need to return a number 
  }
  console.log(
    addMultiple(1,2), // ok - 3
    addMultiple(1,2,3) // ok - 6
  )

  // utilize default param values to handle undefined
  const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
  }
  console.log(
    sumAll(1,2), // ok - 5 ->  last param value (c: number = 2) is applied  
    sumAll(undefined, 3) // ok - 15  -> pass undefined to apply default value (a: number = 10), apply 3, apply default value (c: number = 2)  
    // sumAll(3) // error  
  )

  // ----------Rest parameters----------
  const total = (firstNum: number, ...restNums: number[]): number => {
    // args: (10,20,30), ...nums: [10,20,20] 
    return firstNum + restNums.reduce((acc, curr) => acc + curr); // Note: the order of passing rest params matters (end) 
  }
  console.log(total(10,20,30,40,50))

  // TODO----------Generic Functions---------- 

}