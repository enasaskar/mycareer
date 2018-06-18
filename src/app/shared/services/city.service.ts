import { City } from './../classes/city';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities : City[] = [
    {
      name : 'Cairo',
      country : {name : 'Egypt'}
    },
    {
      name : 'Alex',
      country : {name : 'Egypt'}
    },
    {
      name : 'Giza',
      country : {name : 'Egypt'}
    },
    {
      name : 'New York',
      country : {name : 'USA'}
    },
    {
      name : 'Denver',
      country : {name : 'USA'}
    },
    {
      name : 'Paris',
      country : {name : 'France'}
    },
    {
      name : 'Cann',
      country : {name : 'France'}
    }
  ]
constructor() { }

public getAll(){
  return this.cities;
}
public getByCountryName(countryName : string){
  return this.cities.filter(c => c.country.name == countryName);
}


}
