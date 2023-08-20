//----------Utility types----------
export const UtilityTypes = ():void => {
  /**
  useful for common type transformations - allows us to pass only a part of an obj/interface  
  Partial - makes all props of a type optional -> useful when you need to create only a subset of the props of an existing style 
  Required - all type props must be provided
  Readonly - cannot modify prop
  Record - define an obj type with a spec key type and value type { key: value }
  ...
  */
  
  //----------Partial----------
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

  //----------Required & Readonly----------
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
  // define a record for obj literal { red: "ff0000" }
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

  //----------Pick & Omit----------
  // NOTE: Pick and Omit works with an interface
  type AssignResult = Pick<Assignment, "studentId" | "grade">

  const score: AssignResult = {
    studentId: "gk10",
    grade: 85, // NOTE: if one of the "picked" props are not inclued in obj init it is going to result in an error
  }

  type AssignPreview = Omit<Assignment, "grade" | "verified"> 

  const preview: AssignPreview = {
    // obj init must not contain grad and verified props
    studentId: 'ge123',
    title: "last project",
  }

  //----------Exclude and Extract----------
  // they work with string literal union types
  type adjustedGrade = Exclude<LetterGrades, "U">  // exclude specific grades from our type; adjustedGrade: A, B, C, D; U is excluded
  type highGrades = Extract<LetterGrades, "A" | "B"> // store the listed types: highGrades - A, B 

  //----------Non Nullable----------
  type AllPossibleGrades = 'Dave' | 'John' | null | undefined
  type NamesOnly = NonNullable<AllPossibleGrades> // removes nullish values from type // type: Dave, John

  //----------Return Type----------
  // type newAssign = {title: string, points: number}

  const createNewAssign = (title: string, points: number) => {
    return {title, points}
  }
  
  type newAssign = ReturnType<typeof createNewAssign>
  const tsAssign: newAssign = createNewAssign("Utility Types", 100);
  console.log(tsAssign);
  
  //----------Parameters----------
  type AssignParams = Parameters<typeof createNewAssign> 
  const assignArgs: AssignParams = ["Generics", 100]
  const tsAssign2: newAssign = createNewAssign(...assignArgs)
  console.log(tsAssign2);
  
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
