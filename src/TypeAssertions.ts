// Type assertions / casting

export const TypeAssertions = () => {
  // ----------As type----------
  type One = string;
  type Two = string | number; 
  type Three = 'hello';
  // convert to more/less specific types 
  let a: One = 'hello';
  let b = a as Two; // less specific (open to both string and number)
  let c = a as Three; // more specific type

  let d = <One>'world'; // <> cannot be used with .tsx files (react)
  let e = <string | number>'world' 

  const addOrConcat = (a: number, b: number, c: 'add' | 'concat' ): number | string => {
    if(c === 'add') return a + b;
    else {
      return '' + a + b;
    }
    
  }

  // let myVal: string = addOrConcat(1,2,'concat'); // error - func return number | string is not assignable to var of type string      
  let myVal1: string = addOrConcat(1,2,'concat') as string; // ok - tell ts that return value is going to be a string
  // let myVal2: number = addOrConcat(1,2,'concat') as number; // error - ts sees number return value, actual return value is a string ('concat')
  let myVal2: number = addOrConcat(1,2,'add') as number; // ok - passing 'add' argument results in -> number


  // double/force casting / 2 assertions - not recommended 
  let value: any = "42";
  let numericValue = (value as unknown) as string;
  console.log(typeof numericValue); // Output: string

  // DOM
  // DOM element inferred specificity from least to most specific: Element -> HTMLElement -> HTMLImageElement
  const id = document.querySelector('#myId') // element
  const img = document.querySelector('img')! //  HTMLImageElement // ok - assert type using the non null assertion operator ('!') - it tells the compiler that img is not null for sure
  const img2= document.getElementById('img') as HTMLImageElement // ok - assert type using 'as'
  const img3= <HTMLImageElement>document.getElementById('img') // ok - assert type using the angled bracket '<>' 

  // img2.src // ok
  // img3.src // ok

  // Exercise
  // Original JS code - NOT TS COMPATIBLE
  // const year = document.getElementById("year");
  // const thisYear = new Date().getFullYear();
  // year?.setAttribute("datetime", thisYear);
  // year?.textContent = thisYear;

  // Solution 1
  // const year: HTMLElement | null = document.getElementById("year");
  // const thisYear: string = new Date().getFullYear().toString(); // ok - var expects string: number (new Date().getFullYear()) -> string (.toString()) 
  // if(year) {
  //   year.setAttribute("datetime", thisYear);
  //   year.textContent = thisYear;
  // }

  // Solution 2
  const year = document.getElementById("year") as HTMLSpanElement;
  const thisYear: string = new Date().getFullYear().toString(); // ok - var expects string: number (new Date().getFullYear()) -> string (.toString()) 
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
 
// NonNullAssertion(!)
export const NonNullAssertion = (): void => {
  // Suppose we have an HTML element with an id "result"
  let resultElement: HTMLElement | null = document.getElementById("result");
  // If we're confident that the element exists, we can use a non-null assertion
  resultElement!.textContent = "Hello, TypeScript!";
}