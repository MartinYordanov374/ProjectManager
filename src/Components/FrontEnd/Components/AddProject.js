import React from 'react'
import NavbarComponents from './Navbar'
import {FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import '../SCSS/addProjectStyling.css'
import {BsCaretRightFill} from 'react-icons/bs'
import {store} from '/Asiat Yliopistolle/Project Manager/projectmanager/src/Components/BackEnd/store'
import {connect} from 'react-redux'
import $ from 'jquery'
import {uuid} from 'uuidv4'
function AddProject() {
    const addProject=()=>{
        store.dispatch({type: 'addProject', projectName:$('.addProjectNameForm').val(), projectDeadLine:$('.addProjectDeadlineForm').val(), id: uuid() })
    }
    return (
        <div className='formContainer'>
            <Navbar/>
            <div className='formHolder'>
                <FormControl className='addProjectNameForm' placeholder='Enter project name'/>
                <FormControl className='addProjectDeadlineForm' placeholder="Enter project's deadline"/>
                <Button className='addProjectButton' onClick={()=>addProject()}><strong>Add project <BsCaretRightFill size={20 }/></strong></Button>
            </div>
        </div>
    )
}

const mapStateToProps=(state={projects:[{}]})=>{
    return{
        projects: state.projects
    }
}
export default connect(mapStateToProps)(AddProject)
