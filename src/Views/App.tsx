import {ProfileImage} from './imageComponents/ProfileImage';
import { DataRow } from "./textComponents/DataRow";
import { TextContainer } from "./textComponents/TextContainer";
import {  ProjectListContainer} from "./projectLinkComponents/ProjectListContainer";
import { Project } from '../Models';

type appProps={
  projects:Project[];
}

export const App =({projects}:appProps) => {
  const profileImagePath: string="/src/assets/images/profile.jpg" ;

  const schoolData=[
    <DataRow data='Primaria' description='Niños Heroes de Chapultepec'/>,
    <DataRow data='Secundaria' description='Colegio Topolobampo'/>,
    <DataRow data='Preparatoria' description='CONALEP'/>,
    <DataRow data='Universidad' description='Instituto tecnologico de Los Mochis'/>    
  ]
  
  return (
    <>
      <ProfileImage imagePath={profileImagePath} alt='Iván Delgado' size={200}/>
      <TextContainer textItems={schoolData}/>
      <ProjectListContainer projectList={projects}/>      
    </>
  )
}

