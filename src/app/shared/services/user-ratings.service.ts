
import { Injectable } from '@angular/core';
import { UserRatings } from '../classes/user-ratings';

@Injectable({
  providedIn: 'root'
})
export class UserRatingsService {

  ratings : UserRatings[] = [
    {
      
      enterpriesId : 1,
      ratingListItemId:1,
      value : 3
    },
    {
     
      enterpriesId : 1,
      ratingListItemId:2,
      value : 5
    },
    {
      
      enterpriesId : 1,
      ratingListItemId:3,
      value : 3
    },
    {
      
      enterpriesId : 1,
      ratingListItemId:4,
      value : 4
    }
  ]
constructor() { }

public getAll(){
  
 return this.ratings.slice(); 
}

}
