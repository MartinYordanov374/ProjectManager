import React, {Component} from 'react'
import '../SCSS/projectsStyling.css'
import NavbarComponents from './Navbar'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillFolderFill, BsTrash, BsCheckBox, BsCheckCircle} from 'react-icons/bs'
import {store} from '/Asiat Yliopistolle/Project Manager/projectmanager/src/Components/BackEnd/store'
import {connect} from 'react-redux'
class Projects extends Component{
    render(){
    const {projects} = this.props;
    const markProjectAsFinished=(project)=>{
        store.dispatch({type: 'finishProject', id: project.id, isFinished: false})
        window.location.reload()
    }
    const deleteProject=(project)=>{
        store.dispatch({type: 'removeProject', id: project.id})
        window.location.reload()
    }
    return (
        <div className='projectsPageContainer'>
            <NavbarComponents/>
            {projects.length > 0 ? 
            <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>
                
               {projects.map(project=>
               <div className='projectContainer'>
                    <BsFillFolderFill className='projectIcon' size={100}/>
                    <BsTrash className='deleteProjectIcon' size={30} onClick={()=>deleteProject(project)}/>    
                    {project.isFinished==false? 
                    <BsCheckBox className='projectFinishedIcon' size={30} onClick={()=>markProjectAsFinished(project)}/>
                    :
                    <BsCheckCircle className='projectFinishedIconDisabled' size={30}/>}
                    <p>{project.projectName}</p>
                    <p>Project Due: {project.projectDeadLine}</p>


                </div>)}
               
                
            </div> 
            :
            <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>
                    <h1 className='noProjectsAlert'>You do not have any projects at the moment</h1>

            </div>
}
        </div>
    )
}
}
const mapStateToProps=(state={projects:[{}]})=>{
    return{
        projects: state.projects
    }
}
export default connect(mapStateToProps)(Projects)

