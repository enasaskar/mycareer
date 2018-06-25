import { Vacancy } from './vacancy.model';
import { Applicant } from './applicant.model';

export class Interview {
    userId?:number;
    vacancyId?: number;
    date: string;
    time: string;

    constructor(vacancyId: number, date: string, time: string) {
        this.vacancyId = vacancyId;
        this.date = date;
        this.time = time;
    }
}
