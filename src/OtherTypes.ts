// Other types
// ----------Objects----------
export const Objects = ():void => {
  // Objects
  // testing object type
  let myObj: Object; // type obj
  myObj = [] // ok - arr is a valid obj type 
  console.log(typeof myObj);
  myObj = {} // ok - obj literal
  console.log(typeof myObj);

  // obj literal with inferred types
  const exampleObj = {
    prop1: 'name',
    prop2: true
  }

  // reassigning inferred obj literal types 
  exampleObj.prop1 = 'Rick';
  // exampleObj.prop1 = 4; // error - cannot change type inferred on obj/prop init (prop1: 'name' -> string) 
  exampleObj.prop2 = false;
} 


// ----------Any----------
export const Any = ():void => {
  let obj: any = { x: 0 };
  // None of the following lines of code will throw compiler errors.
  // Using `any` disables all further type checking, and it is assumed
  // you know the environment better than TypeScript.
  // obj.foo(); // no type error, only runtime error 
  // obj(); // no type error, only runtime error
  obj.bar = 100;
  obj = 'hello';
  const n: number = obj;
}