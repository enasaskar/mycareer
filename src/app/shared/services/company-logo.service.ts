import { Injectable } from '@angular/core';
import { ILogo } from 'src/app/shared/interfaces/ILogo';

@Injectable({
  providedIn: 'root'
})
export class CompanyLogoService {

  private logos: ILogo[] = [{
    id: 1,
    icon:"../../assets/img/logos/logo-1.png",
    isDeleted:false
  },
  {
    id: 2,
    icon:"../../assets/img/logos/logo-2.png",
    isDeleted:false
  },
  {
    id: 3,
    icon:"../../assets/img/logos/logo-3.png",
    isDeleted:false
  },
  {
    id: 4,
    icon:"../../assets/img/logos/logo-4.png",
    isDeleted:false
  },
  {
    id: 5,
    icon:"../../assets/img/logos/logo-5.png",
    isDeleted:false
  },
  {
    id: 6,
    icon:"../../assets/img/logos/logo-6.png",
    isDeleted:false
  },
  {
    id: 7,
    icon:"../../assets/img/logos/logo-5.png",
    isDeleted:false
  },
  {
    id: 8,
    icon:"../../assets/img/logos/logo-4.png",
    isDeleted:false
  },
  {
    id: 9,
    icon:"../../assets/img/logos/logo-3.png",
    isDeleted:false
  },
  {
    id: 10,
    icon:"../../assets/img/logos/logo-2.png",
    isDeleted:false
  },
  {
    id: 11,
    icon:"../../assets/img/logos/logo-1.png",
    isDeleted:false
  },
{
  id: 12,
  icon:"../../assets/img/logos/logo-6.png",
  isDeleted:false
}
]
  constructor() { }
  public getAll() :ILogo[]{
  return this.logos.filter(i=>i.isDeleted==false);
  }
  public Add(item:ILogo){
    this.logos.push(item);
  }
  public update(id:number,newitem:ILogo){
    this.logos[id]=newitem;
  }
  public delete(id:number){
    this.logos.find(i=>i.id==id).isDeleted=true;
  }
}
