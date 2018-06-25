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
        {
          id : 1,
          name : 'Cairo',
          countryId : 1,
          countryName : 'Egypt'
        },
        {
          id : 2,
          name : 'Alex',
          countryId : 1,
          countryName : 'Egypt'
        },
        {
          id : 3,
          name : 'Giza',
          countryId : 1,
          countryName : 'Egypt'
        }
      ]
    },
    {
      id : 2,
      name : 'USA',
      cities : [
        {
          id : 4,
          name : 'New York',
          countryId : 2,
          countryName : 'USA'
        },
        {
          id : 5,
          name : 'Denver',
          countryId : 2,
          countryName : 'USA'
        }
      ]
    },
    {
      id : 3,
      name : 'France',
      cities : [
        {
          id : 6,
          name : 'Paris',
          countryId : 3,
          countryName : 'France'
        },
        {
          id : 7,
          name : 'Cann',
          countryId : 3,
          countryName : 'France'
        }
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
