//Creat variable traks Here
import PropTypes from 'prop-types'

//just data 
//use map to create list 
//use prop {tasks} connect fucn wiht 
const Tasks = ({tasks}) => {
    
    //it won't change bc tasks variable 
    //still be use here
    //so use setTasks for new obj
    return (
        <>
         {tasks.map((task) => (
         <h3 key={task.id}>{task.text}</h3>
         ))}   
        </>
    )
}


export default Tasks
