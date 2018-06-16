import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { addDays, startOfDay, endOfDay, isSameMonth, isSameDay } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction,
} from 'angular-calendar';
import { colors } from '../../calendar-utils/colors';
import { CalendarService } from '../../shared/services/calendar.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {
  view: string = 'month';
  
  viewDate: Date = new Date();
  
  clickedDate: Date;

  activeDayIsOpen: boolean;

  events: CalendarEvent[];

  refresh: Subject<any> = new Subject();
 
  constructor(private calendarService:CalendarService){
  }

  ngOnInit(){
    this.events = this.calendarService.getAll();
    console.log(this.events);
  }

  dayClicked({ date, events}: { date: Date; events: CalendarEvent[];}): void {
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
    console.log(this.events);
    //console.log(this.clickedDate.toLocaleDateString());
    const event:CalendarEvent = {
      title: "interviews",
      start: startOfDay(this.clickedDate),
      end: endOfDay(this.clickedDate),
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
            console.log(this.events);
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log(this.events);
            this.activeDayIsOpen = false;
          }
        }
      ]
    };
    this.calendarService.add(event);
    this.refresh.next();
  }
 
}

