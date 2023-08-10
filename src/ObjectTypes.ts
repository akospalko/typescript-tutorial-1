// Object types

// Arrays 
export const Arrays = ():void => {
  let lettersArr: string[] = ['a', 'b', 'c']; // string
  let techsArr: (string | number)[] = ['JS', 'React', 'TS', 1]; // string | number
  let mixedArr: (number | string | boolean)[] = [1, 'Love', 'TS', true ]; // string | number | boolean;
  
  // reassign arrays
  // lettersArr[0] = 5; // type number -> string - error
  lettersArr[1] = 'Rick' // ok
  
  techsArr[0] = 'I'; // string -> number - ok (we can overwrite different types as long as the arr type is included)
  techsArr[0] = 4 // number -> number - ok
  
  // lettersArr = techsArr // string[] <- (number | string)[] - error 
  techsArr = lettersArr; // (number | string)[] <- string[] - ok 
  // techsArr.unshift(true); // only num | str, no bool - error  
  
  // techsArr = mixedArr; // only num | string, no bool - error
  mixedArr = techsArr; // accepts num | str | bool - ok
  
  const bands: string[] = [];
  // bands.push(1); // error
  bands.push('The Police'); // ok
}

// Tuples 
export const Tuples = ():void => {
  // Tuples - define length in an array and specific order of items 
  
  let northArrowTuple: [string, string, string, string, number] = ['N', 'E', 'S', 'W', 0]; 
  let southArrowTuple: [string, string, string, string, number] = ['S', 'W', 'N', 'E', 1]; 
  // let southArrowTupleShort: [string, string, string, string] = ['S', 'W', 'N', 'E', 1]; 

  // assign tuple to a mixed array and vice versa
  // mixedArr = northArrowTuple; // ok
  // northArrowTuple = mixedArr; // error  
  // assign tuple to tuple
  southArrowTuple = southArrowTuple; // ok
  // southArrowTuple = southArrowTupleShort; // error - tuple types are not matching 

  // reassign tuple items
  // northArrowTuple[0] = 0; // error - item[0] only accepts string as value
  northArrowTuple[0] = 'S'; // ok
  // northArrowTuple[5] = 0; // error - array is out of bounds, cannot assign to type undefined
}

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


// Interface
export const Interface = ():void => {
  // define interface for obj
  interface BandI {
    name?: string,
    active: boolean,
    members: (string)[]  
  }

  const nirvana: BandI = {
    // name?: 'Nirvana',
    active: false,
    members: ['Curt', 'Krist', 'Dave'],
  }

  // experiment with type narrowing 
  const greetBand2 = (band: BandI) => {
    if(band.name) {
      return `Welcome ${band.name.toUpperCase()}` // if band instance has name prop
    } 
    return 'Welcome unknown artist!'; // name prop is unavailable
  }

  // test out interface and type narrowing 
  console.log(greetBand2(nirvana));
}

// Enum type
export const Enum = () => {
  // Enum
  enum GeographicDirections {
    North='0°',
    East='90°',
    South='180°',
    West='270°'
  }

  const findDirection=(direction: GeographicDirections) => {
    return `We are heading ${direction}`
  }

  console.log(findDirection(GeographicDirections.North));
}