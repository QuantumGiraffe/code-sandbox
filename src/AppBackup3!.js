

import * as React from 'react';
import Header from './components/Header.js'  





const App = () => {
//  -----------------------------------------------------

  const myList= [
    {
      title: 'Puff',
      url: 'https://reactjs.org/',
      author: '_Puffin',
      num_comments: 4,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Muff',
      url: 'https://redux.js.org/',
      author: '_Muffin',
      num_comments: 9,
      points: 9,
      objectID: 1,
    },
  ];

// ------------------------------------------------------
return(
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

     
      <List thisIsAProp={myList}/>
      {/* thisIsAProp ~IS~ a prop!!! */}
      {/* We are setting the prop to equal "myList" */}
      {/* By writing it like this, inside the instantiation of the component LIST, 
      we are passing the prop  */}
      
    </div>
  )};


// =======================================

    const List = (props) => (

      <ul>

      {props.thisIsAProp.map((item) => (
        // ^^^ Before, it looked list this when passing the list directly:
        //       {myList.map((item) => {

      <Item key={item.objectID} item={item} />
      ))}

    </ul>
  );

  // =======================================================

  const Item = (props) => (

    // <li key={props.item.objectID}> --- we can take the Key out here, because we put it directly 
    // in the Item component instantiation above! (this: <Item key={item.objectID} item={item} />)
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span id='author'>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>

    
  );



  // =======================================================

  const Search = () => {

    const handleChange = (event) => {
      console.log(event);
      console.log(event.target.value)
    }
  // ^^This is called an event handler function 

    return(
      <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={handleChange} />
          {/* onChange is a JSX attribute! */}
          {/* DO NOT WRITE: onChange={handleChange()} -- NO NEED FOR MORE BRACKETS */}

          {/* onBlur is another JSX attribute - when the mouse clicks off (unselects) something, 
          will fire */}
      </div>
    )
    }

// =========================================================


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
