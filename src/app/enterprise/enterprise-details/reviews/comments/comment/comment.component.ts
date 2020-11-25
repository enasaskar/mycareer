import { User } from './../../../../../users/users.model';
import { UserComments } from './../../../../../shared/classes/user-comments';
import { Component, OnInit, Input } from '@angular/core';
import { UserCommentsService } from '../../../../../shared/services/user-comments.service';
import { UserService } from '../../../../../shared/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment : UserComments;
  user : User;
  constructor(private userservice : UserService) { }

  ngOnInit() {
    this.user = this.userservice.getUserById(this.comment.userId);

  }

}
