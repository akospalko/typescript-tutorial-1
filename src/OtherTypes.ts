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

// ----------Never----------
export const Never = ():void => {
  // Throwing errors
  const createError = (errorMsg: string): never => {
    throw new Error(errorMsg) 
  }  
  // Infinite loops
  const infinite = () => {
    let i = 0;
    while (true) {
      i++;
      // Code that never stops executing
      if(i > 100) break; // comment out break line to achieve - :never return type
    }
  }


  // Create custom type guard for type narrowing 
  const checkInputType = (checkedType: string, value: any): boolean => {
    return typeof value === checkedType ? true : false; // e.g. typeof 5 === number
  }
  
  // Type narrowing
  const numberOrString = (value: number | string): string => {
    if(checkInputType('number', value)) return 'number';
    if(checkInputType('string', value)) return 'string';
    return createError('This should never happen'); // this explicit return is required to handle a potentional undefined case
  } 
  numberOrString(45);

  // type compatibility with never 
  // assign other type to never
  let neverType: never;
  // neverType = 45; // error - cannot assign other type to never 
  // neverType = 'never going to work'; // error 

  // assign never to other type
  let otherType: string;
  //   otherType = neverType; // error
}