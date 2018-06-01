import { Vacancy } from './vacancy.model';

export class JobOffer {
    vacancy: Vacancy;
    expireDate: string;
    accept: boolean;

    constructor(vacancy: Vacancy, expireDate: string) {
        this.vacancy = vacancy;
        this.expireDate = expireDate;
    }
}
