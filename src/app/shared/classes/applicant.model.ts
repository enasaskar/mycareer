import { User } from "../../users/users.model";
import { Vacancy } from "./vacancy.model";

export class Applicant {

    user:User;
    vacancy:Vacancy;
    status?:boolean;

    constructor(user:User,vacancy:Vacancy,status?:boolean){
        this.user = user;
        this.vacancy = vacancy;
        this.status = status;
    }
}