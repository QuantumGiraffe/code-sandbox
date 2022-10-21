

import * as React from 'react';
import Header from './components/Header.js'  
import CSS from './App.css'


const App = () => {

  const myList= [
    {
      title: 'Puff',
      author: ' - The Puffins',
    },
    {
      title: 'Muff',
      author: ' - The Muffins',
    },
  ];

  return(
      <div>

        <Header />
        <Search />
        <hr />
        <List thisIsAProp={myList}/>
        {/* We are passing the LIST component a prop called ThisIsAProp. 
            this prop called ThisIsAProp is assigned the value of the array called myList.
            
            All this is doing is passing the information in myList to another component
            (via the React VEHICLE called a PROP!)
            
            ------------------------------------------------------------------------------------
            ***An Idea - to think of a COMPONENT as a "NODE". The information can only pass from 
            Node to Node using the vehicle of a Prop***

            In this case, this is not very complex so it seems like this is a very confusing way to 
            pass around information - that's why it's difficult to understand at first. However, as 
            complexity builds and builds this way actually becomes the much EASIER way to pass 
            around information. 

            This is React's way of passing information from component to component*/}
        
      </div>
    )};

// =======================================

    const List = (props) => (
      // **May not be entirely accurate:**

      // PROPS, the argument above, as well as located in the line below, is like a React SYNTAX
      // These are like the instructions needed to IMPORT a prop. React ALREADY KNOWS what prop is being
      // passed to this component. What is that prop? Why, it's ThisIsAProp, of course!

      // so it's like these two instances of PROPS are just syntax, instructions
      // Essentially, these PROPS don't actually have any VALUES at all, they are just instructions
      // I think that's one place I was getting very confused before!!!!


      <ul>
        {props.thisIsAProp.map((item) => (
          // In the above Line, first remember that ThisIsAProp is equal to the value of myList



          <Item key={item.objectID} item={item} />
          // This is passing a PROP called ITEM to a component also called ITEM. 
          // The value of the ITEM prop is equal to that of the "item" in brackets that
          // We are mapping over. 

        ))}

      </ul>
  );

  // =======================================================

  const Item = (props) => (

    <li>
      
        {/* the Key is now located above, within the instance of the Item component */}
      <span id="title">{props.item.title}</span>
      <span id='author'>{props.item.author}</span>
    </li>

    // The PROPS=SYNTAX analogy really works for my understanding!!!
    // In this case, the ACTUAL prop (thing that has an actual value/information, is ITEM)
    // The PROPS instructions are telling React to get ready and import for use the prop ITEM
  );



  // =======================================================

  const Search = () => {
    const[searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event) => {

      setSearchTerm(event.target.value);

      // This is for browser console testing:---
      // console.log(event);
      // console.log(event.target.value)
    }

    return(
      <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={handleChange} />
      
          {/* This renders out the search term for us to see: */}
          <h2>{searchTerm}</h2>

      </div>
    )
    }



export default App;
// We only need to export the App component since that one already contains the instances 
// of all the other components. The App gets exported to our sole HTML file!

























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
