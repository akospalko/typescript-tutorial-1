"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions_1 = require("./Functions");
const ObjectTypes_1 = require("./ObjectTypes");
const PrimitiveTypes_1 = require("./PrimitiveTypes");
const Type_1 = require("./Type");
// INTRO
console.log('Welcome to TS');
// Chapters/Modules
(0, PrimitiveTypes_1.PrimitiveTypes)();
// Object types
(0, ObjectTypes_1.Arrays)();
(0, ObjectTypes_1.Tuples)();
(0, ObjectTypes_1.Objects)();
(0, ObjectTypes_1.Interface)();
(0, ObjectTypes_1.Enum)();
// Functions
(0, Functions_1.Functions)();
// Type
(0, Type_1.Type)();
(0, Type_1.TypeAliases)();
/* Learned about:
  union (|)
  object
  optional property - ?
  type vs interface
  type narrowing
  object types: array type - string[] , (stirng | number)[], enums, tuple,
*/
