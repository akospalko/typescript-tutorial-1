// Advanced types

// ----------Literal types----------
export const LiteralType = ():void => {
  // explicit type definition 
  let myNickname: 'Tiny'; // - string 
  let myBalance: 9.999; // - number
  
  // explicit type with union
  let ourNicknames: 'Tiny' | 'Ugly' | 'Sharp';
  let ourBalances: 9.999 | 0.23 | 21.1;
  
  // literal types with type assertion 
  type Nickname = 'Tiny' | 'Ugly' | 'Sharp';

  // reassigning literal types
  let hugesNickname: Nickname;
  // hugesNickname = 'Huge' // error - type does not contain 'Huge' 
  hugesNickname = 'Tiny' // ok - type contains 'Tiny'

  // literal type as function param and return type
  
  type returnValues = -1 | 0 | 1;
  const compareStrings = (a: string, b: string): returnValues => {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  console.log('compare strings , return literal type: ', compareStrings('bentley', 'lada'));
}

