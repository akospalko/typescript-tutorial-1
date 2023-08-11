// Primitive types
export const PrimitiveTypes = () => {
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
    // Void
    function noop() {
        return;
    }
    // explicitly typed void
    function noop2() {
        return;
    }
    // type narrowing (strictNullCheck: on) with null / undefined
    const greetPerson = (person) => {
        if (person.name === null || person.name === undefined) {
            return 'Welcome Anonymus!';
        }
        return `Welcome ${person.name}`;
    };
    console.log(greetPerson({ name: 'Andrew', alias: 'Andy' }));
    // handle undefined with union type
    let name = 'Rick';
    name = undefined; // ok - allow undefined, assign default value
    console.log(name);
    // name = null // error - null is not allowed
};
