

import * as React from 'react';
import Header from './components/Header.js'  


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


// The above simulates information that you could get from an API or other information sources
// Below we will see what we can do to present this information 

// function App() {    - this is the original way to write a function 
const App = () => {
// ^^^ This is an arrow function! Apparently, they are good because they can be "used more concisely"
    
  // function List() {
    const List = () => {
      // Since there isn't actually any "business logic" in this function, we can remove the return command
      // We can do this because with arrow functions with no logic necessary, the return is IMPLICIT
      // ****see ArrowFunctions.md for more info**** 
      
    return(
      <ul>
      {/* {list.map(function (item) {            ------ Refactor below */}
      {list.map((item) => {
        return (
          // It is literally just JS mixed with HTML! JS is in brackets, HTML is outside brackets (but always
          // Within "return()" within a function)
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span id='author'>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  )}

  const Search = () => {
    return(
      <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" />
      </div>
    )
  }


  return (
    <div>
      <h2>Unexplained Mysteries:</h2>

      <Header />
    
      <Search />
      {/* <label htmlFor="search">Search: </label>
      <input id="search" type="text" /> */}

      <hr />
      {/* this creates a horizontal line to break up page */}

      {/* we are going to turn the following code into it's own function  */}

      {/* <ul>
        {list.map(function (item) {
          // performs the MAP method on the array LIST ---- I forget but I think that "item" is a prop
          // What ITEM means is that each item in the LIST array is passed through as that variable
          // This makes it possible to apply the below "template" to both objects in LIST
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span id='author'>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul> */}

      <List />

    


    </div>
  );
}







// ^^^^^ WTF is up with that?? when I put the Search function right underneath the List function 
// (but before the App function, it said Search "is defined but not used". Now that it is 
// below the App function it works perfectly, why??? why couldn't it work before? )

// ^^^ This is so strange, before it absolutely would not let me write Search above App. Now it does - 
// I switched it with the List component, had no issues, then when I added it above, still no issues. 
// -------------Maybe that was a bug with VS Code? Very strange!!!!


export default App;

// Item component and Search component are LEAF components (no components come from them (no children))
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     

//      <h1>Hello World!</h1>


//     </div>
//   );
// }

// export default App;
