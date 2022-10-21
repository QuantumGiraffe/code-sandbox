

"If an arrow function’s only purpose is to return a value and it doesn’t have any business logic in between, you can remove the block body (curly braces) of the function. In a concise body, an implicit return statement is attached, so you can remove the return statement:"


// with block body

const addOne = (count) => {
  // perform any task in between
return count + 1;
};


// with concise body as multi line

const addOne = (count) =>
  count + 1;


// with concise body as one line

const addOne = (count) => count + 1;


===================================================================================================
BLOCK BODY vs CONCISE BODY

Block Body example: 


const App = () => {
  // perform a task in between

  return (
    <div>
      ...
    </div>


When you need to do things BEFORE the return statement, you will need to use curly braces and a return statement. THIS IS WHY in my code-sandbox, it didn't work without those 2 things - I had 2 more functions stuffed in before the main 'return segment' 



