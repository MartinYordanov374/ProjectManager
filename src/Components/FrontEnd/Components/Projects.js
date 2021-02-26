import React, {Component} from 'react'
import '../SCSS/projectsStyling.css'
import NavbarComponents from './Navbar'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillFolderFill, BsTrash, BsCheckBox, BsCheckCircle} from 'react-icons/bs'
import {store} from '/Asiat Yliopistolle/Project Manager/projectmanager/src/Components/BackEnd/store'
import {connect} from 'react-redux'
import Axios from 'axios'
class Projects extends Component{
    
    constructor(props){
        super(props);
        this.state = {queriedProjects: []}
    }
    componentDidMount(){
        Axios.post('http://localhost:3307/getProjects')
        .then((response)=>{
            this.setState({queriedProjects: response.data})
        }).catch(function(err){
            console.log('An error occured', err)
        })
    }
    render(){
    const {projects} = this.props;
    
    const markProjectAsFinished=(project)=>{
        store.dispatch({type: 'finishProject', id: project.id, isFinished: 0})
        Axios.post('http://localhost:3307/finishProject',{
            projectID: project.id
        }).then((response)=>{
            console.log(response)
        })
        window.location.reload()
    }
    const deleteProject=(project)=>{
        store.dispatch({type: 'removeProject', id: project.id})
        Axios.post('http://localhost:3307/delete',{
            projectID: project.id
        }).then((response)=>{
            console.log(response)
        })
        window.location.reload()
    }

    return (
        <div className='projectsPageContainer'>
            <NavbarComponents/>
            {projects.length > 0 ? 
                <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>

                {this.state.queriedProjects.map(project=>
                <div className='projectContainer'>
                        <BsFillFolderFill className='projectIcon' size={100}/>
                        <BsTrash className='deleteProjectIcon' size={30} onClick={()=>deleteProject(project)}/>    
                        {project.isFinished==1? 
                        <BsCheckBox className='projectFinishedIcon' size={30} onClick={()=>markProjectAsFinished(project)}/>
                        :
                        <BsCheckCircle className='projectFinishedIconDisabled' size={30}/>}
                        <p>{project.name}</p>
                        <p>Project Due: {project.Due}</p>
                        
                    </div>)}
                
                    
                </div> 
                :
                <div className='projectsListContainer col-sm-12 col-md-12 col-lg-12'>
                        <h1 className='noProjectsAlert'>You do not have any projects at the moment</h1>

                </div>
            }
            <div>
                
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

