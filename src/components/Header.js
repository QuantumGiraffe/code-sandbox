
// need to come back to this since I think I am forgetting something here 

import React from 'react'

const cat = {
    name: 'Sage',
    occupation: 'Loaf',
    nickname: "Puffins",
}

export default function Header() {

    // const cat = {
    //     name: 'Sage',
    //     occupation: 'loaf',
    //     nickname: "Puffins",
    // }

    function Puffins() {
        return(
            <>
            <span>{cat.name}</span>
            </>
        )
    }

    // In the function, you need to write RETURN to let it know what to list out. Before, I tried to write the following 
    // without putting it in return brackets and it simply would not work 

    return(
    <>
    <h1>What's up with that Peef?</h1>
    <p> You may also know him by the name of: <Puffins /> </p>
    <p> What does he do for a living? {cat.occupation} </p>

    {/* ^^^ two ways to write out attributes! The 2nd one is direct JS and the 1st one is using a React component */}
    <br />
    <br />
    </>

    )
}







// I need to remember how to make a Header component