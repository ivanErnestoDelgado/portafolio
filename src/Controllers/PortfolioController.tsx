import { Portfolio } from '../Views/Portfolio';
import { projects } from "../db/projectsApiCall";
 

export class PortfolioController{
    
  static index= () => {
    const projectsApiResponse=projects;
    return <Portfolio projects={projectsApiResponse}/>
  };
};
