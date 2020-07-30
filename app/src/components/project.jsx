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
        console.log('clickedProject', clickedProject)

        return (
            <div className="each-project">
                <div className="project-intro">
                    <h1>Project: {clickedProject.name}</h1>
                    <p>{clickedProject.description}</p>
                    <img src={clickedProject.image} alt="project-img"/>
                </div>
                <div className="demographic">
                    <p>Tool: {clickedProject.tool}</p>
                    <p>AGE: {clickedProject.demographic.age}</p>
                    <p>DIFFICULTY: {clickedProject.demographic.difficulty} </p>
                    <p>DURATION: {clickedProject.demographic.duration}</p>
                </div>
                <div className="learning">
                    What students will take away:
                    {clickedProject.details.learning.map(point => (
                        <ul>
                           
                            <li>{point}</li>
                        </ul>
                    )
                    )}
                </div>
                <div className="approach">
                    Thought process approach
                    {clickedProject.details.approach.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    )}
                </div>
                <div className="triggering-questions">
                    Triggering questions to ask
                    {clickedProject.details.triggering_questions.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    )}
                </div>
                <div className="key_robotics_components">
                    Key robotics components
                    {clickedProject.details.key_robotics_components.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    )}
                </div>
                <div className="key_programming_concepts">
                    Key programming concepts
                    {clickedProject.details.key_programming_concepts.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    )}
                </div>
                <div className="challenges">
                    Technical challenges:
                    {clickedProject.details.challenges? clickedProject.details.challenges.technical.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    )
                    : null}
                </div>
                <div className="challenges">
                    Building challenges:
                    {clickedProject.details.challenges? clickedProject.details.challenges.assembling.map(point => (
                        <ul>
                            <li>{point}</li>
                        </ul>
                    )
                    ): null}
                </div>
                <div className="resources">
                    Resources
                    {clickedProject.details.resources.map(resource => (
                        <ul>
                            {resource.script}
                            <li><a href={resource.link}>{resource.link}</a></li>
                        </ul>
                    )
                    )}
                </div>
                <div className="codes">
                    Codes for reference
                    {clickedProject.details.codes.map(code => (
                        <ul>
                            {code.note}
                            <img  src={code.url}/>
                        </ul>
                    )
                    )}
                </div>

            </div>
        )

       
    }
} 

export default Project;