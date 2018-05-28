import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IVacancyType } from '../interfaces/IVacancyType';

@Injectable()
export class VacancyTypeService {

    private vacanciesType :IVacancyType[]=[
        {
           id: 1,
          name:"Part Time",
          isDeleted: false,

        },
        {
            id: 2,
            name:"Full Time",
            isDeleted: false,
        }

    ]
    
    public getAll():IVacancyType[]
    {
      return this.vacanciesType.filter(res=>res.isDeleted==false);
    }
 
    public getById(id: number): IVacancyType {
        return this.vacanciesType.find(i => i.id === id);
    }
    public deleteVacancyType(i: number) {
        this.vacanciesType.splice(i, 1);
    }

    public addVacancyType(v:IVacancyType){
        this.vacanciesType.push(v);
    }
    public updateVacancyType(id:number,v:IVacancyType){
        let vac= this.vacanciesType.find(i=>i.id==id)
        vac.name=v.name;
       
        this.vacanciesType.push(vac)
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}