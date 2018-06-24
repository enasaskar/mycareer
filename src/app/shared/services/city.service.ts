import { City } from './../classes/city';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [
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
    },
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
    },
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
  ];
  constructor() { }

  public getAll() {
    return this.cities;
  }
  // to return city object
  public getCityByCountryName(countryName: string) {
    return this.cities.filter(c => c.countryName === countryName);
  }

  public getById(id: number) {
    return this.cities.filter(q => q.id === id)[0];
  }

  // to return city names
  public getByCountryName(co: string) {
    const  c = this.cities.filter(c => c.countryName === co);
    return c.map(a => a.name);
  }

}
