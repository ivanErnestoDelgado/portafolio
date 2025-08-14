import style from './projectLink.module.css';
import type { Project } from "../../Models";
import { ProjectContainer } from './ProjectContainer';

type projectListContainerProps={
    projectList:Project[];
}

export const ProjectListContainer= ({projectList}:projectListContainerProps) => {
    

    const projectContainers= projectList.map(
            (project)=><ProjectContainer projectTitle={project.name} projectDescription={project.description} url={project.url}/>  
            );
    
    return(
        <div>
            <h4>Proyectos</h4>
            <div className={style.projectListContainer}>
            {
                projectContainers
            }
            </div>
        </div>
    );
};