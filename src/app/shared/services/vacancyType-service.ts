import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VacancyType } from '../classes/VacancyType';

@Injectable()
export class VacancyTypeService {

    private vacanciesType: VacancyType[] = [
        {
           id: 1,
          name: 'Part Time',
          isDeleted: false,

        },
        {
            id: 2,
            name: 'Full Time',
            isDeleted: false,
        }

    ];

    public getAll(): VacancyType[] {
      return this.vacanciesType.filter(res => res.isDeleted === false);
    }

    public getById(id: number): VacancyType {
        return this.vacanciesType.find(i => i.id === id);
    }
    public deleteVacancyType(i: number) {
        this.vacanciesType.splice(i, 1);
    }

    public addVacancyType(v: VacancyType) {
        this.vacanciesType.push(v);
    }
    public updateVacancyType(id: number, v: VacancyType) {
        const vac = this.vacanciesType.find(i => i.id === id);
        vac.name = v.name;
        this.vacanciesType.push(vac);
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}
