// Primitive types

export const PrimitiveTypes = ():void => {
  let a: number = 5;
  let b: string = '6';
  let c: number = 12;

  console.log(a + b); // '56' - string concat 
  // console.log(a * b); // number * string - error
  // console.log(c / b); // string / number - error

  // string
  let myName: string = 'Rick';
  // num
  let age: number = 65;
  // boolean
  let isAlive: boolean = true; 
  // any
  let anything: any = 'randomString';
  // union
  let userID: string | number = '1550';
  // inferring unknown type: intellisense hint on hover over variable name
  let regexTest: RegExp = /\w+/g; // regex

  // reassign types
  // myName = 23; // string -> num - error
  anything = 5; // string -> num - ok 
  userID = 1550; // string || num ok

  // Void
  function noop() {
    return;
  }
  // explicitly typed void
  function noop2():void {
    return;
  }

  // Undefined & Null
  type Person = {
    name: string | null | undefined,
    alias: string
  }

  // type narrowing (strictNullCheck: on) with null / undefined
  const greetPerson = (person: Person): string => {
    if (person.name === null || person.name === undefined) {
      return 'Welcome Anonymus!';
    }
    return `Welcome ${person.name}`
  }
  console.log(greetPerson({name: 'Andrew', alias: 'Andy'}))
  
  // handle undefined with union type
  let name: string | undefined= 'Rick'; 
  name = undefined; // ok - allow undefined, assign default value
  console.log(name)
  // name = null // error - null is not allowed
}