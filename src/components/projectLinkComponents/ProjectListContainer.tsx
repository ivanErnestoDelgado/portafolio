import type { JSX } from "react";
import style from './projectLink.module.css';

type projectListContainerProps={
    projectList:JSX.Element[];
}

export const ProjectListContainer= ({projectList}:projectListContainerProps) => {
    
    return(
        <div>
            <h4>Proyectos</h4>
            <div className={style.projectListContainer}>
            {projectList}
            </div>
        </div>
    );
};