import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBranch } from '../interfaces/IBranch';

@Injectable()
export class BranchService {

    private branches: IBranch[] = [
        {
           id: 1,
          name: 'Smart Village',
          isDeleted: false,

        },
        {
            id: 2,
            name: 'maadi',
            isDeleted: false,
        },
        {
            id: 3,
            name: 'Naser City',
            isDeleted: false,
        }

    ];

    public getAll(): IBranch[] {
      return this.branches.filter(res => res.isDeleted === false);
    }

    public getById(id: number): IBranch {
        return this.branches.find(i => i.id === id);
    }
    public deletebranch(i: number) {
        this.branches.splice(i, 1);
    }

    public addbranch(v: IBranch) {
        this.branches.push(v);
    }
    public updatebranch(id: number, v: IBranch) {
        const vac = this.branches.find(i => i.id === id);
        vac.name = v.name;

        this.branches.push(vac);
    }

    // public getAll() : IVacancy[]
    // {
    //     return this.vacancies;
    // }

}
