import React, { Component } from 'react';
import { userInfo } from 'os';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 15 }
  ]
  return(
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return(
    <div>私の名前は{props.name} 年齢は{props.age}です</div>
  )
}

// const App = () => {
//   return(
//     <div>
//       <User name={"Taro"} age={25} />
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>Hi, I am {props.name}, and{props.age}years old!</div>
// }

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
