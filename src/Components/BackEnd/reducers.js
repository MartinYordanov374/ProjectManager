const reducer=(state={projects:[{}]}, action)=>{
    switch(action.type)
    {
        case 'addProject':
            return{
                ...state,
                projects: [...state.projects, {projectName:action.projectName, projectDeadLine: action.projectDeadLine, id: action.id, isFinished: action.isFinished}]
            }
            case 'removeProject':
                let curProjects = [...state.projects];
                let index = curProjects.findIndex(product=>product.id===action.id)
                if(index>-1){
                   curProjects.splice(index,1)
                }      
                return{
                    ...state,
                    projects: curProjects
                }
            case 'finishProject':
               let findProject = [...state.projects]
               let findProjectIndex = findProject.findIndex(project=>project.id===action.id)
               if(findProjectIndex>-1){
                findProject[findProjectIndex].isFinished = true
            }
            return{
                ...state,
                projects: findProject
            }

                
                
        default:
            return state
    }
}
export default reducer