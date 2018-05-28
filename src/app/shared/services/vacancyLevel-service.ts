import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IVacancyLevel } from '../interfaces/IVacancyLevel';

@Injectable()
export class VacancyLevelService {

    private vacanciesLevel :IVacancyLevel[]=[
        {
           id: 1,
          name:"Entery Level",
          isDeleted: false,

        },
        {
            id: 2,
            name:"Mid Level",
            isDeleted: false,
        }
        ,
        {
            id: 3,
            name:"senior Level",
            isDeleted: false,
        }
        ,
        {
            id: 4,
            name:"junior Level",
            isDeleted: false,
        }
    ]
    
    public getAll():IVacancyLevel[]
    {
      return this.vacanciesLevel.filter(res=>res.isDeleted==false);
    }
 
    public getById(id: number): IVacancyLevel {
        return this.vacanciesLevel.find(i => i.id === id);
    }
    public deleteVacancyLevel(i: number) {
        this.vacanciesLevel.splice(i, 1);
    }

    public addVacancyLevel(v:IVacancyLevel){
        this.vacanciesLevel.push(v);
    }
    public updateVacancyLevel(id:number,v:IVacancyLevel){
        let vac= this.vacanciesLevel.find(i=>i.id==id)
        vac.name=v.name;
       
        this.vacanciesLevel.push(vac)
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}