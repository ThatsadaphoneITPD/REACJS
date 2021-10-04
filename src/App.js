//import Heander from components
import Header from "./components/Header";
//import React of react components
import React from 'react'

//this Belong to Header
function App() {
  const name = "Bee"
  const x = true
  return (
    <div className="container">
      <h1 style={{color: 'red'}}>Hello Form React</h1>
      <h2>Hello FUll ? {name} </h2>
      <h2>Are you okie? {x? 'Yes': 'No'}</h2>
      <br></br>
      <Header />
    </div>  
  );
}

//other function of class 
//use class and call name App for using reder

// class App extends React.Component{
//   render(){
//     return <h1>Hello Class App React</h1>
//   }
// }

export default App;
