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
        start: new Date("2018-06-26T10:00:00"),
        end: new Date("2018-06-26T16:00:00"),
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
        start: new Date("2018-06-27T10:00:00"),
        end: new Date("2018-06-27T16:00:00"),
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
    this.events = this.events.filter(iEvent => iEvent !== event);
    return this.events;
  }
}
