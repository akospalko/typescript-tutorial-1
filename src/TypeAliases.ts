// Type Aliases
export const TypeAliases = ():void => {
  // type aliases with obj structure
  // define type annotation (property type blueprint for obj literals) 
  type Band = {
    name: string,
    active?: boolean, // ? - optional property
    albums: (string | number)[]
  }

  let thepolice: Band = {
    name: 'The Police',
    active: false,
    albums: ['Synchronicity', 'Ghost in the machine', 24]
  }

  // test optional property
  let thebeatles: Band = {
    name: 'The Beatles',
    // active: false, // we can omit active as it is optional
    albums: [51, 'A Hard Day\'s Night', 'Let It Be' ]
  }

  // add non existing property to obj with type annotation
  // thepolice.members = ['Sting', 'Andy Summers']; // error, no such prop type  

  // assign objs
  // thepolice = thebeatles; // ok
  // thepolice = exampleObj; // error - exampleObj is missing mandatory prop types: name, albums  

  // function parameter with type annotation
  let greetBand = (band: Band): string => {
    return `Let's welcome ${band.name}!`;
  } 

  console.log(greetBand(thebeatles));

  // combine type aliases with union type
  type stringOrNumber = string | number;
  let age: stringOrNumber = 5;
  age = 'five'
  // age = false // error - no bool allowed
} 