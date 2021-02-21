import React from 'react'
import NavbarComponents from './Navbar'
import {FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import '../SCSS/addProjectStyling.css'
import {BsCaretRightFill} from 'react-icons/bs'
function AddProject() {
    return (
        <div className='formContainer'>
            <Navbar/>
            <div className='formHolder'>
                <FormControl className='addProjectNameForm' placeholder='Enter project name'/>
                <FormControl className='addProjectDeadlineForm' placeholder="Enter project's deadline"/>
                <Button className='addProjectButton'><strong>Add project <BsCaretRightFill size={20}/></strong></Button>
            </div>
        </div>
    )
}

export default AddProject
