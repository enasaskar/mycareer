import { Injectable } from '@angular/core';
import { IService } from 'src/app/shared/interfaces/IService';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private services: IService[] = [{
    id: 1,
    icon: " fa  fa-child",
    link: "Find Available Vacancies",
    isDeleted:false, 
    color:"featured-box-primary"
       
  },
  {
    id: 2,
    icon: "fa fa-building",
    link: "Know More About Companies",
    isDeleted:false,
    color:"featured-box-secundary"
     
    
  },
  {
    id: 3,
    icon: "fa  fa-briefcase",
    link: "Find Your Career Paths",
    isDeleted:false,
    color:"featured-box-tertiary"
  }
  ,
  {
    id: 4,
    icon: "fa  fa-calendar",
    link: "Find Job Fairs Near You",
    isDeleted:false,
    color:"featured-box-quartenary"
  }]
  constructor() { }
  public getAll(): IService[] {
    return this.services.filter(i=>i.isDeleted==false);
  }
  public Add(item:IService){
    this.services.push(item);
  }
  public update(id:number,newitem:IService){
    this.services[id]=newitem;
  }
  public delete(id:number){
    this.services.find(i=>i.id==id).isDeleted=true;
  }
}
