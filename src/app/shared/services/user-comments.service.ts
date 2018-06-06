import { Injectable,EventEmitter } from '@angular/core';
import { UserComments } from '../classes/user-comments';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {

  commentsChanged = new EventEmitter<UserComments[]>();
  private comments : UserComments[] = [
    {
      id:1,
      userId:0,
      enterpriseId:1,
      comment:'I worked at this company for five years and it was a very good experience and environment'
    },
    {
      id:2,
      userId:0,
      enterpriseId:1,
      comment:'I worked at this company for five years and it was a very good experience and environment'
    },
    {
      id:3,
      userId:0,
      enterpriseId:1,
      comment:'I worked at this company for five years and it was a very good experience and environment'
    }
 
  ]
constructor() { 
}

    public getByEnterpriseId(id : number){
      return this.comments.filter(a => a.enterpriseId == id);
    }

    public addComment(comment : UserComments){
        this.comments.push(comment);
        this.commentsChanged.emit(this.getByEnterpriseId(comment.enterpriseId));
    }

}
