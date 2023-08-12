// Object types
// ----------Arrays: type[] || Array<type>----------
export const Arrays = ():void => {
  let lettersArr: string[] = ['a', 'b', 'c']; // string
  let stringArr: Array<string> = ['another', 'way', 'to', 'annotate', 'array', 'type']
  let techsArr: (string | number)[] = ['JS', 'React', 'TS', 1]; // string | number
  let mixedArr: (number | string | boolean)[] = [1, 'Love', 'TS', true ]; // string | number | boolean;

  // lettersArr[0] = 5; // error - type number -> string 
  stringArr = ['reassign', 'whole', 'array'];
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

// ----------Tuples---------- 
export const Tuples = ():void => {
  // tuples - define length in an array and specific order of items 
  let northArrowTuple: [string, string, string, string, number] = ['N', 'E', 'S', 'W', 0]; 
  let southArrowTuple: [string, string, string, string, number] = ['S', 'W', 'N', 'E', 1]; 
  // let southArrowTupleShort: [string, string, string, string] = ['S', 'W', 'N', 'E', 1]; // error - initializer value does not match tuple type  

  // assign tuple to a mixed array and vice versa
  let mixedArr: (string | number)[] = [1, 'two', 3, 'four'];
  mixedArr = northArrowTuple; // ok - northArrowTuple is a valid array of strs and nums
  // northArrowTuple = mixedArr; // error  
  
  // assign tuple to tuple
  southArrowTuple = southArrowTuple; // ok - both tuples have the same type definition
  // southArrowTuple = southArrowTupleShort; // error - tuple types are not matching 

  // reassign tuple items
  // northArrowTuple[0] = 0; // error - item[0] only accepts string as value
  northArrowTuple[0] = 'S'; // ok

  // reference out of bounds tuple items
  // northArrowTuple[5] = 0; // error - item at [5] is undefined
}

// ----------Interface----------
export const Interface = (): void => {
  // Object Interface 
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  // Object Interface with optional properties
  interface BandI {
    name?: string,
    active: boolean,
    members: (string)[]  
  }

  const nirvana: BandI = {
    // name?: 'Nirvana', // ok - optional parameter
    active: false,
    members: ['Curt', 'Krist', 'Dave'],
  }

  // experiment with type narrowing 
  const greetBand = (band: BandI) => {
    if(band.name) {
      return `Welcome ${band.name.toUpperCase()}` // if band instance has name prop
    } 
    return 'Welcome unknown artist!'; // name prop is unavailable
  }

  // test out interface and type narrowing 
  console.log(greetBand(nirvana));

  // Extending Interfaces
  interface Employee extends Person {
    employeeId: string | number;
  }
  const printEmployee = (employee: Employee): string => {
    return `Employee ID: ${employee.employeeId} }, age: ${employee.age}`
  }
  printEmployee({firstName: 'Joe', lastName: 'Moe', age: 50, employeeId: 1512})

  // TODO: Class Implementation:
  // class FullTimeEmployee implements Employee {
  //   // Implement properties and methods here
  // }

  // Type Annotations and Interface usage
  function printPerson(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
  }
  printPerson({firstName: 'Joe', lastName: 'Moe', age: 35});

  // Readonly Properties
  interface Point {
    readonly x: number;
    y: number;
  }
  let modifyPoint: Point = { 
    x: 10,
    y: 25
  } 
  // modifyPoint.x = 25; // error - cannot modify readonly props
  modifyPoint.y = 30; // ok

  // Function Signatures in Interfaces
  interface MathOperation {
    (x: number, y: number): number; // function with 2 number type params, with a number return value 
  }

  // the interface already specifies the types so it is not necessary to explicitly describe it like below
  const add: MathOperation = (x: number, y: number): number => { // number params
    // return `result: ${x + y}` // error - string
    return x + y; // returns a number
  }
  // inferred types 
  const subtract: MathOperation = (x, y) => {
    return x - y;
  }
  const multiply: MathOperation = (x, y) => {
    return x * y;
  }
  const divide: MathOperation = (x, y) => {
    return x / y;
  }

  const operationValues = {x: 10, y: 2}; 

  console.log(
    'add', add(operationValues.x, operationValues.y),
    'subtract', subtract(operationValues.x, operationValues.y),
    'multiply', multiply(operationValues.x, operationValues.y),
    'divide', divide(operationValues.x, operationValues.y)
  )
}

// ----------Enum----------
export const Enum = () => {
  // Numeric enums - inferred num value (start from 0), incrementing  
  // infered values to enum members 
  enum GraphicsSettings {
    Low, // 0
    Medium, // 1
    High, // 2
    VeryHigh // 3
  }
  console.log(GraphicsSettings.Low, GraphicsSettings.VeryHigh);

  // explicitly define first, infer other enum member values
  enum CountEnum {
    one = 1,
    two, // 2 inferred
    three, // 3
    four // 4
  }
  
  // utilize single enum item 
  const selectNum = ( numbers: CountEnum ): string => {
    return `selected num is: ${numbers}`
  } 
  console.log(selectNum(CountEnum.one))

  // utilize all items in enum 
  const countTo4 = ( numbers: CountEnum[] ): void => {
    numbers.forEach(item => {
        console.log(item)
    })
  } 
  const numbersToIncludeInCounting = [CountEnum.one, CountEnum.two, CountEnum.three, CountEnum.four];
  countTo4(numbersToIncludeInCounting);

  // String enums - no auto increment
  // explicitly assign values to enum members 
  enum GeographicDirections {
    North='0°',
    East='90°',
    South='180°',
    West='270°'
  }

  // enum member as type annotation to func param
  const findDirection=(direction: GeographicDirections) => {
    return `We are heading ${direction}`
  }
  console.log(findDirection(GeographicDirections.South));

  // return a specific enum member
  const getNorth = (directions: { North: string }): string => { // ts infers types when passing arg to func: GeographicDirections -> {North: string}
    return `North is this way: ${directions.North}`
  }
  console.log(getNorth(GeographicDirections));

  // Computed Enums
  const enum computedEnum {  
    one = 1,
    two = 2,
    sumOneTwo = one + two // 3 - computed value
  }
  console.log('computedValue: ', computedEnum.sumOneTwo);
  
  // Enum Member Types - access enum members as both types and values 
  enum enumTypesAndValues {
    yes = 1, // type: yes, value: 1
    no = 0 // no - 0
  }

  const storeType = enumTypesAndValues;
  const storeValue = enumTypesAndValues.yes;
  console.log(storeType); // value - 1
  console.log(storeValue); // type - {0: 'no', 1: 'yes', yes: 1, no: 0} - When TypeScript compiles this enum to JavaScript, it generates an object where each enum member is mapped to its value and vice versa. This allows you to look up the value of an enum member using its name and vice versa.

  // Reverse Mapping - Numeric enums have reverse mappings, which allow you to get the enum member name from its value.
  enum Status {
    Active, // 0
    Inactive, // 1
    Default = 'default' // str 
  }
  
  let statusName: string = Status[0]; // "Active" - Status at index 0 (only num type can serve as index [0])
  console.log('reverse mapping numeric enum:', statusName); 
  // console.log('reverse mapping numeric enum:', Status['default']); // error - only works with num types  

  // Enum as object - acces enum's like obj values
  enum Color {
    Red=1,
    Green,
    Blue,
  }
  
  let colorValue: number = Color.Red;   // 0
  let colorName: string = Color[0];     // "Red"

  // Constant Value Checking: Enums provide a way to define a limited set of valid values for a variable.
  enum Size {
    Small,
    Medium,
    Large,
  }
  
  function chooseSize(size: Size) {
    // ...
  }
  chooseSize(Size.Medium);

  // Enum Declaration Merging: Enums can be extended using declaration merging to add more members.
  enum Fruit {
    Apple=1,
    Banana,
  }
  
  enum Fruit { // if first declaration is not initialized(Apple=1) -> error 
    Orange,
    Mango, 
  }
}