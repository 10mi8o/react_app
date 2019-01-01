import React, { Component } from 'react';

const App = () => {
  return(
    <Cat />
  )
}

const Cat = () => {
  return (
    <div>
      <h1>Meow</h1>
      <h1>Meow</h1>
    </div>
  )
}

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" />
//       </React.Fragment>
//     )
//   }
// }


export default App;
