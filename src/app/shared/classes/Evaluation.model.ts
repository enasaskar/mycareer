import { Applicant } from "./applicant.model";
import { Skill } from "./skill.model";

export class Evaluation{
    applicant:Applicant;
    skill:Skill;
    rate:number;

    constructor(applicant:Applicant,skill:Skill,rate:number){
        this.applicant = applicant;
        this.skill = skill;
        this.rate = rate;
    }
}