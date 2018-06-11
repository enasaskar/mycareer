import { Injectable } from '@angular/core';
import { Country } from '../classes/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countries : Country[] = [
    {
      name : 'Egypt'
    },
    {
      name : 'USA'
    },
    {
      name : 'Canada'
    }
  ]
constructor() { }

public getAll(){
  return this.countries;
}

}
