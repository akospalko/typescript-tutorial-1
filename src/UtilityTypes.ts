console.log('----------Utility Types----------');
//----------Utility types----------
export const UtilityTypes = ():void => {
  /**
  useful for common type transformations - allows us to pass only a part of an obj/interface  
  Required - all type props must be provided
  Readonly - cannot modify prop
  Record - define an obj type with a spec key type and value type { key: value }
  ...
  */
  
  //----------Partial----------
  console.log('----------Partial----------');
  // #1
  interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
  }

  const updateAssignment = (assignObj: Assignment, keyToUpdate: Partial<Assignment>): Assignment => {
    return { ...assignObj, ...keyToUpdate }
  }
  
  const assign1: Assignment = {
    studentId: '1234',
    title: 'Final Projeect',
    grade: 0
  }
  const assignGraded: Assignment = updateAssignment(assign1, { grade: 76 })
  console.log(assignGraded);

  // #2
  type todoType = {
    task: string,
    description: string
  }

  const updateTask = (todoItem: todoType, taskToUpdate: Partial<todoType>): todoType => {
    return { ...todoItem, ...taskToUpdate }
  }

  const todo1 = {
    task: 'to do the shopping',
    description: 'buy melon, joghurt, milk, cereal and ice cream.'
  }

  const todo1Update = {
    description: 'buy beer, salted peanuts, six pack of bubbling water'
  }
  console.log(updateTask(todo1, todo1Update)); // NOTE: todo1Update is utilizing the todoType type, but only partially (we only update the description prop)

  //----------Required----------
  console.log('----------Required----------');
  // #1 
  interface NumberInterface {
    a?: number,
    b?: number
  } 

  const obj1: NumberInterface = { a: 4 }; // ok // NOTE: interface props are optional -> only a single prop is provided
  // const obj2: Required<NumberInterface> = {a: 4} // error // NOTE: even though interface props are optional (a?, b?) Require<> makes it mandatory 
  const obj3: Required<NumberInterface> = {a: 4, b: 5} // ok // all props are provided 

  //----------Readonly----------
  console.log('----------Readonly----------');
  
  interface Todo {
    task: string
  }

  const todo: Readonly<Todo> = { task: 'A must do task. Dont skip it.'}
  // todo.task = { task: 'Let\'s change our task' } // error - cannot reassign task prop
 
  //----------Required & Readonly----------
  console.log('----------Required & Readonly----------');
  const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db, etc.
    return assign
  }

  // create readonly obj with Assignment interface
  const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
  }

  // assignVerified.verified = false // error - only readonly

  // recordAssignment(assignGraded) // error - verified prop is missing
  recordAssignment({ ...assignGraded, verified: true }) // pass missing property (verified: true) separately 

  // ----------Record----------
  console.log('----------Record----------');
  // #1
  // define a record for { string : string } obj type
  const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
  }

  // Record UT with type alias 
  type Students = "Sara" | "Kelly"
  type LetterGrades = "A" | "B" | "C" | "D " | "U"

  const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
    // Josh: "X" // error - defined values are not matching either of Record types (Josh is not included in Student's string literal union, and LetterGrades are not containing X grade) 
  }


  // Record UT with interface
  interface Grades {
    assign1: number,
    assign2: number,
  }
  const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 75, assign2: 10}
  }

  // #2 Map specific keys to values 
  // create record key
  type CatName = "Kitty" | "Boris" | "Mikey"

  // create record type
  interface CatInfo {
    age: number,
    breed: string
  }

  // NOTE: when applying Record<> we must implement all the key values defined in the type union 
  const cat1: Record<CatName, CatInfo> = {
    "Boris" : {
      age: 5,
      breed: 'scottish fold'
    },
    "Kitty": {
      age: 7,
      breed: 'Persian'
    },
    "Mikey": {
      age: 10,
      breed: 'Siamese'
    }
  }

  //----------Pick----------
  console.log('----------Pick----------');
  // #1
  type AssignResult = Pick<Assignment, "studentId" | "grade">

  const score: AssignResult = {
    studentId: "gk10",
    grade: 85, // NOTE: if one of the "picked" props are not inclued in obj init it is going to result in an error
  }
  // #2
  interface TodoI {
    task: string
    description: string
    completed: boolean
  }

  // implement only part of an interface by using pick
  const todo3: Pick<TodoI, "task" | "description" > = {
    task: 'finish ts tutorial chapter: utility type',
    description: 'experiment with all the major utility types used in ts'
  } 

  console.log(todo3) // ok - we picked task and description keys from TodoI and implemented it  

  //----------Omit----------
  console.log('----------Omit----------');
  // #1
  type AssignPreview = Omit<Assignment, "grade" | "verified"> 

  const preview: AssignPreview = {
    // obj init must not contain grad and verified props
    studentId: 'ge123',
    title: "last project",
  }
  // #2
  interface TodoI2 {
    task: string
    description: string
    completed: boolean,
    createdAt: number
  }

  // create type that holds util type definition
  type TodoPreview = Omit<TodoI2, 'description'> // create new type from interface which omits the description prop

  const todo4: TodoPreview = {
    task: 'Clean my room',
    completed: false,
    // description: 'make my bed, sweep and mop the floor, dust my desk', // error - omitted property
    createdAt: 1615544252770
  }

  // create type that holds a union of util type definition
  type TodoInfo = Omit<TodoI2, "completed" | "createdAt"> 

  const todo5: TodoInfo = {
    task: 'Clean my room',
    description: 'make my bed, sweep and mop the floor, dust my desk', // error - omitted property
    // completed: false, // error - omitted prop
    // createdAt: 1615544252770 // error - omitted prop
  }


  //----------Exclude----------
  console.log('----------Exclude----------');
  // they work with string literal union types
  // #1
  type adjustedGrade = Exclude<LetterGrades, "U">  // exclude specific grades from our type; adjustedGrade: A, B, C, D; U is excluded
  
  // #2
  // create type with exclude    
  type FruitCollection = "🍇" | "🍎" | "🫐" | "🍋" // create union 

  const selectRandomFruit:FruitCollection = "🍎" // ok - refer to random fruit

  type MyFruits = Exclude<FruitCollection, "🍎"> // select my fruits (exclude apple)
  // const myApple: MyFruits = "🍎" // error 
  const myGrapes: MyFruits = "🍇" // ok

  console.log(myGrapes)

  //----------Extract----------
  console.log('----------Extract----------');
  // #1
  type highGrades = Extract<LetterGrades, "A" | "B"> // store the listed types: highGrades - A, B 
  // #2
  type VegetablesCollection = "🥒" | "🥔" | "🌶" | "🌽"

  const testCucumber: VegetablesCollection = "🥒";
  // const nonExistentVegetable: VegetablesCollection = "🍎" // error - value is not included in type (its a fruit) 
  
  type ShoppingList = "🥔" | "🌽"
  const vegetableToBuy1: Extract<VegetablesCollection, ShoppingList> = "🥔"
  const vegetableToBuy2: Extract<VegetablesCollection, ShoppingList> = "🌽"
 
  console.log(testCucumber);
  console.log(vegetableToBuy1, vegetableToBuy2);

  //----------NonNullable----------
  console.log('----------NonNullable----------');
  // #1
  type AllPossibleGrades = 'Dave' | 'John' | null | undefined
  type NamesOnly = NonNullable<AllPossibleGrades> // removes nullish values from type // type: Dave, John
  // #2
  type BoxTypes = 'Box1' | undefined | 'Box2' | null | 'Box3';
  type NoEmptyBox = NonNullable<BoxTypes>; // create type for Box 1-4

  const myBox1: NoEmptyBox = 'Box1'; // ok - valid type 
  const myBox2: NoEmptyBox = 'Box2'; // ok
  // const myBox3: NoEmptyBox = undefined; // error - invalid type, NonNullable removed all the undefined/null values

  console.log(myBox1);
  console.log(myBox2);
  // console.log(myBox3);

  //----------Return Type----------
  console.log('----------ReturnType----------');
  // #1
  const createNewAssign = (title: string, points: number) => {
    return {title, points}
  }
  
  type newAssign = ReturnType<typeof createNewAssign>
  console.log(typeof createNewAssign);
  const tsAssign: newAssign = createNewAssign("Utility Types", 100);
  console.log(tsAssign);
  // #2
  // #2.1 original (before implementing ReturnType<>)
  const sendData = (a: number, b: number) => {
    return {
      a: `${a}`,
      b: `${b}`
    }
  }

  // data type
  type Data = {
    a: string
    b: string
  }

  // log data
  let logData = (data: Data) => {
    console.log(JSON.stringify(data))
  }

  const stringifyNumbers = sendData(4, 5);
  logData(stringifyNumbers);

  //#1.2 implementing ReturnType
  type Data2 = ReturnType<typeof sendData> // if typeof sendData is function -> store func return type // instead of setting up a type from scratch we create a type using derived value from functions return type
  logData = (data: Data2) => {
    console.log(JSON.stringify(data));
  }
  logData(stringifyNumbers); // ok - applied ReturnType, simplified it by applying type i  


  //----------Parameters----------
  console.log('----------Parameters----------');
  // #1 
  type AssignParams = Parameters<typeof createNewAssign> 
  const assignArgs: AssignParams = ["Generics", 100]
  const tsAssign2: newAssign = createNewAssign(...assignArgs)
  console.log(tsAssign2);
  // #2
  type MyFunction = (a: number, b: string) => boolean;
  type FunctionInfo = {
    parameters: Parameters<MyFunction>; // returns function parameter types as a tuple 
    returnType: ReturnType<MyFunction>;
  };
  // #3
  const concatVals = (a: string, b: string): string => {
    return a + b; 
  }

  type aType = Parameters<typeof concatVals>[0] // refer to the first param
  type bType = Parameters<typeof concatVals>[1] // second param

  let a:aType = '5' 
  let b:aType = '9'

  concatVals(a, b)

  const myFunctionInfo: FunctionInfo = {
    parameters: [123, "hello"],
    returnType: true,
  };

  //----------InstanceType----------
  // 1
  class Coordinates {
    x: number = 0;
    y: number = 0;
  }

  // store class instance as a type  
  type CoordinatesType = InstanceType<typeof Coordinates>

  // apply class instance type to an obj literal
  const coordinatesObj: CoordinatesType = {
    x: 1,
    y: 2,
    // z: 3 // error - instance type does not have z prop
  } 

  // type T1 = InstanceType<string> // error - <types> should be a constr func / class inst  

  //----------Awaited----------
  interface User {
    id: number,
    name: string,
    username: string,
    email: string
  }

  const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users'
    ).then(res => {
      return res.json()
    }).catch(err => {
      if (err instanceof Error) console.log(err.message)
    })
    return data
  }

  type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
  fetchUsers().then(users => console.log(users))
}