import { Injectable } from '@angular/core';
import { Interview } from '../classes/interview.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  userPendingInterviews = [
    new Interview(1, '15-5-2018', '12:30 pm'),
    new Interview(2, '15-5-2018', '12:30 pm'),
    new Interview(3, '15-5-2018', '12:30 pm')
  ];
constructor() { }
getUserPendingInterviews(userId: number) {
  return this.userPendingInterviews;
}
deleteUserInterview(userId: number, interviewId: number) {
  this.userPendingInterviews.splice(interviewId, 1);
}

}
