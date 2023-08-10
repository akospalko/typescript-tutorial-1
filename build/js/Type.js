"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAliases = exports.Type = void 0;
// Type
const Type = () => {
    let thepolice = {
        name: 'The Police',
        active: false,
        albums: ['Synchronicity', 'Ghost in the machine', 24]
    };
    // test optional property
    let thebeatles = {
        name: 'The Beatles',
        // active: false, // we can omit active as it is optional
        albums: [51, 'A Hard Day\'s Night', 'Let It Be']
    };
    // add non existing property to obj with type annotation
    // thepolice.members = ['Sting', 'Andy Summers']; // error, no such prop type  
    // assign objs
    // thepolice = thebeatles; // ok
    // thepolice = exampleObj; // error - exampleObj is missing mandatory prop types: name, albums  
    // function parameter with type annotation
    let greetBand = (band) => {
        return `Let's welcome ${band.name}!`;
    };
    console.log(greetBand(thebeatles));
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
exports.Type = Type;
// Type Aliases
const TypeAliases = () => {
};
exports.TypeAliases = TypeAliases;
