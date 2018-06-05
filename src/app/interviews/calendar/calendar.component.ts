import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { addDays, startOfDay, endOfDay, isSameMonth, isSameDay } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction
} from 'angular-calendar';
import { colors } from '../../calendar-utils/colors';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent {
  view: string = 'month';
  
  viewDate: Date = new Date();

  targetDate:string ="";
  eventName:string ="";

  activeDayIsOpen: boolean;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  events: CalendarEvent[] = [
    // {
    //   title: 'Interviews',
    //   color: colors.yellow,
    //   start: startOfDay(new Date()),
    //   end: endOfDay(new Date()), // an end date is always required for resizable events to work
    //   resizable: {
    //     beforeStart: true, // this allows you to configure the sides the event is resizable from
    //     afterEnd: true
    //   },
    //   draggable:true
    // }
  ];

  refresh: Subject<any> = new Subject();
  
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  
  addEvent(): void {
    this.targetDate =  prompt("Enter the date of the event:in this format 2018-06-01");
    this.eventName = prompt("Enter the event name:");
    this.events.push({
      title: this.eventName,
      start: startOfDay(new Date(this.targetDate)),
      end: endOfDay(new Date(this.targetDate)),
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
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.activeDayIsOpen = false;
            // console.log('Event deleted', event);
          }
        }
      ]
    });
    this.refresh.next();
  }

  
}

