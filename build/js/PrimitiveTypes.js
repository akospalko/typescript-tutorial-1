"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveTypes = void 0;
// Primitive types
/*
ellaborate:
  void
  undefined
  null
*/
const PrimitiveTypes = () => {
    let a = 5;
    let b = '6';
    let c = 12;
    console.log(a + b); // '56' - string concat 
    // console.log(a * b); // number * string - error
    // console.log(c / b); // string / number - error
    // string
    let myName = 'Rick';
    // num
    let age = 65;
    // boolean
    let isAlive = true;
    // any
    let anything = 'randomString';
    // union
    let userID = '1550';
    // inferring unknown type: intellisense hint on hover over variable name
    let regexTest = /\w+/g; // regex
    // reassign types
    // myName = 23; // string -> num - error
    anything = 5; // string -> num - ok 
    userID = 1550; // string || num ok
};
exports.PrimitiveTypes = PrimitiveTypes;
