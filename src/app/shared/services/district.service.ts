import { Injectable } from '@angular/core';
import { District } from '../classes/district';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private districts = [
    new District(1, 'Heliopolis', 'Cairo', 1),
    new District (2, 'Nasr City', 'Cairo', 1),
    new District (3, 'Bahary', 'Alex', 2),
    new District (4, 'Borg El Arab' , 'Alex', 2),
    new District (5, 'El-Sheikh Zayed', 'Giza', 3),
    new District (6, 'El-Marg', 'Cairo', 1),
    new District (7, 'Shobra', 'Cairo', 1),
    new District (8, 'El-Sheikh Zayed', 'Giza', 3),
  ];

constructor() { }
  public getAll() {
    return this.districts;
  }
  public getByCityName (city: string) {
    return this.districts.filter(district => district.cityName === city);
  }
}
