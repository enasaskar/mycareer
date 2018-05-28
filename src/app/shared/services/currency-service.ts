import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICurrency } from '../interfaces/ICurrency';

@Injectable()
export class CurrencyService {

    private currencies: ICurrency[] = [
        {
            id: 1,
            name: "Le",
            isDeleted: false,

        },
        {
            id: 2,
            name: "EUR",
            isDeleted: false,
        }

    ]

    public getAll(): ICurrency[] {
        return this.currencies.filter(res => res.isDeleted == false);
    }

    public getById(id: number): ICurrency {
        return this.currencies.find(i => i.id === id);
    }
    public deleteCurrency(i: number) {
        this.currencies.splice(i, 1);
    }

    public addCurrency(v: ICurrency) {
        this.currencies.push(v);
    }
    public updateCurrenct(id: number, v: ICurrency) {
        let vac = this.currencies.find(i => i.id == id)
        vac.name = v.name;
        this.currencies.push(vac)
    }

  

}