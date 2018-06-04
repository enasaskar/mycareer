import { Injectable } from '@angular/core';
import { IOffer } from 'src/app/shared/interfaces/IOffer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private offers: IOffer[] = [{
    id: 1,
    icon:"../../assets/img/logos/logo-1.png",
    descriptionA:"FrontEnd",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    

  },
  {
    id: 2,
    icon:"../../assets/img/logos/logo-2.png",
    descriptionA:"DigitalDesigner",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    
  },
  {
    id: 3,
    icon:"../../assets/img/logos/logo-3.png",
    descriptionA:"Front-End Developer",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    
  },
  {
    id: 4,
    icon:"../../assets/img/logos/logo-4.png",
    descriptionA:"Game-Developer",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    
  },
  {
    id: 5,
    icon:"../../assets/img/logos/logo-5.png",
    descriptionA:"FullStack-Developer",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    
  },
  {
    id: 6,
    icon:"../../assets/img/logos/logo-6.png",
    descriptionA:"CRM",
    descriptionB:"Graphics, Cairo, Egypt",
    isDeleted:false
    
  }]
 
  constructor() { }
  public getAll(): IOffer[] {
  return this.offers.filter(i=>i.isDeleted==false);
    
}
public Add(item:IOffer){
  this.offers.push(item);
}
public update(id:number,newitem:IOffer){
  this.offers[id]=newitem;
}
public delete(id:number){
  this.offers.find(i=>i.id==id).isDeleted=true;
}
}