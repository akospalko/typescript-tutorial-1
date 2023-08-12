// Type Aliases
export const TypeAliases = () => {
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
    let age = 5;
    age = 'five';
    // assign type to interface - error 
    // interface PostID = stringOrNumber; // error - we cannot assign type to an interface 
};
