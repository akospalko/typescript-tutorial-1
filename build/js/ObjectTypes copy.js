// Object types
// ----------Arrays: type[] || Array<type>----------
export const Arrays = () => {
    let lettersArr = ['a', 'b', 'c']; // string
    let stringArr = ['another', 'way', 'to', 'annotate', 'array', 'type'];
    let techsArr = ['JS', 'React', 'TS', 1]; // string | number
    let mixedArr = [1, 'Love', 'TS', true]; // string | number | boolean;
    // lettersArr[0] = 5; // error - type number -> string 
    stringArr = ['reassign', 'whole', 'array'];
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
// ----------Tuples---------- 
export const Tuples = () => {
    // tuples - define length in an array and specific order of items 
    let northArrowTuple = ['N', 'E', 'S', 'W', 0];
    let southArrowTuple = ['S', 'W', 'N', 'E', 1];
    // let southArrowTupleShort: [string, string, string, string] = ['S', 'W', 'N', 'E', 1]; // error - initializer value does not match tuple type  
    // assign tuple to a mixed array and vice versa
    let mixedArr = [1, 'two', 3, 'four'];
    mixedArr = northArrowTuple; // ok - northArrowTuple is a valid array of strs and nums
    // northArrowTuple = mixedArr; // error  
    // assign tuple to tuple
    southArrowTuple = southArrowTuple; // ok - both tuples have the same type definition
    // southArrowTuple = southArrowTupleShort; // error - tuple types are not matching 
    // reassign tuple items
    // northArrowTuple[0] = 0; // error - item[0] only accepts string as value
    northArrowTuple[0] = 'S'; // ok
    // reference out of bounds tuple items
    // northArrowTuple[5] = 0; // error - item at [5] is undefined
};
// ----------Objects----------
export const Objects = () => {
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
// ----------Interface----------
export const Interface = () => {
    const nirvana = {
        // name?: 'Nirvana', // ok - optional parameter
        active: false,
        members: ['Curt', 'Krist', 'Dave'],
    };
    // experiment with type narrowing 
    const greetBand = (band) => {
        if (band.name) {
            return `Welcome ${band.name.toUpperCase()}`; // if band instance has name prop
        }
        return 'Welcome unknown artist!'; // name prop is unavailable
    };
    // test out interface and type narrowing 
    console.log(greetBand(nirvana));
    const printEmployee = (employee) => {
        return `Employee ID: ${employee.employeeId} }, age: ${employee.age}`;
    };
    printEmployee({ firstName: 'Joe', lastName: 'Moe', age: 50, employeeId: 1512 });
    // TODO: Class Implementation:
    // class FullTimeEmployee implements Employee {
    //   // Implement properties and methods here
    // }
    // Type Annotations and Interface usage
    function printPerson(person) {
        console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
    }
    printPerson({ firstName: 'Joe', lastName: 'Moe', age: 35 });
    let modifyPoint = {
        x: 10,
        y: 25
    };
    // modifyPoint.x = 25; // error - cannot modify readonly props
    modifyPoint.y = 30; // ok
    // the interface already specifies the types so it is not necessary to explicitly describe it like below
    const add = (x, y) => {
        // return `result: ${x + y}` // error - string
        return x + y; // returns a number
    };
    // inferred types 
    const subtract = (x, y) => {
        return x - y;
    };
    const multiply = (x, y) => {
        return x * y;
    };
    const divide = (x, y) => {
        return x / y;
    };
    const operationValues = { x: 10, y: 2 };
    console.log('add', add(operationValues.x, operationValues.y), 'subtract', subtract(operationValues.x, operationValues.y), 'multiply', multiply(operationValues.x, operationValues.y), 'divide', divide(operationValues.x, operationValues.y));
};
// ----------Enum----------
export const Enum = () => {
    // Numeric enums - inferred num value (start from 0), incrementing  
    // infered values to enum members 
    let GraphicsSettings;
    (function (GraphicsSettings) {
        GraphicsSettings[GraphicsSettings["Low"] = 0] = "Low";
        GraphicsSettings[GraphicsSettings["Medium"] = 1] = "Medium";
        GraphicsSettings[GraphicsSettings["High"] = 2] = "High";
        GraphicsSettings[GraphicsSettings["VeryHigh"] = 3] = "VeryHigh"; // 3
    })(GraphicsSettings || (GraphicsSettings = {}));
    console.log(GraphicsSettings.Low, GraphicsSettings.VeryHigh);
    // explicitly define first, infer other enum member values
    let CountEnum;
    (function (CountEnum) {
        CountEnum[CountEnum["one"] = 1] = "one";
        CountEnum[CountEnum["two"] = 2] = "two";
        CountEnum[CountEnum["three"] = 3] = "three";
        CountEnum[CountEnum["four"] = 4] = "four"; // 4
    })(CountEnum || (CountEnum = {}));
    // utilize single enum item 
    const selectNum = (numbers) => {
        return `selected num is: ${numbers}`;
    };
    console.log(selectNum(CountEnum.one));
    // utilize all items in enum 
    const countTo4 = (numbers) => {
        numbers.forEach(item => {
            console.log(item);
        });
    };
    const numbersToIncludeInCounting = [CountEnum.one, CountEnum.two, CountEnum.three, CountEnum.four];
    countTo4(numbersToIncludeInCounting);
    // String enums - no auto increment
    // explicitly assign values to enum members 
    let GeographicDirections;
    (function (GeographicDirections) {
        GeographicDirections["North"] = "0\u00B0";
        GeographicDirections["East"] = "90\u00B0";
        GeographicDirections["South"] = "180\u00B0";
        GeographicDirections["West"] = "270\u00B0";
    })(GeographicDirections || (GeographicDirections = {}));
    // enum member as type annotation to func param
    const findDirection = (direction) => {
        return `We are heading ${direction}`;
    };
    console.log(findDirection(GeographicDirections.South));
    // return a specific enum member
    const getNorth = (directions) => {
        return `North is this way: ${directions.North}`;
    };
    console.log(getNorth(GeographicDirections));
    console.log('computedValue: ', 3 /* computedEnum.sumOneTwo */);
    // Enum Member Types - access enum members as both types and values 
    let enumTypesAndValues;
    (function (enumTypesAndValues) {
        enumTypesAndValues[enumTypesAndValues["yes"] = 1] = "yes";
        enumTypesAndValues[enumTypesAndValues["no"] = 0] = "no"; // no - 0
    })(enumTypesAndValues || (enumTypesAndValues = {}));
    const storeType = enumTypesAndValues;
    const storeValue = enumTypesAndValues.yes;
    console.log(storeType); // value - 1
    console.log(storeValue); // type - {0: 'no', 1: 'yes', yes: 1, no: 0} - When TypeScript compiles this enum to JavaScript, it generates an object where each enum member is mapped to its value and vice versa. This allows you to look up the value of an enum member using its name and vice versa.
    // Reverse Mapping - Numeric enums have reverse mappings, which allow you to get the enum member name from its value.
    let Status;
    (function (Status) {
        Status[Status["Active"] = 0] = "Active";
        Status[Status["Inactive"] = 1] = "Inactive";
        Status["Default"] = "default"; // str 
    })(Status || (Status = {}));
    let statusName = Status[0]; // "Active" - Status at index 0 (only num type can serve as index [0])
    console.log('reverse mapping numeric enum:', statusName);
    // console.log('reverse mapping numeric enum:', Status['default']); // error - only works with num types  
    // Enum as object - acces enum's like obj values
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    let colorValue = Color.Red; // 0
    let colorName = Color[0]; // "Red"
    // Constant Value Checking: Enums provide a way to define a limited set of valid values for a variable.
    let Size;
    (function (Size) {
        Size[Size["Small"] = 0] = "Small";
        Size[Size["Medium"] = 1] = "Medium";
        Size[Size["Large"] = 2] = "Large";
    })(Size || (Size = {}));
    function chooseSize(size) {
        // ...
    }
    chooseSize(Size.Medium);
    // Enum Declaration Merging: Enums can be extended using declaration merging to add more members.
    let Fruit;
    (function (Fruit) {
        Fruit[Fruit["Apple"] = 1] = "Apple";
        Fruit[Fruit["Banana"] = 2] = "Banana";
    })(Fruit || (Fruit = {}));
    (function (Fruit) {
        Fruit[Fruit["Orange"] = 0] = "Orange";
        Fruit[Fruit["Mango"] = 1] = "Mango";
    })(Fruit || (Fruit = {}));
};
