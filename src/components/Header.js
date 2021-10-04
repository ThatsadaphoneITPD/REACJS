import PropTypes from 'prop-types'
//bring Button in from Button.file
//put in button inline as <Button/>
import Button from './Button'

//use for class and function
//use 'rfce' to impore fnction header below
//to pass in anything in HeaderofApp.js
//use prop in components as parameter
//props is obj

// const Header = (props) => {
//     return (
//         <header>
//             <h1>Hello Task Tracker</h1>
//             <h1>{props.title}</h1>
//         </header>
        
//     )
// }

//can change both way (props) or ({titlej})
const Header = ({title}) => {
    //declare variable check and funtion onClick inline
    //Function onClick
    const onClick = (e) =>{
        console.log('Click', e);
    }
    //call onClick fucn inline of header
    return (
        <header>
            <h1 style= {{color: 'green', backgroundColor: 'black'}}>Hello Task Tracker with inline sytle</h1>
            <h1 style={HeaderSytle}>{title}</h1>
            <Button color='green' text='Add' onClick= {onClick}/>
            
        </header>    
    )
}
//we can .defaultProps with use title=""in App
//it wil overide it
Header.defaultProps = {
    title: 'Default Header Task',
}
//use propType to create type of str number or boolen
Header.propTypes = {
    title: PropTypes.string.isRequired,
    //title: PropTypes.number,
}
// not create sytle css inline
// let create variable outline
const HeaderSytle = {
    color: 'orange', 
    backgroundColor: 'black'
}
export default Header
