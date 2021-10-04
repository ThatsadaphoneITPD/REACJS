//import Heander from components
import Header from "./components/Header";
//import React of react components
import React from 'react'
//bring Tasks in from Tasks.file
//put in button inline as <Tasks/>
import Tasks from "./components/Tasks";
//use Hook call state
import { useState } from 'react'

//this Belong to Header
function App() {
  const name = "Bee"
  const x = true
  //variable data useState
  const [tasks, setTasks] = useState(
    [
        {
        id: 1, 
        text: 'Doctor call',
        date: 'Feb %th at 3:30 pm',
        reminder: true,
        },
        {
        id: 2, 
        text: 'Sleep',
        date: 'Feb %th at 2:30 pm',
        reminder: false,
        },
        {
        id: 3, 
        text: 'Chexk GF text',
        date: 'Feb %th at 1:30 pm',
        reminder: true,
        },
    ])
    // tasks={tasks} use var data above
  return (
    <div className="container">
      <h1 style={{color: 'red'}}>Hello Form React</h1>
      <h2>Hello FUll ? {name} </h2>
      <h2>Are you okie? {x? 'Yes': 'No'}</h2>
      <br></br>
      <Header />
      <Tasks tasks={tasks}/>
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
