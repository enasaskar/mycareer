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
