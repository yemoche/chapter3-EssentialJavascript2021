//creating a class for the myTurb object type

 import Turb from "./Turb.js";

const rollsRoyceTurb = new Turb(
    "Rolls-Royce",
    "Bladesysm",
    "1.2",
    'Blue',
    '50',
    '30',
    false
);

const geTurb = new Turb(
    "GE",
    "Axialsym",
    "1.3",
    'Black',
    '60',
    '35',
    true
);


console.log('The turbine name is :' + rollsRoyceTurb.manufacturer);//logs out manufacturer name as Rolls-Royce
console.log('The blade name is :' + rollsRoyceTurb.bladeType); //logs out Rolls-Royce blade name as Bladesysm

console.log('The turbine name is :' + geTurb.manufacturer);//logs out manufacturer name as Rolls-Royce
console.log('The blade name is :' + geTurb.bladeType); //logs out Rolls-Royce blade name as Bladesysm

// Book param order: title, author, ISBN, pubYear, pageNumber, currentPage,
const thinkbig = new Book(
  "Think Big",
  "Ben Carson",
  9780749320706,
  "1995",
  192,
  108,
  "Reading"
)
console.log(thinkBig);

const drivenLife = new Book(
  "Purpose Driven Life",
  "Rick Warren",
  9780310337508,
  "2013",
  30,
  30,
  "Finished"
)
console.log(drivenLife);


