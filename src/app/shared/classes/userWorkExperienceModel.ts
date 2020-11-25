import { Enterprise } from './enterprise';

export class WorkExperience {
    userId: number;
    enterpriseID: number;
    content: string;
    startDate: string;
    endDate: string;

    constructor(userId: number, enterpriseID: number, content: string, startDate: string, endDate: string) {
        this.userId = userId;
        this.enterpriseID = enterpriseID;
        this.content = content;
        this.startDate = startDate;
        this.endDate  = endDate;
    }
}
