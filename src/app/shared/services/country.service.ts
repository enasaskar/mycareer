import { Injectable } from '@angular/core';
import { Country } from '../classes/country';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public onChange = new Subject();

  private countries : Country[] = [
    {
      name : 'Egypt'
    },
    {
      name : 'USA'
    },
    {
      name : 'France'
    }
  ]
constructor() { }

public getAll(){
  return this.countries;
}

}
