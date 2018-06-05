import { Enterprise } from './enterprise';

export class WorkExperience {
    enterpriseID: number;
    content: string;
    startDate: string;
    endDate: string;

    constructor(enterpriseID: number, content: string, startDate: string, endDate: string) {
        this.enterpriseID = enterpriseID;
        this.content = content;
        this.startDate = startDate;
        this.endDate  = endDate;
    }
}
