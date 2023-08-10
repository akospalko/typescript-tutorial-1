// Type
export const Type = ():void => {
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

// Type Aliases
export const TypeAliases = ():void => {
  // union
  type stringOrNumber = string | number;
  // obj
  type Band = {
    name: string,
    active: boolean,
    members: string[]
  }
}