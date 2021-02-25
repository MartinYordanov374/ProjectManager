import React from 'react'
import NavbarComponents from './Navbar'
import {FormControl, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import '../SCSS/addProjectStyling.css'
import {BsCaretRightFill} from 'react-icons/bs'
import {store} from '/Asiat Yliopistolle/Project Manager/projectmanager/src/Components/BackEnd/store'
import {connect} from 'react-redux'
import $ from 'jquery'
import {uuid} from 'uuidv4'
import Axios from 'axios'
function AddProject() {
    
    const addProject=(project)=>{
        if($('.addProjectNameForm').val().length>0 && $('.addProjectDeadlineForm').val().length>0 ){
             store.dispatch({type: 'addProject', projectName:$('.addProjectNameForm').val(), projectDeadLine:$('.addProjectDeadlineForm').val(), id: uuid(), isFinished: false})
             Axios.post('http://localhost:3307/add', {
                projectName: $('.addProjectNameForm').val(),
                projectDue:$('.addProjectDeadlineForm').val()
             }).then((response)=>{
                 console.log(response)
             })
             window.location.href='/projects'
        }
        else{
             $('.alertWrongData').fadeIn()
        }
    }
    const hideAlert=()=>{
        $('.alertWrongData').fadeOut()

    }


    return (
        <div className='formContainer'>
            <Navbar/>
            <div className='formHolder'>
                <Alert className='alertWrongData alert-danger' onClick={()=>hideAlert()}><strong>Invalid project details!</strong></Alert>
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
