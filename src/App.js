

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

function App() {

  
  return (
    
    <div>
      
      <h1>My Stories:</h1>

      < Header />
    

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      {/* this creates a horizontal line to break up page */}

      
      <ul>
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
      </ul>
    </div>
  );
}

export default App;


























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
