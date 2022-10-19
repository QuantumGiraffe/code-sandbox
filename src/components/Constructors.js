

// import React from 'react'


function Maker(first, last) {
        this.first = first;
        this.last = last;
    }

const thing1 = new Maker("Joe", "Schmoe")
// the above WORKS, you need "new" in front
const thing2 = new Maker("Sam","Gamjee")
// ^does not work, need to write "new"

// console.log(thing1)
// The above console log is: "Maker { first: 'Joe', last: 'Schmoe' }"

console.log(thing1.first)
// This will log out "Joe" --- cool ! 

console.log(first)
// This logs out an ERROR - "First is not defined"



// function Make(rawmaterial)