import React from 'react';
import {projects} from '../data/projects';
import '../styles/projects.scss'

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleClick(id){
        localStorage.setItem('project_id', id)
        this.props.history.push('/details')
    }

    render(){
        return (
            <div className="project-grid">
                {projects.map(project => (
                    <div className="project-card" onClick={() => this.handleClick(project.id)}>
                        <img src={project.image} alt="project-img"/>
                        <p>Project: {project.name}</p>
                        <p>Tool: {project.tool}</p>
                    </div>
                ))}
            </div>
        )
    }
} 

export default Projects;