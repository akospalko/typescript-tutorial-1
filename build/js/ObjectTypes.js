"use strict";
// Object types
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = exports.Interface = exports.Objects = exports.Tuples = exports.Arrays = void 0;
// Arrays 
const Arrays = () => {
    let lettersArr = ['a', 'b', 'c']; // string
    let techsArr = ['JS', 'React', 'TS', 1]; // string | number
    let mixedArr = [1, 'Love', 'TS', true]; // string | number | boolean;
    // reassign arrays
    // lettersArr[0] = 5; // type number -> string - error
    lettersArr[1] = 'Rick'; // ok
    techsArr[0] = 'I'; // string -> number - ok (we can overwrite different types as long as the arr type is included)
    techsArr[0] = 4; // number -> number - ok
    // lettersArr = techsArr // string[] <- (number | string)[] - error 
    techsArr = lettersArr; // (number | string)[] <- string[] - ok 
    // techsArr.unshift(true); // only num | str, no bool - error  
    // techsArr = mixedArr; // only num | string, no bool - error
    mixedArr = techsArr; // accepts num | str | bool - ok
    const bands = [];
    // bands.push(1); // error
    bands.push('The Police'); // ok
};
exports.Arrays = Arrays;
// Tuples 
const Tuples = () => {
    // Tuples - define length in an array and specific order of items 
    let northArrowTuple = ['N', 'E', 'S', 'W', 0];
    let southArrowTuple = ['S', 'W', 'N', 'E', 1];
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
};
exports.Tuples = Tuples;
const Objects = () => {
    // Objects
    // testing object type
    let myObj; // type obj
    myObj = []; // ok - arr is a valid obj type 
    console.log(typeof myObj);
    myObj = {}; // ok - obj literal
    console.log(typeof myObj);
    // obj literal with inferred types
    const exampleObj = {
        prop1: 'name',
        prop2: true
    };
    // reassigning inferred obj literal types 
    exampleObj.prop1 = 'Rick';
    // exampleObj.prop1 = 4; // error - cannot change type inferred on obj/prop init (prop1: 'name' -> string) 
    exampleObj.prop2 = false;
};
exports.Objects = Objects;
// Interface
const Interface = () => {
    const nirvana = {
        // name?: 'Nirvana',
        active: false,
        members: ['Curt', 'Krist', 'Dave'],
    };
    // experiment with type narrowing 
    const greetBand2 = (band) => {
        if (band.name) {
            return `Welcome ${band.name.toUpperCase()}`; // if band instance has name prop
        }
        return 'Welcome unknown artist!'; // name prop is unavailable
    };
    // test out interface and type narrowing 
    console.log(greetBand2(nirvana));
};
exports.Interface = Interface;
// Enum type
const Enum = () => {
    // Enum
    let GeographicDirections;
    (function (GeographicDirections) {
        GeographicDirections["North"] = "0\u00B0";
        GeographicDirections["East"] = "90\u00B0";
        GeographicDirections["South"] = "180\u00B0";
        GeographicDirections["West"] = "270\u00B0";
    })(GeographicDirections || (GeographicDirections = {}));
    const findDirection = (direction) => {
        return `We are heading ${direction}`;
    };
    console.log(findDirection(GeographicDirections.North));
};
exports.Enum = Enum;
