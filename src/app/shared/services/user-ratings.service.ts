
import { Injectable } from '@angular/core';
import { UserRatings } from '../classes/user-ratings';

@Injectable({
  providedIn: 'root'
})
export class UserRatingsService {

  ratings : UserRatings[] = [
    {
      userId : 0,
      enterpriesId : 1,
      ratingListItemId:1,
      value : 3
    },
    {
      userId : 0,
      enterpriesId : 1,
      ratingListItemId:2,
      value : 5
    },
    {
      userId : 0,
      enterpriesId : 1,
      ratingListItemId:3,
      value : 3
    },
    {
      userId : 0,
      enterpriesId : 1,
      ratingListItemId:4,
      value : 4
    },
    {
      userId : 0,
      enterpriesId : 2,
      ratingListItemId:1,
      value : 3
    },
    {
      userId : 0,
      enterpriesId : 2,
      ratingListItemId:2,
      value : 5
    },
    {
      userId : 0,
      enterpriesId : 2,
      ratingListItemId:3,
      value : 3
    },
    {
      userId : 0,
      enterpriesId : 2,
      ratingListItemId:4,
      value : 4
    }
  ]
constructor() { }

public getAll(){
  
 return this.ratings.slice(); 
}

public addRating(rating : UserRatings){
  // this.ratings.push(rating);
}

}