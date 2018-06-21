import { Applicant } from "./applicant.model";
import { Skill } from "./skill.model";

export class Evaluation{
    user_id:number;
    skill_id:number;
    rate:number;

    constructor(user_id:number,skill_id:number,rate:number){
        this.user_id = user_id;
        this.skill_id = skill_id;
        this.rate = rate;
    }
}