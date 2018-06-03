import { Vacancy } from './vacancy.model';

export class Interview {
    vacancyId: number;
    date: string;
    time: string;

    constructor(vacancyId: number, date: string, time: string) {
        this.vacancyId = vacancyId;
        this.date = date;
        this.time = time;
    }
}
