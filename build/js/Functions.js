// TS functions
export const Functions = () => {
    console.log('Practicing TS functions:');
    /* NOTE:
    // function declaration - function f() {...}
    // function expression - const f = () => {...}
    */
    // ----------Function type expressions----------
    // func type expression as parameters  
    function greetTheGuest(msgF) {
        msgF('Be welcome, dear guests!');
    }
    // ! importance of including type when declaring func expr param:
    // if you create a param named "string" and omit its type, it results in a param name "string" with inferred type any  
    // function greetTheGuest((string) => void)  {
    //   string();
    // }  
    // log message
    function sayMessage(message) {
        console.log(message);
    }
    // greet the guest 
    greetTheGuest(sayMessage);
    function messengersMessage(msgF, msg) {
        msgF(msg);
    }
    messengersMessage(sayMessage, 'I\'m the messenger and i have a message for you!');
    const add = (x, y) => x + y;
    console.log('call signature:', add(10, 5));
    const subtract = (x, y) => x - y;
    console.log('call signature:', subtract(10, 5));
    function fn(ctor) {
        return new ctor("hello");
    }
    //----------Function return types---------
    // String
    const concatInitials = (a, b) => {
        return a + b;
    };
    console.log(concatInitials('A.', 'P.'));
    // Number
    const sumNum = (a, b) => {
        return a + b;
    };
    // Void
    const logMsg = (msg) => {
        console.log(msg);
    };
    logMsg('HeloBelo');
    logMsg(sumNum(1, 2));
    // logMsg(sumNum('1', 5)) // error - sumNum takes number params, string param is provided
    //----------Functions with optional parameters (?)---------- 
    // error caused by not handled optional parameter
    // const addMultiple = (a: number, b: number, c?: number): number => {
    //   return a + b - c; // error: c - is possibly undefined (because c value is optional and we might not pass any number in place of c)
    // }
    // utilize type guard to handle possible undefined value for c
    const addMultiple = (a, b, c) => {
        if (typeof c !== 'undefined') {
            return a + b - c;
        }
        return a + b; // regardless, we need to return a number 
    };
    console.log(addMultiple(1, 2), // ok - 3
    addMultiple(1, 2, 3) // ok - 6
    );
    // utilize default param values to handle undefined
    const sumAll = (a = 10, b, c = 2) => {
        return a + b + c;
    };
    console.log(sumAll(1, 2), // ok - 5 ->  last param value (c: number = 2) is applied  
    sumAll(undefined, 3) // ok - 15  -> pass undefined to apply default value (a: number = 10), apply 3, apply default value (c: number = 2)  
    // sumAll(3) // error  
    );
    // ----------Rest parameters----------
    const total = (firstNum, ...restNums) => {
        // args: (10,20,30), ...nums: [10,20,20] 
        return firstNum + restNums.reduce((acc, curr) => acc + curr); // Note: the order of passing rest params matters (end) 
    };
    console.log(total(10, 20, 30, 40, 50));
    // TODO----------Generic Functions---------- 
};
