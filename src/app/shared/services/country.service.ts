import { Injectable } from '@angular/core';
import { Country } from '../classes/country';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public onChange = new Subject();

  private countries: Country[] = [
    {
      id : 1,
      name : 'Egypt',
      cities : [
        'Cairo', 'Giza', 'Alex'
      ]
    },
    {
      id : 2,
      name : 'USA',
      cities : [
        'New York', 'Denver'
      ]
    },
    {
      id : 3,
      name : 'France',
      cities : [
        'Paris', 'Cann'
      ]
    }
  ];
constructor() { }

public getAll() {
  return this.countries;
}
public getById(id: number) {
  return this.countries.filter(a => a.id === id)[0];
}

}
