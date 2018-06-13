import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay } from 'date-fns';
import { colors } from '../../calendar-utils/colors';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events:CalendarEvent[]=[
    {
      title: "interviews",
      start: startOfDay("2018-06-18"),
      end: endOfDay("2018-06-18"),
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
    },
    {
      title: "interviews",
      start: startOfDay("2018-06-19"),
      end: endOfDay("2018-06-19"),
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
    },
    {
      title: "interviews",
      start: startOfDay("2018-06-20"),
      end: endOfDay("2018-06-20"),
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
    },
    {
      title: "interviews",
      start: startOfDay("2018-06-21"),
      end: endOfDay("2018-06-21"),
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
    }
  ]
  activeDayIsOpen: boolean;
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
    
  }
}
