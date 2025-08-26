//An enum (enumeration) is a way to give friendly names to sets of numeric or string values.
//used when we have a fixed set of related constants.

//By default, enums start at 0 and increment by 1.
enum Direction {
    Up,  //0
    Down, //1
    Left, //2
    Right //3
}

let move : Direction = Direction.Up;
console.log(move); //0

//we can also manually assign values.
enum Status {
    pending = 1,
    Approved = 2,
    Rejected = 3
}

console.log(Status.Approved);
console.log(Status.Rejected);


