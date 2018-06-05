import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VacancyLevel } from '../classes/vacancyLevel';

@Injectable()
export class VacancyLevelService {

    private vacanciesLevel: VacancyLevel[] = [
        {
           id: 1,
          name: 'Entery Level',
          isDeleted: false,

        },
        {
            id: 2,
            name: 'Mid Level',
            isDeleted: false,
        }
        ,
        {
            id: 3,
            name: 'senior Level',
            isDeleted: false,
        }
        ,
        {
            id: 4,
            name: 'junior Level',
            isDeleted: false,
        }
    ];

    public getAll(): VacancyLevel[] {
      return this.vacanciesLevel.filter(res => res.isDeleted === false);
    }

    public getById(id: number): VacancyLevel {
        return this.vacanciesLevel.find(i => i.id === id);
    }
    public deleteVacancyLevel(i: number) {
        this.vacanciesLevel.splice(i, 1);
    }

    public addVacancyLevel(v: VacancyLevel) {
        this.vacanciesLevel.push(v);
    }
    public updateVacancyLevel(id: number, v: VacancyLevel) {
        const vac = this.vacanciesLevel.find(i => i.id === id);
        vac.name = v.name;

        this.vacanciesLevel.push(vac);
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}
