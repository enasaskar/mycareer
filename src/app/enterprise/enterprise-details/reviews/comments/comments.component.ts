import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCommentsService } from '../../../../shared/services/user-comments.service';
import { User } from '../../../../users/users.model';
import { UserComments } from '../../../../shared/classes/user-comments';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  enterpriseId : number;
  comments : UserComments[] = [];
  newComment = new UserComments();
  constructor(private commentService : UserCommentsService,private active : ActivatedRoute) { }

  ngOnInit() {
    this.enterpriseId = this.active.snapshot.params["id"]; 
    this.comments = this.commentService.getByEnterpriseId(+this.enterpriseId);
    this.commentService.commentsChanged.subscribe(
      (comments : UserComments[]) => {
        this.comments = comments;
      }
    );
  }

  AddComment(){
    this.newComment.enterpriseId = +this.enterpriseId;
    this.newComment.userId = 0;
    this.commentService.addComment(this.newComment);
  }

}
