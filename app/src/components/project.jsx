import React from 'react';
import '../styles/project.scss';
import '../data/projects'
import { projects } from '../data/projects';

class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const project_id = localStorage.getItem('project_id')
        let clickedProject = {}

        for(let i = 0; i < projects.length; i++){
            if (projects[i].id == project_id){
                console.log('fired')
                clickedProject = projects[i]
            }
        
        }


        return (
            <div>
                <img src={clickedProject.image} alt="project-img"/>
                <p>Project: {clickedProject.name}</p>
                <p>Tool: {clickedProject.tool}</p>
            </div>
        )

       
    }
} 

export default Project;