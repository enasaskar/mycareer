import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { addDays, startOfDay, endOfDay, isSameMonth, isSameDay } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction,
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
  
  clickedDate: Date;

  activeDayIsOpen: boolean;

  events: CalendarEvent[]=[];

  refresh: Subject<any> = new Subject();

  // selectedMonthViewDay: CalendarMonthViewDay;

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

    // if (this.selectedMonthViewDay) {
    //   debugger;
    //   delete this.selectedMonthViewDay.cssClass;
    // }
    // day.cssClass = 'cal-day-selected';
    // this.selectedMonthViewDay = day;
  }

  // beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
  //   body.forEach(day => {
  //     if (
  //       this.selectedMonthViewDay &&
  //       day.date.getTime() === this.selectedMonthViewDay.date.getTime()
  //     ) {
  //       day.cssClass = 'cal-day-selected';
  //       this.selectedMonthViewDay = day;
  //     }
  //   });
  // }
  

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
    console.log(this.clickedDate.toLocaleDateString());
    this.events.push({
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

