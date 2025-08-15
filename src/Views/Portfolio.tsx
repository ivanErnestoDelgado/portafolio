import { DataRow,ProfileImage,ProjectListContainer,TextContainer } from "./components";
import { Project } from '../Models';
import style from "./portfolio.module.css";

type appProps={
  projects:Project[];
}

export const Portfolio =({projects}:appProps) => {
  const profileImagePath: string="/profile.jpg" ;

  const schoolData=[
    <DataRow data='Primaria' description='Niños Heroes de Chapultepec'/>,
    <DataRow data='Secundaria' description='Colegio Topolobampo'/>,
    <DataRow data='Preparatoria' description='CONALEP (Profesional Técnico Bachiller en Informática)'/>,
    <DataRow data='Universidad' description='Instituto Tecnologico de Los Mochis (Ingeniería Informática)'/>    
  ]
  
  return (
    <>
    <div className={style.Principal}>
      <div className={style.PortfolioContainer}>
      <ProfileImage imagePath={profileImagePath} alt='Iván Delgado' size={200}/>
      <TextContainer textItems={schoolData}/>
      <ProjectListContainer projectList={projects}/>
      </div>
    </div>      
    </>
  )
}
