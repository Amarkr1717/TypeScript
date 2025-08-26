//An enum (enumeration) is a way to give friendly names to sets of numeric or string values.
//used when we have a fixed set of related constants.
//By default, enums start at 0 and increment by 1.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); //0
//we can also manually assign values.
var Status;
(function (Status) {
    Status[Status["pending"] = 1] = "pending";
    Status[Status["Approved"] = 2] = "Approved";
    Status[Status["Rejected"] = 3] = "Rejected";
})(Status || (Status = {}));
console.log(Status.Approved);
console.log(Status.Rejected);
