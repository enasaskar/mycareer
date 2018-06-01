import { Enterprise } from './enterprise';

export class WorkExperience {
    enterprise: Enterprise;
    content: string;
    startDate: string;
    endDate: string;

    constructor(enterprise: Enterprise, content: string, startDate: string, endDate: string) {
        this.enterprise = enterprise;
        this.content = content;
        this.startDate = startDate;
        this.endDate  = endDate;
    }
}
