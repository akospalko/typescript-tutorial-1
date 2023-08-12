// TS functions
export const Functions = ():void => {
  console.log('Practicing TS functions:');
  /* NOTE: 
  // function declaration - function f() {...}
  // function expression - const f = () => {...}
  */
 
  // Type expression as parameter
  // func expression as func parameters  
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

  // (function) call signatures
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
  console.log( 'call signature:', subtract(10, 5))
}