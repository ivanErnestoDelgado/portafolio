import style from "./projectLink.module.css";

type projectContainerProps={
    projectTitle: string,
    projectDescription:string,
    url:string
}

export const ProjectContainer=({projectTitle,projectDescription, url}:projectContainerProps) => {
    return (
        <a href={url} className={style.projectContainer}>
            <div className={style.projectTitleContainer} >
                <h3>{projectTitle}</h3>
            </div>
            <div className={style.projectDescriptionContainer}>
                <p>{projectDescription}</p>
            </div>
        </a>
            
        
    );
};