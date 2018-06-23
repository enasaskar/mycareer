import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';
import { colors } from '../../calendar-utils/colors';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public onEventDelete = new Subject();
  events: CalendarEvent[] = [
    {
        title: "interview",
        start: new Date("2018-06-20T10:00:00"),
        end: new Date("2018-06-20T16:00:00"),
        color: colors.yellow,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        actions: [
          {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.onEventDelete.next(event);
            }
          }
        ]
      },
      {
        title: "interview",
        start: new Date("2018-06-21T10:00:00"),
        end: new Date("2018-06-21T16:00:00"),
        color: colors.yellow,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        actions: [
          {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.onEventDelete.next(event);   
            }
          }
        ]
      }
    ]
 

  constructor() { }

  public add(event:CalendarEvent){
    this.events.push(event);
  }
  public update(){

  }
  public getAll():CalendarEvent[]{
    return this.events;
  }
  public delete(event:CalendarEvent){
    
    // const id = this.events.indexOf(event);
    // this.events.splice(id,1);
    this.events = this.events.filter(iEvent => iEvent !== event);
    //this.activeDayIsOpen = false;
    console.log(this.events);
    return this.events;
  }
}