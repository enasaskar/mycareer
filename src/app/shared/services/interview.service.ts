import { Injectable } from '@angular/core';
import { Interview } from '../classes/interview.model';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  userPendingInterviews = [
    new Interview(1, '15-5-2018', '12:30 pm'),
    new Interview(2, '15-5-2018', '12:30 pm'),
    new Interview(3, '15-5-2018', '12:30 pm')
  ];
  pickedDate = this.eventService.getAll();
  interviews = [
    {
      userId:0,
      date:this.pickedDate[0].start.toLocaleDateString(),
      time:this.pickedDate[0].start.toLocaleTimeString()
    }
  ]
constructor(private eventService:CalendarService) { }
getUserPendingInterviews(userId: number) {
  return this.userPendingInterviews;
}
deleteUserInterview(userId: number, interviewId: number) {
  this.userPendingInterviews.splice(interviewId, 1);
}
public getInterviewByuserId(userId:number):Interview{
  return this.interviews.find(a => a.userId == userId);
}
}
