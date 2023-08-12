// TS functions
export const Functions = () => {
    console.log('Practicing TS functions:');
    /* NOTE:
    // function declaration - function f() {...}
    // function expression - const f = () => {...}
    */
    // Type expression as parameter
    // func expression as func parameters  
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
};
