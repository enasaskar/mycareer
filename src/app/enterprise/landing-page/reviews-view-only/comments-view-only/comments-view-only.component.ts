import { Component, OnInit } from '@angular/core';
import { UserComments } from '../../../../shared/classes/user-comments';
import { UserCommentsService } from '../../../../shared/services/user-comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-view-only',
  templateUrl: './comments-view-only.component.html',
  styleUrls: ['./comments-view-only.component.css']
})
export class CommentsViewOnlyComponent implements OnInit {

  enterpriseId : number;
  comments : UserComments[] = [];
  constructor(private commentService : UserCommentsService,private active : ActivatedRoute) { }

  ngOnInit() {
    this.enterpriseId = this.active.snapshot.params["id"]; 
    this.comments = this.commentService.getByEnterpriseId(1);
    this.commentService.commentsChanged.subscribe(
      (comments : UserComments[]) => {
        this.comments = comments;
      }
    );
  }

}
