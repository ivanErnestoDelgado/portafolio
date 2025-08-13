import {ProfileImage} from './components/imageComponents/ProfileImage';
import { DataRow } from "./components/textComponents/DataRow";
import { TextContainer } from "./components/textComponents/TextContainer";
import {  ProjectContainer } from "./components/projectLinkComponents/ProjectContainer";
import {  ProjectListContainer} from "./components/projectLinkComponents/ProjectListContainer";


export const App =() => {
  let profileImagePath: string="/src/assets/images/profile.jpg";

  const schoolData=[
    <DataRow data='Primaria' description='Niños Heroes de Chapultepec'/>,
    <DataRow data='Secundaria' description='Colegio Topolobampo'/>,
    <DataRow data='Preparatoria' description='CONALEP'/>,
    <DataRow data='Universidad' description='Instituto tecnologico de Los Mochis'/>    
  ]

  const projectData=[
    <ProjectContainer projectTitle='Task Manager' url='https://github.com/ivanErnestoDelgado/TaskProjectBackend' projectDescription='Una API rest de un gestor de tareas hecha con Express.js'/>,
    <ProjectContainer projectTitle='Michican' url='https://github.com/ivanErnestoDelgado/Michican' projectDescription='Una pagina web de una veterinaria diseñada en JSP'/>,
    <ProjectContainer projectTitle='GrowSmart API' url='https://github.com/ivanErnestoDelgado/GrowSmartServidor' projectDescription='Una API rest hecha en Django para el control de datos de riego de diferentes macetas'/>,
    <ProjectContainer projectTitle='Loco Momo' url='https://github.com/ivanErnestoDelgado/LocoMomo' projectDescription='Un proyecto en C# que consiste en recrear el juego de mesa Loco Momo'/>
    
  ]
  return (
    <>
      <ProfileImage imagePath={profileImagePath} alt='Iván Delgado' size={200}/>
      <TextContainer textItems={schoolData}/>
      <ProjectListContainer projectList={projectData}/>      
    </>
  )
}

