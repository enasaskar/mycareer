import { Vacancy } from './vacancy.model';

export class JobOffer {
    vacancyID: number;
    expireDate: string;
    accept: boolean;

    constructor(vacancyID: number, expireDate: string) {
        this.vacancyID = vacancyID;
        this.expireDate = expireDate;
    }
}
