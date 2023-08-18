//----------Generics----------
export const Generics = ():void => {
  // function without generics
  const stringEcho = (arg: string): string => arg; // this func only works with string type

  // convert func to generic ( thus making it more reusable)
  const echo = <T>(arg: T): T => arg; // T can be substituted with a type

  // apply generic to util function: check if input arg is an obj
  const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null); // check if arg is an object {} && not array && !null
  }

  // check different input values if they are objs or not
  console.log(isObj(true)); // false - boolean type is not an object
  console.log(isObj('John')); // false - is string
  console.log(isObj([1, 2, 3 ])); // false - is an array
  console.log(isObj({name: 'John'})); // true - obj
  console.log(isObj(null)); // false - is null

  // check for different types return obj with type ...
  const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) { // if arg is an arr and arr's length is 0
      return {arg, is: false} 
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) { // if arg is obj and obj's length is 0
      console.log('empty obj')
      return {arg, is: false}
    }
    return {arg, is: !!arg } // handle other types
  }
  
  // check different input values 
  console.log(isTrue(false)); 
  console.log(isTrue(0)); 
  console.log(isTrue(true)); 
  console.log(isTrue(1)); 
  console.log(isTrue('Dave')); 
  console.log(isTrue('')); 
  console.log(isTrue(null)); 
  console.log(isTrue(undefined)); 
  console.log(isTrue({})); 
  console.log(isTrue([])); 
  console.log(isTrue([1, 2, 3])); 
  console.log(isTrue(NaN)); 
  console.log(isTrue(-0)); 

  //----------Generics with Interface----------
  interface CheckBool<T> {
    value: T,
    is: boolean
  }
  // check for different types return obj with an assigned generic type 
  const checkBoolValue = <T>(arg: T): CheckBool<T> => {
    if(Array.isArray(arg) && !arg.length) { // if arg is an arr and arr's length is 0
      return {value: arg, is: false} 
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) { // if arg is obj and obj's length is 0
      console.log('empty obj')
      return {value: arg, is: false}
    }
    return {value: arg, is: !!arg } // handle other types
  }

  //----------Extend generics with interface----------
  // #1 utilize single generics
  // create interface
  interface hasID {
    id: number
  } 

  // create generic function
  const processUser = <T extends hasID>(user: T): T => { // <T extends hasID> - narrow generic type to hasID interface
    // process user logic
    return user; 
  }
  console.log(processUser({id: 1, name: 'FRANK'})) // ok - interface's contract is fulfilled
  // console.log(processUser({name: 'FRANK'})) // error - id prop is missing (it is a must have)


  // #2 utilize double generics
  const getUserProperty = <T extends hasID, K extends keyof T>(users: T[], key: K): T[K][] => { 
    /* NOTE:
      <T extends hasID, ...> - T = user obj with a form of {id: numberType} as it implements the hasID interface
      <..., K extends keyof T> - K store the T obj's keys as string literals (e.g. 'id')
      user: T[] - array of user objs: [{id: 1, ...}, {id: 2, ...}, ...]
      key: K - specified key to access obj prop's value
      T[K][] - func return value -> users' prop values corresponding to a specific key(K) in an array
        T[K] - access T user's K obj using bracket notation
        [] - array (e.g. Type[] - array of Type)  
      */
    // logic
    return users.map(user => user[key]) // return user's value corresponding to the key indexed prop
  }

  // dummy data (json placeholder)
  const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
  ]

  // test out func:
  console.log(getUserProperty(usersArray, 'email')) // ok - ['Sincere@april.biz', 'Shanna@melissa.tv']
  console.log(getUserProperty(usersArray, 'username')) // ok - ['Bret', 'Antonette']
  // console.log(getUserProperty(usersArray, '')) // error 

  // ----------GenericInAClass----------
  class StateObject<T> {
    private data: T

    constructor(value: T) {
      this.data = value
    }

    get state(): T {
      return this.data
    }

    set state(value: T) {
      this.data = value
    }
  }
  
  // inferred generic type (omit <...>) based on provided param: string
  const store = new StateObject("Axe"); // T will be initialized as string, cannot be changed later 
  console.log(store.state) // log getter's result
  store.state = "Dave"
  // store.state = 12 // error - trying to reassign type fails  
  
  // explicit generic type (include <...>) based on provided types
  const myState = new StateObject<(string|number|boolean)[]>([15]) // specify allowed generic types to be an array of str||bool||num
  myState.state = (['Alexa', 42, true]); // ok 
  console.log(myState.state)
}
