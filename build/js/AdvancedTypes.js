// Advanced types
// ----------Literal types----------
export const LiteralType = () => {
    // explicit type definition 
    let myNickname; // - string 
    let myBalance; // - number
    // explicit type with union
    let ourNicknames;
    let ourBalances;
    // reassigning literal types
    let hugesNickname;
    // hugesNickname = 'Huge' // error - type does not contain 'Huge' 
    hugesNickname = 'Tiny'; // ok - type contains 'Tiny'
    const compareStrings = (a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    };
    console.log('compare strings , return literal type: ', compareStrings('bentley', 'lada'));
};
