import React, {Component} from 'react'
import '../SCSS/projectsStyling.css'
import NavbarComponents from './Navbar'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillFolderFill, BsTrash, BsCheckBox} from 'react-icons/bs'
import {store} from '/Asiat Yliopistolle/Project Manager/projectmanager/src/Components/BackEnd/store'
import {connect} from 'react-redux'
class Projects extends Component{
    render(){
    const {projects} = this.props;
    const markProjectAsFinished=()=>{
        alert('finished')
    }
    const deleteProject=(project)=>{
        store.dispatch({type: 'removeProject', id: project.id})
    }
    return (
        <div className='projectsPageContainer'>
            <NavbarComponents/>
            <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>
               {projects.map(project=>
               <div className='projectContainer'>
                    <BsFillFolderFill className='projectIcon' size={100}/>
                    <BsTrash className='deleteProjectIcon' size={30} onClick={()=>deleteProject(project)}/>    
                    <BsCheckBox className='projectFinishedIcon' size={30} onClick={()=>markProjectAsFinished()}/>
                    <p>{project.projectName}</p>
                    <p>Project Due: {project.projectDeadLine}</p>

                </div>)}
               
                
            </div>
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

