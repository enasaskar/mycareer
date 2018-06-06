import { Injectable } from '@angular/core';
import { UserComments } from '../classes/user-comments';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {
  private comments : UserComments[] = [
    {
      id:1,
      userId:0,
      enterpriseId:1,
      comment:'I worked at this company for five years and it was a very good experience and environment'
    }
 
  ]
constructor() { 
}

    public getByEnterpriseId(id : number){
      let enterpriseComments : UserComments[] = [];
      for(let i = 0; i < this.comments.length; i++){
        if(this.comments[i].enterpriseId == id){
          enterpriseComments.push(this.comments[i]);
        }
        return enterpriseComments;
      }
    }

    public addComment(comment : UserComments){
        this.comments.push(comment);
    }

}
