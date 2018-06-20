import { Applicant } from "./applicant.model";
import { Skill } from "./skill.model";

export class Evaluation{
    applicant_id:number;
    skill_id:number;
    rate:number;

    constructor(applicant_id:number,skill_id:number,rate:number){
        this.applicant_id = applicant_id;
        this.skill_id = skill_id;
        this.rate = rate;
    }
}