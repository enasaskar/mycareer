import { CalendarEvent } from "calendar-utils";

export class Event{
    vacancyId:number;
    event:CalendarEvent;

    constructor(id:number,event:CalendarEvent){
        this.event = event;
        this.vacancyId = id;
    }
}