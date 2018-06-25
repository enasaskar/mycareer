import { Injectable } from '@angular/core';
import { IRate } from 'src/app/shared/interfaces/IRate';

@Injectable({
  providedIn: 'root'
})
export class RateService {
   private rates: IRate[] = [{
    id: 1,
    icon:"fa fa-building",
    rate:1000,
    label:"Available Companies and Schools",
    isDeleted:false
  },
  {
    id: 2,
    icon:"fa fa-users",
    rate:13000,
    label:"Accepted Applicants",
    isDeleted:false
  },
  {
    id: 3,
    icon:"fa fa-briefcase",
    rate:15000,
    label:"Available Vacancies",
    isDeleted:false
  }] 
  

  constructor() { }
  public getAll(): IRate[] {
    return this.rates.filter(i=>i.isDeleted==false);
      
  }
  public Add(item:IRate){
    this.rates.push(item);
  }
  public update(id:number,newitem:IRate){
    this.rates[id]=newitem;
  }
  public delete(id:number){
    this.rates.find(i=>i.id==id).isDeleted=true;
  }
  }

