//----------Index Signatures----------
export const IndexSignatures = ():void => {

  interface TransactionI {
    readonly Pizza: number,
    Books: number,
    Job: number,
    [index: string]: number // defined index signature // !NOTE: accessing objs vals dynamically will either be number or undefined (if non existent)
  } 

  const transactionObj: TransactionI = {
    Pizza: -25,
    Books: -12.5,
    Job: 250
  }
  
  const todaysNet = (todaysTransactions: TransactionI): number => {
    let total = 0;
    for(const transaction in todaysTransactions) {
      total += todaysTransactions[transaction]; // dynamically access obj keys
    }
    return total;
  }

  console.log(transactionObj.Books) // ok - access obj prop values using .keyName (dot notation) 
  console.log(transactionObj['Pizza']) // ok - access obj prop values using ['keyName'] (bracket notation)
  console.log(transactionObj['Keyboard']) // undefined - access non existent / dynamic prop values
  console.log(todaysNet(transactionObj)); // ok - returns sum of transactionObj vals

  // transactionObj.Pizza = 30; // error - cannot assign to readonly property
  
}


//----------Keyof operator----------
export const KeyofOperator = (): void => {
  interface Student {
    // [key: string]: number | string | number[] | undefined // define index signautre - if undefined type is not specified, the optional property (classes) will give us an error
    name: string,
    GPA: number,
    classes?: number[]
  }

  const studentObj: Student = {
    name: 'Josh',
    GPA: 3.1,
    classes: [101, 201]
  }

  for(const key in studentObj) {
    console.log(`${key} ${studentObj[key as keyof Student]}`)
  }

  Object.keys(studentObj).map(key => {
    console.log(`${key}: ${studentObj[key as keyof typeof studentObj]}`) // is used to access the value corresponding to the current property name (key) in the studentObj.
  })

  // interface Incomes {
  //   [ index: string ]: number
  // }

  type Streams = 'salary' | 'bonus' | 'sidehustle';
  type Incomes = Record<Streams, string | number> // record utility type - "index signatures" can have only num, string and symbol types opposed to "record utility type" which can work with literal types too (see Streams var) // NOT YET LEARNED

  const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
  }

  for(const income in monthlyIncomes) {
    console.log(monthlyIncomes[income as keyof Incomes])
  }
}